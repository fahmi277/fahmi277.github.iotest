'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "58cdc472c804dac66bd9399c7f082e9e",
".git/config": "93d74b455ab7d521747d4ad10060c92f",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6530fae87cffe7f8042d1d2b1da52aaf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "ab25510e1daec97fce6e430155d2e04d",
".git/logs/refs/heads/main": "16146bddf7a81b496536bb636045d6c5",
".git/logs/refs/remotes/origin/main": "7927b847ae9e420eb75bd349f04f6a44",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/2b5063964b5a1bc4d20572a08e2bd95b1006ac": "33a612c062a2f2cdec6d8b00e0fd0ccf",
".git/objects/14/7e57933c44e78926c67982286778d473e1e505": "06079ecb1d90d077849c88d76fdf654c",
".git/objects/17/b3a8d477bbe72f1f7be6c329e86f52325f7eb2": "4eff5108a3656a3a58a02ef36ad036a8",
".git/objects/18/d928f0b675d0c7e483388fc014460098b14442": "ace033c2be6601431e438170d3176ddc",
".git/objects/1f/bfb038801cf06dc2a84113d1938336abbb62d0": "37e75b9fb873454d36258452091c51eb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/80d57ea8b3d85ad24b75b53489716dc94c25c8": "7202bd2d8bd2b86ade2e88b36f935f77",
".git/objects/2b/b93169b91871cce85a220dda3fde147238e55b": "07aa87fd8578f38e47614406b5cf28e4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/103816226e46c0f17f4612278992d0ac1c6131": "cc510b7a1388212e0c2362f20557a249",
".git/objects/42/356a9ef4685ed622a1f64a0434d707fe13c3d3": "080f6f9c4d084f4d59d4d8659f8cbb4a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/51/fa1caf03eaf5cce1ea008a2887284b3b9e0050": "5c1eb7994595efdf3ad614d8189b82c2",
".git/objects/55/159e407d5bde2c83f8d773ed14fc7381c70e97": "d7900fa31cac4cd9fd7a4837abab8a5b",
".git/objects/5f/f34dc4b185fd3b157e525a570cc7525e5ac99f": "f507aafca840703946e0ab7e4b247fa2",
".git/objects/60/36d593dda1382b2cea4ce136a720991c6723a6": "bd03733b5e8113b4a71bce5e42a00514",
".git/objects/62/75f925adc8e8fe8aa35ceb6744d6455e052bca": "e443d9db38cce6d2ff18adcbbd4836b1",
".git/objects/69/3e65a25a6fba19685a2abea03ce3ea2ad8b39b": "eddcd1b22b93ff2f95f7b9094e9ff2e9",
".git/objects/70/668463db4a4e9db4a02400f206b963efa17638": "a15090f7be04b5440af1ffe1499f7a00",
".git/objects/79/820d1485c9019326f1d541b6d9199a5aee5ef7": "e3291c62e46f3ba59efebf9ec2b56d7d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/20028a6a03511c73c9812c68d4daa328fd109a": "b6710258dac7102b8e91f353bae5aa09",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/8bdbf24f1b8e15304005a390cfb5e669bc5820": "2c8149f2d80827db6d5a614fc1047e3b",
".git/objects/91/b15c879b52fef981d79be90d0c6f513667413a": "1f19c9641292afd6450887dcc764cb7d",
".git/objects/99/2449a35f8156c857fd1dd05ef936e1cd432d85": "08c5d787fed8bdce28629e181b51a28d",
".git/objects/9a/41fa5409575d0a9fdc7f1df10a32e0efcf7f78": "a25e677f19865a561606d0371fc12a73",
".git/objects/9a/e0d7d0da34dbf105196111ddc73e40daa27fee": "0be683b5818b00f990be8a3ca061890b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a6/8c7a697d98c998e2169eae66cb1ef5e58c1e83": "08eda9670fe01c3f0e95933be93be4ff",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/aa/c8ab43910388a782dd7cfaeda268d7d88b603e": "22c4fa32bc95e64726725f86784ac3cf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/ba/4c663ae9919611a1705d1e0adf77cc15fd2fed": "c8d1696b974dd09c10b27130537c2823",
".git/objects/be/70ded605347cc09c8dfddc71d4ac565d750ae8": "dbec7786ceda4985106737c6d934b85b",
".git/objects/c0/25ebbd5d2cb9b8635d06ad6b78bdb7b7d3909e": "eae085cdeff0614d19884973df792d27",
".git/objects/db/e37414ec349eaf82c06ef4315ffb8f292ab359": "16e1f10acf10f45bbd9168efe9969bde",
".git/objects/dd/cc08ba344bd0fcfbb7c5615239edcc9587c6d7": "4f49f1f9e1a359ca285f6976d0f89211",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e8/906cf1eb451298b5c8a4b7511f696ba4855f9f": "feee9eb3dd039094d11fda8b2d9faa9e",
".git/objects/f9/1aa7a118dac53cd1607bfdb3cd2eaa60ddf7fe": "0e82b1bbe595ff1628940ef3e87e14ba",
".git/refs/heads/main": "d214ce8aaa47c3747a35b687155ccd7a",
".git/refs/remotes/origin/main": "d214ce8aaa47c3747a35b687155ccd7a",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "b4c3d05577fd45d304b6d714da7e0840",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "72a1e2ac1bec9eaa5b256295f1e56236",
"/": "72a1e2ac1bec9eaa5b256295f1e56236",
"main.dart.js": "64e2100c64f6f39365da925d6903492d",
"manifest.json": "cd252ed29cb7d6b8b8060e609b282dc7",
"version.json": "e9c875fa581d93f5efb44a2d184857d2"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
