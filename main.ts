radio.onReceivedValue(function (name, value) {
    if (name == "S") {
        if (value == 0) {
            if (velocity + 5 <= 255) {
                velocity += 5
            }
        }
    }
    if (name == "M") {
        if (value == 0) {
            if (velocity - 5 >= 0) {
                velocity += -5
            }
        }
    }
    if (name == "U") {
        if (value == 0) {
            lastorder = name
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocity)
        }
    }
    if (name == "D") {
        if (value == 0) {
            lastorder = name
            maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocity)
        }
    }
    if (name == "L") {
        if (value == 0) {
            lastorder = name
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocity)
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocity)
        }
    }
    if (name == "R") {
        if (value == 0) {
            lastorder = name
            maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocity)
            maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocity)
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
    if (yvalue > 750 && (xvalue > 250 && xvalue < 750)) {
        lastorder = "JoystickAvanza"
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, velocity)
    } else {
        if (lastorder == "JoystickAvanza") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (xvalue > 750 && (yvalue > 250 && yvalue < 750)) {
        lastorder = "JoystickDerecha"
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, velocity)
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CCW, velocity)
    } else {
        if (lastorder == "JoystickDerecha") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (yvalue < 250 && (xvalue > 250 && xvalue < 750)) {
        lastorder = "JoystickRetrocede"
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, velocity)
    } else {
        if (lastorder == "JoystickRetrocede") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
    if (xvalue < 250 && (yvalue > 250 && yvalue < 750)) {
        lastorder = "JoystickIzquierda"
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, velocity)
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CCW, velocity)
    } else {
        if (lastorder == "JoystickIzquierda") {
            maqueen.motorStop(maqueen.Motors.All)
        }
    }
})
let xvalue = 0
let yvalue = 0
let lastorder = ""
let velocity = 0
radio.setGroup(1)
velocity = 60
