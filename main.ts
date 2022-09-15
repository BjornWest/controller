function plot10x10 (x: number, y: number) {
    radio.sendValue("xPlot", x)
    radio.sendValue("yPlot", y)
}
input.onButtonPressed(Button.A, function () {
    if (mode == 0) {
        led.unplot(xPosition, yPosition)
        if (UpDown % 2 == 0) {
            if (xPosition > 0 && (cubeX != 5 || (xPosition - 1 != cubeX || yPosition != cubeY))) {
                xPosition += -1
                radio.sendValue("xPos", xPosition)
            }
        } else {
            if (yPosition > 0 && (cubeY != 5 || (xPosition != cubeX || yPosition - 1 != cubeY))) {
                yPosition += -1
                radio.sendValue("yPos", yPosition)
            }
        }
    } else if (mode == 1) {
        if (canMove == 0) {
            if (direction > 0) {
                direction += -1
                canMove = 1
            } else {
                direction = 3
                canMove = 1
            }
        }
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
        led.unplot(xPosition, yPosition)
        UpDown += 1
        length = 1
        xpos = 2
        ypos = 3
        xList = [xpos]
        yList = [ypos]
        foodX = 2
        foodY = 2
        canMove = 0
    }
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "snake") {
        mode = 1
        led.unplot(xPosition, yPosition)
        length = 1
        xpos = 2
        ypos = 3
        xList = [xpos]
        yList = [ypos]
        foodX = 2
        foodY = 2
        canMove = 0
    }
})
input.onButtonPressed(Button.B, function () {
    if (mode == 0) {
        led.unplot(xPosition, yPosition)
        if (UpDown % 2 == 0) {
            if (xPosition < 9 && (cubeX != 9 || (xPosition + 1 != cubeX || yPosition != cubeY))) {
                xPosition += 1
                radio.sendValue("xPos", xPosition)
                radio.sendValue("xPos", xPosition)
                radio.sendValue("xPos", xPosition)
            }
        } else {
            if (yPosition < 9 && (cubeY != 9 || (xPosition != cubeX || yPosition + 1 != cubeY))) {
                yPosition += 1
                radio.sendValue("yPos", yPosition)
                radio.sendValue("yPos", yPosition)
                radio.sendValue("yPos", yPosition)
            }
        }
    } else if (mode == 1) {
        if (canMove == 0) {
            if (direction < 3) {
                direction += 1
                canMove = 1
            } else {
                direction = 0
                canMove = 1
            }
        }
    } else {
    	
    }
})
function snakeMove () {
    canMove = 0
    led.plot(foodX, foodY)
    plot10x10(foodX, foodY)
    if (run == 0) {
        if (direction == 0) {
            ypos += -1
        } else if (direction == 1) {
            xpos += 1
        } else if (direction == 2) {
            ypos += 1
        } else {
            xpos += -1
        }
        if (xpos == 10) {
            xpos = 0
        } else if (xpos == -1) {
            xpos = 9
        } else if (ypos == 10) {
            ypos = 0
        } else if (ypos == -1) {
            ypos = 9
        }
        foodTemp = 0
    }
    xList.unshift(xpos)
    yList.unshift(ypos)
    if (xList.length > length) {
        led.unplot(xList[length], yList[length])
        unplot10x10(xList[length], yList[length])
        xList.pop()
        yList.pop()
        for (let index = 0; index < length; index++) {
            foodTemp += 1
            if (xpos == xList[foodTemp] && ypos == yList[foodTemp]) {
                run += 1
                basic.showIcon(IconNames.Sad)
                control.waitMicros(2000000)
                basic.showNumber(length)
                control.waitMicros(2000000)
                control.reset()
            }
        }
    }
    led.plot(xpos, ypos)
    plot10x10(xpos, ypos)
}
radio.onReceivedValue(function (name, value) {
    if (name == "xTarget") {
        xTarget = value
    }
    if (name == "yTarget") {
        yTarget = value
    } else if (name == "cubeX") {
        cubeX = value + 5
    } else if (name == "cubeY") {
        cubeY = value + 5
    } else if (name == "victory") {
        Youwin = 1
    } else {
    	
    }
})
function unplot10x10 (x: number, y: number) {
    radio.sendValue("xUnPlot", x)
    radio.sendValue("yUnPlot", y)
}
let victorymessage = 0
let food = 0
let Youwin = 0
let foodTemp = 0
let run = 0
let foodY = 0
let foodX = 0
let yList: number[] = []
let xList: number[] = []
let ypos = 0
let xpos = 0
let length = 0
let direction = 0
let canMove = 0
let UpDown = 0
let cubeY = 0
let cubeX = 0
let yTarget = 0
let xTarget = 0
let yPosition = 0
let xPosition = 0
let mode = 0
mode = 0
radio.setGroup(10)
xPosition = 0
yPosition = 0
xTarget = -1
yTarget = -1
cubeX = -1
cubeY = -1
loops.everyInterval(500, function () {
    if (mode == 1) {
        snakeMove()
    }
})
basic.forever(function () {
    if (mode == 1) {
        if (xpos == foodX && ypos == foodY) {
            length += 1
            food = randint(0, 100 - length)
            foodX = 0
            foodY = 0
            for (let index = 0; index < food; index++) {
                if (foodX < 9) {
                    foodX += 1
                } else {
                    foodY += 1
                    foodX = 0
                }
                foodTemp = 0
                for (let index = 0; index < length; index++) {
                    if (foodX == xList[foodTemp] && foodY == yList[foodTemp]) {
                        if (foodX < 9) {
                            foodX += 1
                        } else {
                            foodY += 1
                            foodX = 0
                        }
                    }
                    foodTemp += 1
                }
            }
            led.plot(foodX, foodY)
            plot10x10(foodX, foodY)
        }
    }
})
basic.forever(function () {
    if (Youwin == 1) {
        victorymessage = randint(0, 4)
        if (victorymessage == 0) {
            basic.showString("Good job buddy")
        } else if (victorymessage == 1) {
            basic.showString("You're great")
        } else if (victorymessage == 2) {
            basic.showString("You're the best!")
        } else if (victorymessage == 3) {
            basic.showString("You are a genius!")
        } else if (victorymessage == 4) {
            basic.showString("Good work!")
        } else if (victorymessage == 5) {
            basic.showString("Have my babies!")
        } else if (victorymessage == 6) {
            basic.showString("W brain")
        } else if (victorymessage == 7) {
            basic.showString("Nice work!")
        } else {
        	
        }
    }
})
