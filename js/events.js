import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    buttonSoundOn,
    buttonoSoundOff,
} from "./elements.js"


export function Events({ controls, timer, sounds }) {

    buttonPlay.addEventListener('click', function () {
        controls.play()
        timer.countDown()
        sounds.buttonPressPlay()
    })

    buttonPause.addEventListener('click', function () {
        controls.pauseWithoutSet()
        timer.pauseTimer()
        sounds.buttonPressPlay()

    })

    buttonStop.addEventListener('click', function () {
        timer.pauseTimer()
        controls.pause()
        timer.checkNumberAndNull()
        sounds.buttonPressPlay()
    })

    buttonSoundOn.addEventListener('click', function () {
        buttonSoundOn.classList.add('hide')
        buttonoSoundOff.classList.remove('hide')
        sounds.soundBgAudioPlay()

    })

    buttonoSoundOff.addEventListener('click', function () {
        buttonoSoundOff.classList.add('hide')
        buttonSoundOn.classList.remove('hide')
        sounds.soundBgAudioPause()
    })


    buttonSet.addEventListener('click', function () {
        timer.setTimer()

    })


}



