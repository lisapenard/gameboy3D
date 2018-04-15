// audio

const $togglePlay = document.querySelector('.start')
const $audio = document.querySelector('audio')


function toggleMusic() {
	
    if ($audio.paused) {
        $audio.play();

    } else {
        $audio.pause();
    }
}

