radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 0) {
        basic.showIcon(IconNames.Happy)
        music.startMelody(music.builtInMelody(Melodies.Ringtone), MelodyOptions.Once)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(1)
    basic.clearScreen()
})
radio.setGroup(1)
