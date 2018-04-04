self.addEventListener('install', e => {
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open('mfblog').then(cache => {
      return cache.addAll([
        '/',
        '/2017/01/02/starting-a-blog/',
        '/2017/01/11/jenkins-on-azure-app-service/',
        '/2017/01/21/hugo-in-azure-blob-storage/',
        '/2017/02/09/microsoft-ignite-next-week/',
        '/2017/02/13/live-demo/',
        '/2017/05/01/getting-started-with-terraform-on-azure/',
        '/2017/05/30/taking-helm-for-a-spin/',
        '/2018/02/27/start-using-jenkins-with-azure-in-5-minutes/',
        '/404.html',
        '/apple-touch-icon.png',
        '/css/font-awesome.min.css',
        '/css/images/avatar.png',
        '/css/images/logo.png',
        '/css/images/thumb-default-small.png',
        '/css/monokai.css',
        '/css/style.css',
        '/fancybox/blank.gif',
        '/fancybox/fancybox_loading.gif',
        '/fancybox/fancybox_loading@2x.gif',
        '/fancybox/fancybox_overlay.png',
        '/fancybox/fancybox_sprite.png',
        '/fancybox/fancybox_sprite@2x.png',
        '/fancybox/helpers/fancybox_buttons.png',
        '/fancybox/helpers/jquery.fancybox-buttons.css',
        '/fancybox/helpers/jquery.fancybox-buttons.js',
        '/fancybox/helpers/jquery.fancybox-media.js',
        '/fancybox/helpers/jquery.fancybox-thumbs.css',
        '/fancybox/helpers/jquery.fancybox-thumbs.js',
        '/fancybox/jquery.fancybox.css',
        '/fancybox/jquery.fancybox.js',
        '/fancybox/jquery.fancybox.pack.js',
        '/favicon.ico',
        '/fonts/fontawesome-webfont.eot',
        '/fonts/fontawesome-webfont.svg',
        '/fonts/fontawesome-webfont.ttf',
        '/fonts/fontawesome-webfont.woff',
        '/fonts/fontawesome-webfont.woff2',
        '/fonts/FontAwesome.otf',
        '/img/azjenkban.png',
        '/img/helmban.png',
        '/img/hugoazure1.PNG',
        '/img/hugoazureban.png',
        '/img/helmban.png',
        '/img/igniteban.png',
        '/img/ignitedemo1.png',
        '/img/ignitedemoban.png',
        '/img/ignitewrapupban.png',
        '/img/jenk1.png',
        '/img/jenk2.png',
        '/img/jenkaz5.png',
        '/img/jenkaz51.png',
        '/img/jenkaz52.png',
        '/img/jenkaz53.png',
        '/img/jenkban.png',
        '/img/logo.png',
        '/img/me128.png',
        '/img/terraformban.png',
        '/index.xml',
        '/js/script.js',
        '/page/aboutme/',
        '/page/',
        '/post/',
        '/sitemap.xml',
        '/tags/app-service/',
        '/tags/app-service/index.xml',
        '/tags/azure/',
        '/tags/azure/index.xml',
        '/tags/blob/',
        '/tags/blob/index.xml',
        '/tags/helm/',
        '/tags/helm/index.xml',
        '/tags/hugo/',
        '/tags/hugo/index.xml',
        '/tags/ignite/',
        '/tags/ignite/index.xml',
        '/tags/',
        '/tags/index.xml',
        '/tags/jenkins/',
        '/tags/jenkins/index.xml',
        '/tags/kubernetes/',
        '/tags/kubernetes/index.xml',
        '/tags/terraform/',
        '/tags/terraform/index.xml',
      ])
        .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request, {ignoreSearch: true}).then(response => {
      return response || fetch(event.request);
    })
  );
});