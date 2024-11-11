// Ana video ve diğer videoları seçin
const mainVideo = document.getElementById('mainVideo');
const videos = {
    '1': document.getElementById('video1'),
    '2': document.getElementById('video2'),
    '3': document.getElementById('video3'),
    '4': document.getElementById('video4'),
    '5': document.getElementById('video5'),
    '6': document.getElementById('video6'),
    '7': document.getElementById('video7'),
    '8': document.getElementById('video8'),
    '9': document.getElementById('video9')
};

// Tüm tuşlara atanmış videoların başlangıçta durdurulmuş ve gizli olduğundan emin olun
for (let key in videos) {
    videos[key].pause();
}

// Klavye tuşuna basıldığında
document.addEventListener('keydown', (event) => {
    const video = videos[event.key];
    if (video && video.paused) { // Video tanımlıysa ve oynatılmıyorsa
        mainVideo.pause();  // Ana videoyu durdur
        mainVideo.style.display = 'none';  // Ana videoyu gizle
        video.style.display = 'block';  // Diğer videoyu göster
        video.play();  // Diğer videoyu oynat
    }
});

// Klavye tuşu bırakıldığında
document.addEventListener('keyup', (event) => {
    const video = videos[event.key];
    if (video && !video.paused) { // Video tanımlıysa ve oynatılıyorsa
        video.pause();  // Tuşa basılınca oynayan videoyu durdur
        video.style.display = 'none';  // O videoyu gizle
        mainVideo.style.display = 'block';  // Ana videoyu göster
        mainVideo.play();  // Ana videoyu tekrar oynat
    }
});