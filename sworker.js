

if ("serviceWorker" in navigator) {
    self.addEventListener("install", function (event) {
        console.log("Service worker installed.");
    });

    self.addEventListener("activate", function (event) {
        console.log("Service worker activated.");
    });
}
