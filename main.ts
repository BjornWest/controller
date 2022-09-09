input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        led.unplot(xPosition, yPosition)
        if (UpDown % 2 == 0) {
            if (xPosition > 0) {
                xPosition += -1
                radio.sendValue("xPos", xPosition)
            }
        } else {
            if (yPosition > 0) {
                yPosition += -1
                radio.sendValue("yPos", yPosition)
            }
        }
    } else if (mode == 1) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    if (xPosition == xTarget && yPosition == yTarget) {
        if (xPosition < 5 && yPosition < 5) {
            radio.sendValue("interact", 1)
        } else if (xPosition > 5 && yPosition < 5) {
            radio.sendValue("interact", 2)
        } else if (xPosition < 5 && yPosition > 5) {
            radio.sendValue("interact", 3)
        } else {
            radio.sendValue("interact", 4)
        }
    } else {
        UpDown += 1
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        led.unplot(xPosition, yPosition)
        if (UpDown % 2 == 0) {
            if (xPosition < 4) {
                xPosition += 1
                radio.sendValue("xPos", yPosition)
            }
        } else {
            if (yPosition < 4) {
                yPosition += 1
                radio.sendValue("yPos", yPosition)
            }
        }
    } else if (mode == 1) {
    	
    } else {
    	
    }
})
radio.onReceivedValue(function (name, value) {
    if (name == "xTarget") {
        xTarget = value
    }
    if (name == "yTarget") {
        yTarget = value
    }
})
let UpDown = 0
let yTarget = 0
let xTarget = 0
let yPosition = 0
let xPosition = 0
let mode = 0
mode = 0
radio.setGroup(1)
xPosition = 0
yPosition = 0
xTarget = 0
yTarget = 0
loops.everyInterval(1000, function () {
    if (mode == 0) {
    	
    }
})
basic.forever(function () {
	
})
basic.forever(function () {
    if (mode == 0) {
        led.plot(xPosition, yPosition)
    } else if (mode == 1) {
    	
    } else {
    	
    }
})
