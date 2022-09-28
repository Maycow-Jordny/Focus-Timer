export function Sounds() {

    const bgAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/bg-audio.mp3?raw=true")
    const pressButton = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
    const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")

    bgAudio.loop

    function soundBgAudioPlay() {
        bgAudio.play()
    }

    function soundBgAudioPause() {
        bgAudio.pause()
    }

    function buttonPressPlay() {
        pressButton.play()
    }

    function Timerkitchen() {
        kitchenTimer.play()
    }

    return {
        soundBgAudioPlay,
        soundBgAudioPause,
        buttonPressPlay,
        Timerkitchen
    }
}
