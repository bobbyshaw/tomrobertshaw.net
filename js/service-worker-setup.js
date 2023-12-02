/**
 * Manage service worker setup
 *
 * @constructor
 */
function ServiceWorkerSetup() {
    this.init();
};

/**
 * Initialise Service Worker
 */
ServiceWorkerSetup.prototype.init = function () {
    // Register the service worker
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.getRegistrations()
        .then( function(registrations) {
            for(let registration of registrations) {
                registration.unregister();
            }
        });
    }
};

window.ServiceWorkerSetup = new ServiceWorkerSetup();
