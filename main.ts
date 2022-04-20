input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    basic.pause(500)
    for (let index = 0; index < 2; index++) {
        basic.showString("Hello!")
    }
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    for (let index = 0; index < 4; index++) {
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(randint(0, 10))
    basic.pause(200)
    basic.clearScreen()
})
basic.showLeds(`
    . . . . .
    . # . # .
    . . . . .
    # . . . #
    . # # # .
    `)
