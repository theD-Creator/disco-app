enum RadioMessage {
    message1 = 49434,
    musik = 48363,
    licht = 42954
}
radio.onReceivedMessage(RadioMessage.musik, function () {
    music.playMelody("- - - - C5 - C5 - ", 250)
    music.playMelody("C5 - C5 - C5 - A - ", 500)
    music.playMelody("- - - - A - A - ", 500)
    music.playMelody("C5 - A - B - - - ", 500)
    music.playMelody("C5 - C5 - C5 - C5 - ", 500)
    music.playMelody("C5 - C5 - C5 - A - ", 500)
    music.playMelody("- - - - A - A - ", 500)
    music.playMelody("C5 - A - B - - - ", 500)
})
radio.onReceivedMessage(RadioMessage.message1, function () {
    basic.showLeds(`
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        # . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        # # . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        # # # . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
    basic.showLeds(`
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        # # # # .
        `)
    basic.showLeds(`
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        # # # . .
        `)
    basic.showLeds(`
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        # # . . .
        `)
    basic.showLeds(`
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        # . . . .
        `)
    basic.showLeds(`
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        . . . . #
        `)
    basic.showLeds(`
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        . . . # #
        `)
    basic.showLeds(`
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        . . # # #
        `)
    basic.showLeds(`
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        . # # # #
        `)
    basic.showLeds(`
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        # # # # #
        `)
})
radio.setGroup(54)
loops.everyInterval(randint(0, 9), function () {
    if (randint(0, 9) == 1) {
        basic.setLedColors(0xff0000, 0xff0000, 0xff0000, 100)
    }
    if (randint(0, 9) == 2) {
        basic.setLedColors(0xff8000, 0xff8000, 0xff8000, 100)
    }
    if (randint(0, 9) == 3) {
        basic.setLedColors(0xffff00, 0xffff00, 0xffff00, 100)
    }
    if (randint(0, 9) == 4) {
        basic.setLedColors(0xff9da5, 0xff9da5, 0xff9da5, 100)
    }
    if (randint(0, 9) == 5) {
        basic.setLedColors(0x00ff00, 0x00ff00, 0x00ff00, 100)
    }
    if (randint(0, 9) == 6) {
        basic.setLedColors(0xb09eff, 0xb09eff, 0xb09eff, 100)
    }
    if (randint(0, 9) == 7) {
        basic.setLedColors(0xff0000, 0xffff00, 0x00ff00, 100)
    }
    if (randint(0, 9) == 8) {
        basic.setLedColors(0xff0080, 0x000000, 0x999999, 100)
    }
    if (randint(0, 9) == 9) {
        basic.setLedColors(0x00ff00, 0xffff00, 0xff0000, 100)
    }
})
basic.forever(function () {
	
})
