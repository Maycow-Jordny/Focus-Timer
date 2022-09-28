export function Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
}) {

    function pause() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
    }

    function play() {
        buttonPlay.classList.add('hide')
        buttonPause.classList.remove('hide')
        buttonSet.classList.add('hide')
        buttonStop.classList.remove('hide')
    }

    function resetControls() {
        buttonStop.classList.add('hide')
        buttonSet.classList.remove('hide')
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    function pauseWithoutSet() {
        buttonPause.classList.add('hide')
        buttonPlay.classList.remove('hide')
    }

    return {
        resetControls,
        play,
        pause,
        pauseWithoutSet

    }
}

