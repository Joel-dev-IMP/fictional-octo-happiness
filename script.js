if (window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
        console.log(e);
        document.querySelector(".status").innerText = e

    }, true);
    document.querySelector(".status").innerText = "Possible"
} else {
    document.querySelector(".status").innerText = "Impossible"
}