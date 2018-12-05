

//This is just a bit of Javacsript to show that it works
let h1Text = "This is a demo";

let h1Element = document.getElementById("first-h1");
h1Element.textContent = h1Text;


//Check if there is support for Service workers and if so, load service worker,
//the service worker will add off line support
if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('service-worker.js')
             .then(function() { console.log('Service Worker Registered'); });
  }