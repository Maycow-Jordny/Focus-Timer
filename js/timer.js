
import { Sounds } from "./sounds.js"

export function Timer({
    minutesDisplay,
    secondesDisplay,
    reset
}) {

    let timerTimeOut
    let minutes

    function pauseTimer() {
        clearTimeout(timerTimeOut)
    }

    function uptadeDisplay(minutes, seconds) {
        minutesDisplay.textContent = String(minutes).padStart(2, "0")
        secondesDisplay.textContent = String(seconds).padStart(2, "0")

    }


    function countDown() {
        timerTimeOut = setTimeout(function () {
            let seconds = Number(secondesDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = minutes <= 0 && seconds <= 0
            uptadeDisplay(minutes, 0)


            if (isFinished) {
                checkNumberAndNull()
                reset()
                pauseTimer()
                Sounds().Timerkitchen()
                return
            }

            if (seconds <= 0) {
                seconds = 60
                --minutes
            }

            uptadeDisplay(minutes, String(seconds - 1))

            countDown()
        }, 1000)

    }

    function setTimer() {
        minutes = prompt("Quantos minutos?")
        if (isNaN(minutes)) {
            alert("Digite apenas números")
            setTimer()
            return
        }
        if (minutes > 60) {
            alert("Tempo máximo de 60 minutos")
            setTimer()
            return
        }

        minutesDisplay.textContent = String(minutes).padStart(2, "0")

    }

    function checkNumberAndNull() {

        if (minutes == null) {
            minutes = 25
        }
        minutesDisplay.textContent = String(Number(minutesDisplay.textContent = minutes)).padStart(2, "0")
        secondesDisplay.textContent = "00"
    }



    return {
        countDown,
        uptadeDisplay,
        pauseTimer,
        setTimer,
        checkNumberAndNull
    }

}

