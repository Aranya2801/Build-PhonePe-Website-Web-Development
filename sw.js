/* ============================================================
   PhonePe – Service Worker (PWA)
   Version: 2.0.0
   ============================================================ */

const CACHE_NAME    = 'phonepe-v2.0.0';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/src/styles/main.css',
  '/src/styles/animations.css',
  '/src/js/main.js',
  '/src/js/animations.js',
  '/src/js/calculator.js',
  '/src/js/utils.js',
  'https://fonts.googleapis.com/css2?family=Sora:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap',
];

// ── Install ───────────────────────────────────────────────
self.addEventListener('install', (event) => {
  console.log('[SW] Installing...');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('[SW] Caching static assets');
        return cache.addAll(STATIC_ASSETS.map(url => new Request(url, { credentials: 'same-origin' })));
      })
      .then(() => self.skipWaiting())
      .catch(err => console.warn('[SW] Cache failed:', err))
  );
});

// ── Activate ──────────────────────────────────────────────
self.addEventListener('activate', (event) => {
  console.log('[SW] Activating...');
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys
          .filter(k => k !== CACHE_NAME)
          .map(k => {
            console.log('[SW] Deleting old cache:', k);
            return caches.delete(k);
          })
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch Strategy ────────────────────────────────────────
self.addEventListener('fetch', (event) => {
  const { request } = event;
  const url = new URL(request.url);

  // Skip non-GET or chrome-extension
  if (request.method !== 'GET') return;
  if (url.protocol === 'chrome-extension:') return;

  // API calls – network first
  if (url.pathname.startsWith('/api/')) {
    event.respondWith(networkFirst(request));
    return;
  }

  // Images – cache first with fallback
  if (request.destination === 'image') {
    event.respondWith(cacheFirst(request));
    return;
  }

  // Everything else – stale while revalidate
  event.respondWith(staleWhileRevalidate(request));
});

// ── Strategies ────────────────────────────────────────────
async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return new Response('', { status: 408 });
  }
}

async function networkFirst(request) {
  try {
    const response = await fetch(request);
    if (response.ok) {
      const cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }
    return response;
  } catch {
    return caches.match(request) || new Response(
      JSON.stringify({ error: 'Offline' }),
      { status: 503, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

async function staleWhileRevalidate(request) {
  const cache    = await caches.open(CACHE_NAME);
  const cached   = await cache.match(request);

  const fetchPromise = fetch(request).then(response => {
    if (response.ok) cache.put(request, response.clone());
    return response;
  }).catch(() => null);

  return cached || fetchPromise || new Response('', { status: 503 });
}

// ── Background Sync ───────────────────────────────────────
self.addEventListener('sync', (event) => {
  if (event.tag === 'sync-transactions') {
    event.waitUntil(syncTransactions());
  }
});

async function syncTransactions() {
  // Sync pending offline transactions
  console.log('[SW] Syncing transactions...');
}

// ── Push Notifications ────────────────────────────────────
self.addEventListener('push', (event) => {
  const data = event.data?.json() ?? {};
  const options = {
    body:    data.body    || 'You have a new notification',
    icon:    data.icon    || '/public/assets/icons/icon-192.png',
    badge:   data.badge   || '/public/assets/icons/badge-72.png',
    image:   data.image,
    vibrate: [200, 100, 200],
    data:    { url: data.url || '/' },
    actions: data.actions || [
      { action: 'view',    title: 'View',    icon: '/public/assets/icons/check.png' },
      { action: 'dismiss', title: 'Dismiss', icon: '/public/assets/icons/close.png' },
    ],
  };

  event.waitUntil(
    self.registration.showNotification(data.title || 'PhonePe', options)
  );
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();

  if (event.action === 'dismiss') return;

  const url = event.notification.data?.url || '/';
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
      .then(windowClients => {
        const existing = windowClients.find(c => c.url === url && 'focus' in c);
        if (existing) return existing.focus();
        if (clients.openWindow) return clients.openWindow(url);
      })
  );
});

// ── Periodic Background Sync ──────────────────────────────
self.addEventListener('periodicsync', (event) => {
  if (event.tag === 'update-rates') {
    event.waitUntil(updateRates());
  }
});

async function updateRates() {
  // Fetch latest gold/MF rates in background
  console.log('[SW] Updating rates in background...');
}
