import { Controls } from "./controls.js"
import { Timer } from "./timer.js"
import { Sounds } from "./sounds.js"
import {
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet,
    minutesDisplay,
    secondesDisplay
} from "./elements.js"
import { Events } from "./events.js"

const sounds = Sounds()

const controls = Controls({
    buttonPlay,
    buttonPause,
    buttonStop,
    buttonSet
})

const timer = Timer({
    minutesDisplay,
    secondesDisplay,
    reset: controls.resetControls,
})

Events({ controls, timer, sounds })