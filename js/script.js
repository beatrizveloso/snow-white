const storyText = document.getElementById('story-text');
const audioPlayer = document.getElementById('audio-player');

audioPlayer.addEventListener('timeupdate', function() {
    const currentTime = audioPlayer.currentTime;
    const words = storyText.innerText.split(' ');

    for (let i = 0; i < words.length; i++) {
        const wordStartTime = i * 0.4; // Duração de cada palavra
        const wordEndTime = (i + 1) * 0.4; // Duração de cada palavra

        if (currentTime >= wordStartTime && currentTime <= wordEndTime) {
            storyText.innerHTML = words
                .map((word, index) => {
                    if (index === i) {
                        return `<span style="color: red;">${word}</span>`;
                    } else {
                        return word;
                    }
                })
                .join(' ');
            break;
        }
    }
});
