// Control del audio
function toggleAudio() {
    const audio = document.getElementById('mercadoAudio');
    const icon = document.getElementById('audioIcon');
    
    if (audio.paused) {
        audio.play();
        icon.classList.remove('bi-play-circle');
        icon.classList.add('bi-pause-circle');
    } else {
        audio.pause();
        icon.classList.remove('bi-pause-circle');
        icon.classList.add('bi-play-circle');
    }
}

// Control de video
function toggleVideo() {
    const video = document.getElementById('mercadoVideo');
    const icon = document.getElementById('videoIcon');
    
    if (video.paused) {
        video.play();
        icon.classList.remove('bi-play-circle');
        icon.classList.add('bi-pause-circle');
    } else {
        video.pause();
        icon.classList.remove('bi-pause-circle');
        icon.classList.add('bi-play-circle');
    }
}

// Event listeners para actualizar iconos cuando termine la reproducción y permita además realizar pausas
document.addEventListener('DOMContentLoaded', function() {
    const audio = document.getElementById('mercadoAudio');
    const video = document.getElementById('mercadoVideo');
    
    if (audio) {
        audio.addEventListener('ended', function() {
            const icon = document.getElementById('audioIcon');
            icon.classList.remove('bi-pause-circle');
            icon.classList.add('bi-play-circle');
        });
    }
    
    if (video) {
        video.addEventListener('ended', function() {
            const icon = document.getElementById('videoIcon');
            icon.classList.remove('bi-pause-circle');
            icon.classList.add('bi-play-circle');
        });
    }
});