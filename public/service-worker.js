if(!self.define){let e,s={};const a=(a,c)=>(a=new URL(a+".js",c).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(c,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>a(e,i),d={module:{uri:i},exports:r,require:t};s[i]=Promise.all(c.map((e=>d[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-50de5c5d"],(function(e){"use strict";importScripts("fallback-gusCWb2PpDlfuK20xO8Qq.js"),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/404.svg",revision:"d38ac435783a21f1956e5ca6c207228d"},{url:"/_next/static/chunks/177-0367b6d226a9895f.js",revision:"0367b6d226a9895f"},{url:"/_next/static/chunks/18-b340ad8283242ccf.js",revision:"b340ad8283242ccf"},{url:"/_next/static/chunks/1b8dab7b-dce97b277f2f0463.js",revision:"dce97b277f2f0463"},{url:"/_next/static/chunks/228771e0-5273cd4ee92e958b.js",revision:"5273cd4ee92e958b"},{url:"/_next/static/chunks/3-cdcb00e13780dee0.js",revision:"cdcb00e13780dee0"},{url:"/_next/static/chunks/31664189-86708806381c5388.js",revision:"86708806381c5388"},{url:"/_next/static/chunks/319-dcda2ed70d5f5d6e.js",revision:"dcda2ed70d5f5d6e"},{url:"/_next/static/chunks/330-4788bacd3c23e0f0.js",revision:"4788bacd3c23e0f0"},{url:"/_next/static/chunks/464.57ba207272c152ab.js",revision:"57ba207272c152ab"},{url:"/_next/static/chunks/533-b6062c0a24266e3a.js",revision:"b6062c0a24266e3a"},{url:"/_next/static/chunks/545.d4c39f03a9b31b2e.js",revision:"d4c39f03a9b31b2e"},{url:"/_next/static/chunks/64-7871fadfb843f61f.js",revision:"7871fadfb843f61f"},{url:"/_next/static/chunks/65291039-3b11436304486c29.js",revision:"3b11436304486c29"},{url:"/_next/static/chunks/688-3a48c94b16e5df02.js",revision:"3a48c94b16e5df02"},{url:"/_next/static/chunks/778-e169ffdcc99e3d31.js",revision:"e169ffdcc99e3d31"},{url:"/_next/static/chunks/789.77bff42e095bf197.js",revision:"77bff42e095bf197"},{url:"/_next/static/chunks/949-35ce6855099565bc.js",revision:"35ce6855099565bc"},{url:"/_next/static/chunks/964-f3a2f324e6c6b7cc.js",revision:"f3a2f324e6c6b7cc"},{url:"/_next/static/chunks/988-646ec8664042d7b9.js",revision:"646ec8664042d7b9"},{url:"/_next/static/chunks/ae51ba48-79f85d9d2887b5eb.js",revision:"79f85d9d2887b5eb"},{url:"/_next/static/chunks/c9184924-4d6450db75d886e6.js",revision:"4d6450db75d886e6"},{url:"/_next/static/chunks/d64684d8-6eedebd23d47667f.js",revision:"6eedebd23d47667f"},{url:"/_next/static/chunks/framework-89060607603ae9b9.js",revision:"89060607603ae9b9"},{url:"/_next/static/chunks/main-98bc2164b2a232fb.js",revision:"98bc2164b2a232fb"},{url:"/_next/static/chunks/pages/404-d3deecdc301d2bc9.js",revision:"d3deecdc301d2bc9"},{url:"/_next/static/chunks/pages/_app-dedc0fe14194441b.js",revision:"dedc0fe14194441b"},{url:"/_next/static/chunks/pages/_error-3ee352f08633342a.js",revision:"3ee352f08633342a"},{url:"/_next/static/chunks/pages/_offline-8a07cdff74285eca.js",revision:"8a07cdff74285eca"},{url:"/_next/static/chunks/pages/about-us-c0bebf113ea1f973.js",revision:"c0bebf113ea1f973"},{url:"/_next/static/chunks/pages/checkout-71a15ad4cac4f007.js",revision:"71a15ad4cac4f007"},{url:"/_next/static/chunks/pages/contact-us-bab4f424975d0dbb.js",revision:"bab4f424975d0dbb"},{url:"/_next/static/chunks/pages/faq-5385e4a8840dffc4.js",revision:"5385e4a8840dffc4"},{url:"/_next/static/chunks/pages/index-45296c36a05617a4.js",revision:"45296c36a05617a4"},{url:"/_next/static/chunks/pages/offer-f786967386e4ac9c.js",revision:"f786967386e4ac9c"},{url:"/_next/static/chunks/pages/order/%5Bid%5D-f3c957b9c98a587c.js",revision:"f3c957b9c98a587c"},{url:"/_next/static/chunks/pages/privacy-policy-bcac6339fbf20690.js",revision:"bcac6339fbf20690"},{url:"/_next/static/chunks/pages/product/%5Bslug%5D-54c0935c143ce778.js",revision:"54c0935c143ce778"},{url:"/_next/static/chunks/pages/search-8237e9e2413b5bd0.js",revision:"8237e9e2413b5bd0"},{url:"/_next/static/chunks/pages/terms-and-conditions-15af1f11ad5759d6.js",revision:"15af1f11ad5759d6"},{url:"/_next/static/chunks/pages/user/change-password-98fc2e47deb1c39f.js",revision:"98fc2e47deb1c39f"},{url:"/_next/static/chunks/pages/user/dashboard-cbb67d27ab4e1d87.js",revision:"cbb67d27ab4e1d87"},{url:"/_next/static/chunks/pages/user/email-verification/%5Btoken%5D-3db48cd9159543b3.js",revision:"3db48cd9159543b3"},{url:"/_next/static/chunks/pages/user/forget-password/%5Btoken%5D-0fee1db53f74bb61.js",revision:"0fee1db53f74bb61"},{url:"/_next/static/chunks/pages/user/my-orders-e3ba75bc2844c9d8.js",revision:"e3ba75bc2844c9d8"},{url:"/_next/static/chunks/pages/user/recent-order-3498c06f6f5a8000.js",revision:"3498c06f6f5a8000"},{url:"/_next/static/chunks/pages/user/update-profile-65708cf7760543e5.js",revision:"65708cf7760543e5"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-ad1510405a4aec44.js",revision:"ad1510405a4aec44"},{url:"/_next/static/css/5088e6c9c206efb3.css",revision:"5088e6c9c206efb3"},{url:"/_next/static/css/ae4ed9c503fd1e33.css",revision:"ae4ed9c503fd1e33"},{url:"/_next/static/css/c2c4e2b9bf1b95af.css",revision:"c2c4e2b9bf1b95af"},{url:"/_next/static/css/f74037b3184b80b6.css",revision:"f74037b3184b80b6"},{url:"/_next/static/gusCWb2PpDlfuK20xO8Qq/_buildManifest.js",revision:"e873e0dfc63636be0b40578e7ed371b0"},{url:"/_next/static/gusCWb2PpDlfuK20xO8Qq/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/github.023cf8ed.svg",revision:"42f81af30b7fcc39a3c7f8aaafc3f454"},{url:"/_offline",revision:"gusCWb2PpDlfuK20xO8Qq"},{url:"/about-banner.jpg",revision:"79bcd14e1663eeb10fd2078a1b40a68a"},{url:"/about-us.jpg",revision:"a69c8f7c944c6dd9673e4e8407684ae9"},{url:"/app-download-img-left.png",revision:"72d8da82c11b9694f687e2b24711a82a"},{url:"/app-download-img.png",revision:"22ab424e74d09df11be0f6943a264856"},{url:"/app/app-store.svg",revision:"a717e97b14d37aa12c48a288bddf4bae"},{url:"/app/mastercard-icon.svg",revision:"2f3b7f6dc10d68bf74366ce0e4b39217"},{url:"/app/paypal-icon.svg",revision:"99025da84086629516e323641cdfd73b"},{url:"/app/play-store.svg",revision:"a2b0ad8b1000e23bf80ca9ef30b14b97"},{url:"/app/skrill-icon.svg",revision:"01cb261e1e28b74c3f51a379a63216d3"},{url:"/app/visa-icon.svg",revision:"58cb00fe42ab95ae26c5e7e429f04545"},{url:"/assets/icons/general/flash.svg",revision:"143ded0e21391f65dd6fa01ae2316bbe"},{url:"/assets/icons/social/github.svg",revision:"42f81af30b7fcc39a3c7f8aaafc3f454"},{url:"/banner-1.jpg",revision:"96eaf5765f56f7574dc21db0424668f3"},{url:"/banner-2.jpg",revision:"d08fc088d9d75823e8259261e9208cf2"},{url:"/contact-us.png",revision:"1f0a34dcebe83884f7d986c29069cff0"},{url:"/cta-bg.png",revision:"0dd94ded00743cc74d0da8027b579b73"},{url:"/cta/cta-bg-1.jpg",revision:"45b3e432be8fc7f3eb09f2568a61d8c2"},{url:"/cta/cta-bg-2.jpg",revision:"83ca16fa37654fd7de5518d0f347a29c"},{url:"/cta/cta-bg-3.jpg",revision:"42c150e775ca1b35399b3428d5ee2e00"},{url:"/cta/delivery-boy.png",revision:"9914b651b1428467046e8b886166dac9"},{url:"/facebook-page.png",revision:"ef4d865db87a0cb31ac651de1d20310a"},{url:"/faq.svg",revision:"2979a7b97c0c5d96960e9558a389bbd4"},{url:"/favicon.png",revision:"de3a6a99ebfd2f8df9b83496def9f96d"},{url:"/flags/de.svg",revision:"ba7a594493ff361407a8bbdbe822b413"},{url:"/flags/us.svg",revision:"42219103602e6dd2f02fb005bce546b7"},{url:"/loader/spinner.gif",revision:"9317b1364997865cda53478fb9302977"},{url:"/logo/Logo-dark.png",revision:"a8a1e69ace3b9a1edd75d6165b2bedd8"},{url:"/logo/Logo-dark.svg",revision:"3743eefbbff3a01c8b1f661b570abcbf"},{url:"/logo/Logo-light.svg",revision:"d0956a5f20b6846243a8abd5a87f8059"},{url:"/logo/Test/logo-dark.png",revision:"7ad9a2d698cde272580897c1d0585aef"},{url:"/logo/Test/logo.png",revision:"1935bc554b15c25ca207e8a7835d9273"},{url:"/logo/Test/logo.svg",revision:"64f02c52a2a827cc0f21bf0f11d71b2c"},{url:"/logo/bag-shoping.svg",revision:"54014870b794b613e62017decbe943d0"},{url:"/manifest.json",revision:"8a91adf4f709397e5942942d0b928842"},{url:"/no-result.svg",revision:"508b2439b4b83ce579e826c9c625b675"},{url:"/page-header-bg.jpg",revision:"c7cf9224e6c1ae3add73d30c2ae7a8f8"},{url:"/payment-method/payment-logo.png",revision:"469911779f6463e5751cf5b7046384d2"},{url:"/robots.txt",revision:"61c27d2cd39a713f7829422c3d9edcc7"},{url:"/slider/slider-1.jpg",revision:"9611448d0a85493ee21c5317323cb601"},{url:"/slider/slider-2.jpg",revision:"fe98a6e4032332b05d52aa1254f085a7"},{url:"/slider/slider-3.jpg",revision:"06cef52491c3b8682d15596e784362bb"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s},{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600}),{handlerDidError:async({request:e})=>self.fallback(e)}]}),"GET")}));
