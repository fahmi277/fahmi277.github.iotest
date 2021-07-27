'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "639598e5a642e60f7b097d51ed66831c",
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
".git/index": "6482bd13d3bcaac884a93044ac02ccdc",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f1322898ddec12892f4ddcd1a5dc3411",
".git/logs/refs/heads/main": "feff1a08bfafdcc5abb3f581ade65a83",
".git/logs/refs/remotes/origin/main": "c90408c8a35c4040c66aae9594bfed37",
".git/objects/03/22edbbd705f36a2582456952848a86b3b2b916": "822d87c9a5d7033760a1fcbdda402cf7",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/06/2b5063964b5a1bc4d20572a08e2bd95b1006ac": "33a612c062a2f2cdec6d8b00e0fd0ccf",
".git/objects/14/7e57933c44e78926c67982286778d473e1e505": "06079ecb1d90d077849c88d76fdf654c",
".git/objects/17/b3a8d477bbe72f1f7be6c329e86f52325f7eb2": "4eff5108a3656a3a58a02ef36ad036a8",
".git/objects/18/1635fb03865c4bb5280e040e87e45f656e12e5": "a5f125bb44b6e87b0200ecf322678524",
".git/objects/18/d928f0b675d0c7e483388fc014460098b14442": "ace033c2be6601431e438170d3176ddc",
".git/objects/1e/fa32e3ad7ec5e62d40917f712dd602f817bca6": "f7217041bcbf142d42479b28024c0740",
".git/objects/1f/bfb038801cf06dc2a84113d1938336abbb62d0": "37e75b9fb873454d36258452091c51eb",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/26/80d57ea8b3d85ad24b75b53489716dc94c25c8": "7202bd2d8bd2b86ade2e88b36f935f77",
".git/objects/2b/b93169b91871cce85a220dda3fde147238e55b": "07aa87fd8578f38e47614406b5cf28e4",
".git/objects/32/46ad559eeae0370195978eaed83f1053ee13fd": "a043dbc0a0bda96ce2127799ccc27506",
".git/objects/37/103816226e46c0f17f4612278992d0ac1c6131": "cc510b7a1388212e0c2362f20557a249",
".git/objects/42/356a9ef4685ed622a1f64a0434d707fe13c3d3": "080f6f9c4d084f4d59d4d8659f8cbb4a",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4d/3d882e5839a449fc7d2caae987945feed063c3": "0282e833162651c21f5d0bba22791182",
".git/objects/51/fa1caf03eaf5cce1ea008a2887284b3b9e0050": "5c1eb7994595efdf3ad614d8189b82c2",
".git/objects/54/303ef34ce85550d1152f2a091cc1756da4e498": "2c2ae2fb4d82056a1cde93bec048ebb1",
".git/objects/55/159e407d5bde2c83f8d773ed14fc7381c70e97": "d7900fa31cac4cd9fd7a4837abab8a5b",
".git/objects/5e/83f6cf3e268e88fffa42da5a2eb1c0db8070e9": "41da4e24d805abcd509f4c831d0eb71f",
".git/objects/5f/3d255e2d7d81cea6fef0f84223cbc118d9eb04": "6152d5e316b01537426991efb93b75c4",
".git/objects/5f/f34dc4b185fd3b157e525a570cc7525e5ac99f": "f507aafca840703946e0ab7e4b247fa2",
".git/objects/60/36d593dda1382b2cea4ce136a720991c6723a6": "bd03733b5e8113b4a71bce5e42a00514",
".git/objects/61/6b076a86fe1d58d8bef1f4b65dc570adab7f40": "5f849376c980de83025a06dd4092866a",
".git/objects/62/75f925adc8e8fe8aa35ceb6744d6455e052bca": "e443d9db38cce6d2ff18adcbbd4836b1",
".git/objects/67/27928a8f043b259260c7e0814d75fd69194551": "a78c97a867d63ef125906d6e2c552ddd",
".git/objects/69/3e65a25a6fba19685a2abea03ce3ea2ad8b39b": "eddcd1b22b93ff2f95f7b9094e9ff2e9",
".git/objects/70/668463db4a4e9db4a02400f206b963efa17638": "a15090f7be04b5440af1ffe1499f7a00",
".git/objects/73/cf0103a9de329efc317034b929375b27ff5cbc": "52189857869bada7c02276a31fc9c5bd",
".git/objects/79/820d1485c9019326f1d541b6d9199a5aee5ef7": "e3291c62e46f3ba59efebf9ec2b56d7d",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/20028a6a03511c73c9812c68d4daa328fd109a": "b6710258dac7102b8e91f353bae5aa09",
".git/objects/82/632541646c950f1831639635566e2f04d1d21c": "96b21880fee7b0ae2f86914250fd5cc5",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/91/8bdbf24f1b8e15304005a390cfb5e669bc5820": "2c8149f2d80827db6d5a614fc1047e3b",
".git/objects/91/b15c879b52fef981d79be90d0c6f513667413a": "1f19c9641292afd6450887dcc764cb7d",
".git/objects/92/3b7014e7dea338c76fe7b605688dc350b93728": "253ed8977e7d80389dd524c0682a0054",
".git/objects/93/ae628cf57cd509cbffdc91da14d3183391c843": "e24263d21d831f26a933a8450942c518",
".git/objects/99/2449a35f8156c857fd1dd05ef936e1cd432d85": "08c5d787fed8bdce28629e181b51a28d",
".git/objects/99/7070af8abe81391dba40dc36c8498ae2780d65": "5f6c7ee46448cc24546e3c58d6444f52",
".git/objects/9a/41fa5409575d0a9fdc7f1df10a32e0efcf7f78": "a25e677f19865a561606d0371fc12a73",
".git/objects/9a/e0d7d0da34dbf105196111ddc73e40daa27fee": "0be683b5818b00f990be8a3ca061890b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/e98e23d91313533b58fcb75d415ec23e50e2df": "a908d4ea7f9777abd19561643163447f",
".git/objects/a6/8c7a697d98c998e2169eae66cb1ef5e58c1e83": "08eda9670fe01c3f0e95933be93be4ff",
".git/objects/a8/beffd3ad4fe54d6cabccf83a05477d6a986cd0": "6677888e4a051c7838b5b240c09f0981",
".git/objects/a9/78373cd3a670f62a1c32d6604d718afe5a2202": "e73738454d512b6449a84bac26f08f95",
".git/objects/a9/8c01e108cf5eeada556206c89d2a34449edaa4": "a3fba3742c3bfae9010a1ebe434d6a3e",
".git/objects/aa/c8ab43910388a782dd7cfaeda268d7d88b603e": "22c4fa32bc95e64726725f86784ac3cf",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/372177a6d1faffca56b8a74eafd3c941c7fd00": "5905c17fdfda4ba50e50f4f0f8d9d4db",
".git/objects/ba/4c663ae9919611a1705d1e0adf77cc15fd2fed": "c8d1696b974dd09c10b27130537c2823",
".git/objects/bd/2b9dc45cb8fcb4d7054ce016b43f895f82c93d": "00a7e5ffcaadd531bc6a3bb735677560",
".git/objects/be/70ded605347cc09c8dfddc71d4ac565d750ae8": "dbec7786ceda4985106737c6d934b85b",
".git/objects/c0/25ebbd5d2cb9b8635d06ad6b78bdb7b7d3909e": "eae085cdeff0614d19884973df792d27",
".git/objects/cc/e075512dd3b1a5f4fc5c96a30be94119e60e11": "cf36b29ef76984c7f043dc2b956e3e5d",
".git/objects/cf/63d4df3513acd00893bbf59a37e9f72a255453": "ffb78f9f34d57ab61f6c2a5f9aa6ec7f",
".git/objects/d0/6ebb3362e4fc609634f85f6e9d2fd3675c22f3": "ae784c066f0a0ca71bfbfc9cb4ffa2fe",
".git/objects/d1/bc0570a7389c35ec8c6202db8b95172d179783": "d7e669403e52f4168db263b9ca93a973",
".git/objects/d7/55699e74cd521f5122af6ab93f1ef02eddd86e": "aa08ec8a05b2c629fc9bd3a8521f56fa",
".git/objects/da/9e8f7ef704e67defb8f5be634a28db6870b1a4": "795d9b9a7da3ce78a55792a4342f6414",
".git/objects/db/e37414ec349eaf82c06ef4315ffb8f292ab359": "16e1f10acf10f45bbd9168efe9969bde",
".git/objects/dd/cc08ba344bd0fcfbb7c5615239edcc9587c6d7": "4f49f1f9e1a359ca285f6976d0f89211",
".git/objects/e0/869efdecf85fde890c69f59b0fbde537e2886e": "e5ccac9cc165e2f8c29cec1620ce70ce",
".git/objects/e0/f8befe167c1ef4831e37b2e42e38ebacf3d504": "5551397f50a095019a3bf29203f87f03",
".git/objects/e5/36a8137b8c10330dcebf3e5a286ea04d11b864": "a84c34520616377b281e09a1fd06d09c",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/fcaa8412f0db107ecf1b788ea2c9b59f917366": "a6d8dfc6fcc96df905b2a856008a6876",
".git/objects/e8/906cf1eb451298b5c8a4b7511f696ba4855f9f": "feee9eb3dd039094d11fda8b2d9faa9e",
".git/objects/f9/1aa7a118dac53cd1607bfdb3cd2eaa60ddf7fe": "0e82b1bbe595ff1628940ef3e87e14ba",
".git/refs/heads/main": "98cd0730f0892fabba4ac393c71d2307",
".git/refs/remotes/origin/main": "98cd0730f0892fabba4ac393c71d2307",
"assets/AssetManifest.json": "2efbb41d7877d10aac9d091f58ccd7b9",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "9c1ef27649807fc619cb7f331a507718",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "05687dd870da8ff22a366435731c6121",
"/": "05687dd870da8ff22a366435731c6121",
"main.dart.js": "0508a60e4386ecb64dd5615af56492e6",
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
