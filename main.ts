input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        led.unplot(xPosition, yPosition)
        if (UpDown % 2 == 0) {
            if (xPosition > 0) {
                xPosition += -1
                radio.sendNumber(1)
            }
        } else {
            if (yPosition > 0) {
                yPosition += -1
                radio.sendNumber(3)
            }
        }
    } else if (mode == 1) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    let yTarget = 0
    let xTarget = 0
    if (xPosition == xTarget && yPosition == yTarget) {
        mode += 1
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
                radio.sendNumber(0)
            }
        } else {
            if (yPosition < 4) {
                yPosition += 1
                radio.sendNumber(2)
            }
        }
    } else if (mode == 1) {
    	
    } else {
    	
    }
})
let UpDown = 0
let yPosition = 0
let xPosition = 0
let mode = 0
mode = 0
radio.setGroup(1)
xPosition = 0
yPosition = 0
let star1 = images.createImage(`
    . . . . .
    . # . # .
    . . # . .
    . # . # .
    . . . . .
    `)
let star2 = images.createImage(`
    . . . . .
    . . # . .
    . # # # .
    . . # . .
    . . . . .
    `)
loops.everyInterval(1000, function () {
    if (mode == 0) {
        star1.showImage(0, 1000)
        star2.showImage(0, 1000)
        basic.clearScreen()
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
