function toggleAudio() {
    const audio = document.getElementById("bmusic");
    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
}
document.addEventListener("DOMContentLoaded", function() {
    var userLang = navigator.language || navigator.userLanguage;
    if (userLang.startsWith('es')) {
        window.location.href = "index.html";
    }
});
function redirigir(url) {
    window.location.href = url;
}