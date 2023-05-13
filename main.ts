maqueen.ltEvent(maqueen.Patrol1.PatrolRight, maqueen.Voltage.Low, function () {
    sensorder = 1
    if (sensorizq == 1 && sensorder == 1) {
        basic.showIcon(IconNames.No)
    }
})
maqueen.ltEvent(maqueen.Patrol1.PatrolLeft, maqueen.Voltage.Low, function () {
    sensorizq = 1
    if (sensorizq == 1 && sensorder == 1) {
        basic.showIcon(IconNames.No)
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "U") {
        if (value == 0) {
            angulo = angulo - 10
            if (angulo >= minangle) {
                pins.servoWritePin(AnalogPin.P2, angulo)
            } else {
                angulo = minangle
            }
        }
    }
    if (name == "D") {
        if (value == 0) {
            angulo = angulo + 10
            if (angulo <= maxangle) {
                pins.servoWritePin(AnalogPin.P2, angulo)
            } else {
                angulo = maxangle
            }
        }
    }
    if (name == "Y") {
        yvalue = value
    }
    if (name == "X") {
        xvalue = value
    }
    if (value == 1 && lastorder == name) {
        maqueen.motorStop(maqueen.Motors.All)
    }
    if (yvalue >= 750 && (xvalue > 250 && xvalue < 750)) {
        lastorder = "JoystickAvanza"
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocity)
    } else {
        if (lastorder == "JoystickAvanza") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (xvalue >= 750 && (yvalue > 250 && yvalue < 750)) {
        lastorder = "JoystickDerecha"
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocity)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocity)
    } else {
        if (lastorder == "JoystickDerecha") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (yvalue <= 250 && (xvalue > 250 && xvalue < 750)) {
        lastorder = "JoystickRetrocede"
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocity)
    } else {
        if (lastorder == "JoystickRetrocede") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (xvalue <= 250 && (yvalue > 250 && yvalue < 750)) {
        lastorder = "JoystickIzquierda"
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocity)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocity)
    } else {
        if (lastorder == "JoystickIzquierda") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
let lastorder = ""
let xvalue = 0
let yvalue = 0
let minangle = 0
let maxangle = 0
let angulo = 0
let velocity = 0
let sensorder = 0
let sensorizq = 0
radio.setGroup(1)
sensorizq = 0
sensorder = 0
velocity = 255
angulo = 90
maxangle = 85
minangle = 30
pins.servoWritePin(AnalogPin.P2, maxangle)
basic.showIcon(IconNames.Yes)
