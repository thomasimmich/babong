namespace SpriteKind {
    export const Effect = SpriteKind.create()
    export const Background = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    music.playTone(392, music.beat(BeatFraction.Eighth))
    music.playTone(440, music.beat(BeatFraction.Eighth))
    isBoosting = true
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.y += 1
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    music.playTone(196, music.beat(BeatFraction.Eighth))
    music.playTone(147, music.beat(BeatFraction.Eighth))
    isCooling = true
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.y += -1
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    balloon.startEffect(effects.spray, 100)
    music.playMelody("E D G F B A C5 B ", 120)
    game.reset()
})
let balloon: Sprite = null
let isCooling = false
let isBoosting = false
isBoosting = false
isCooling = false
let smallBird = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . 2 2 2 . . . . . . 3 3 3 . . 
. . f f f f . . . . 3 3 3 . . . 
. . 2 f 1 1 1 . 3 3 3 3 3 . . . 
f f 3 3 3 3 2 2 2 3 3 3 . . . . 
. . d d d d 3 3 3 3 . . . . . . 
. . . d d d d 3 3 3 3 . . . . . 
. . . . d d d d 3 3 3 3 . . . . 
. . . . . d d d d 3 3 3 3 3 3 3 
. . . . . . . f . . . . . . . . 
. . . . . . . . f f . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
smallBird.setPosition(280, 30)
let fire = sprites.create(img`
. . . 2 . . . . 
. . . . . . . . 
. . 2 . 2 . 4 . 
. . . . 2 . . 2 
. . . . 2 2 . . 
. . . . 4 4 . . 
. . . 2 5 4 . . 
. . 2 4 5 4 2 . 
. 2 4 5 5 4 2 . 
. 2 4 5 5 4 2 . 
. 2 5 5 4 2 . . 
. . 2 4 2 . . . 
`, SpriteKind.Effect)
scene.setBackgroundColor(9)
let smallMountain = sprites.create(img`
. . . . . . . 1 1 . . . . . . . 
. . . . . . 1 1 1 1 . . . . . . 
. . . . . 1 1 1 1 1 1 . . . . . 
. . . . 1 1 1 1 1 1 1 1 . . . . 
. . . 1 1 1 1 b b b 1 1 1 . . . 
. . 1 1 b b b b b b b 1 1 1 . . 
. b 1 b b b b b b b b b b b b . 
b b b b b b b b b b b b b b b b 
`, SpriteKind.Enemy)
smallMountain.setPosition(160, 116)
let bigMountain = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 1 1 b 1 b 1 b 1 b 1 1 b 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 1 1 b 1 b 1 b 1 b 1 b 1 b b 1 b 1 1 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 1 b 1 b 1 b 1 b b b b b b b b 1 b 1 1 b 1 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 b 1 b 1 b b b b b b b b b b b b b 1 b 1 b b 1 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 1 1 b b b b b b b b b b b b b b b b b b b b b 1 1 b b 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 b 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 1 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
bigMountain.setPosition(240, 100)
balloon = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . 6 6 6 6 6 6 1 1 1 1 2 2 2 2 4 4 1 1 1 . . . . . . . . . 
. . . . . . . . 6 f 6 1 6 1 6 1 1 1 1 1 1 1 2 2 2 4 4 1 1 1 1 . . . . . . . 
. . . . . . f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 2 2 2 4 4 1 1 1 1 . . . . . . 
. . . . . f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 . . . . . 
. . . . f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 . . . . 
. . . f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 . . . 
. . . 6 f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 . . . 
. . 6 f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 . . 
. . f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 1 . 
. f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 . 
. 6 f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 1 1 1 1 1 
f f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 1 
f 6 f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 4 1 1 1 
f f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 4 1 1 1 
f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 
f f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 
f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 
f f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 
f 6 f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 
f f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 
f 6 f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 4 1 1 1 1 
f f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 2 4 4 4 1 1 1 1 
. f f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 2 4 4 4 1 1 1 1 . 
. . 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 4 1 1 1 1 . . 
. . f 6 f 6 1 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 1 1 1 . . 
. . . f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 1 1 . . . 
. . . . f 6 f 6 1 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 1 1 . . . . 
. . . . . f 6 f 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 1 1 . . . . 
. . . . . . f 6 f 6 1 6 1 6 1 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 1 . . . . . 
. . . . . . . f 6 f 6 1 6 1 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 1 . . . . . . 
. . . . . . . . f 6 f 6 1 6 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 . . . . . . . 
. . . . . . . . . f 6 f 6 1 1 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 1 . . . . . . . 
. . . . . . . . . . f 6 f 6 1 1 1 1 1 1 1 1 1 2 2 4 4 1 1 1 . . . . . . . . 
. . . . . . . . . . 6 f 6 f 1 1 1 1 1 1 1 1 2 2 4 4 4 1 1 . . . . . . . . . 
. . . . . . . . . . . 6 f 6 f 1 1 1 1 1 1 1 2 2 4 4 1 1 1 . . . . . . . . . 
. . . . . . . . . . . . 6 f 6 f 1 1 1 1 1 2 2 4 4 1 1 1 . . . . . . . . . . 
. . . . . . . . . . . . . 6 f 6 6 1 6 1 1 2 2 4 1 1 1 . . . . . . . . . . . 
. . . . . . . . . . . . . f 6 f 6 6 1 1 2 2 4 4 1 1 . . . . . . . . . . . . 
. . . . . . . . . . . . . . f 6 f 6 6 1 2 2 4 1 1 1 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . f 6 f 1 1 2 4 1 1 1 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . f 6 1 1 2 1 1 1 . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e 1 1 2 1 1 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e . . . e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e . . . e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e . . . e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e e . e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . e e e e e e e . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . e e e e e . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
let bigCloud = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . d d d d d d d d d d d . . . . . . . . . . 
. . . . . . . . d d 1 d 1 d 1 d 1 1 1 1 d d . . . . . . . . 
. . . . . . d d d 1 d 1 d 1 d 1 d 1 1 1 1 1 d . . . . . . . 
. . . . . d 1 d 1 d 1 d 1 d 1 d 1 1 1 1 1 1 1 d d . . . . . 
. . . . d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 1 1 1 d d . . . 
. . . d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 1 1 1 d . . . 
. . d d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 1 d . . 
. d 1 d d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 d . . 
d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 d . 
d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 d . 
d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d . 
d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d d . 
d d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d d 
d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d d d 
d d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d d d 1 d 1 d 1 d 1 d d 
. d d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d d d d d 1 d 1 d 1 d d d 
. d d 1 d d d d d d d d d 1 d 1 d d d d . d d d d d d d d . 
. d d d d d d d . . d d d d 1 d d d d . . . . . . d d d d . 
. . d d d d d d . . . d d d d d d d . . . . . . . . . . . . 
. . . . . . . . . . . . d d d d d . . . . . . . . . . . . . 
`, SpriteKind.Background)
bigCloud.setPosition(123, 22)
let smallCloud = sprites.create(img`
. . . . . . . . . d d d d d d . . . . . . . . . 
. . . . . . . . d d 1 1 1 1 d d . . . . . . . . 
. . . . . . d d d 1 d 1 1 1 1 1 d . . . . . . . 
. . . . . d 1 d 1 d 1 1 1 1 1 1 1 d d . . . . . 
. . . . d 1 d 1 d 1 d 1 d 1 1 1 1 1 1 d d . . . 
. . . d 1 d 1 d 1 d 1 d 1 d 1 1 1 1 1 1 d . . . 
. . d d d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 1 d . . 
. d 1 d d d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 d . . 
d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 1 1 d . 
d d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d 1 d d d 
d d d 1 d 1 d 1 d 1 d 1 d d d 1 d 1 d 1 d 1 d d 
d d d d 1 d 1 d 1 d 1 d d d d d 1 d 1 d 1 d d d 
. d d 1 d d d d d 1 d d d d d d d d d d d d d . 
. d d d d d d d 1 d d d d d d d d d d d d d d . 
. . d d d d d d d d . d d d d d d d . . . . . . 
. . . . . . . . . . . . d d d d d . . . . . . . 
`, SpriteKind.Background)
let fog = sprites.create(img`
. 1 1 . . . . . 1 . . . 1 . . 1 . . . . 1 . . 1 . . . . . 1 . . . . . . . . 1 . . 1 . . . . . . . . . . . . . 1 1 1 1 1 1 . . . . . 1 1 . 1 . 1 1 1 . . . . 1 . . . . . 1 1 . . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
1 . . . 1 . . . . . 1 . . . 1 . . 1 1 . 1 . 1 . 1 1 1 . . . . 1 . 1 . . . . . . 1 . . . 1 . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 1 1 1 . . . . 1 . . . . 1 . . . . . 1 . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Background)
fog.setPosition(123, 22)
game.onUpdateInterval(100, function () {
    bigCloud.x += -1
    bigMountain.x += -1
    smallMountain.x += -1
    smallBird.x += -1
})
game.onUpdateInterval(200, function () {
    balloon.y += 1
    isBoosting = false
    isCooling = false
})
game.onUpdateInterval(30, function () {
    fog.x += -1
})
forever(function () {
    fire.setPosition(balloon.x, balloon.y)
    fire.y += 16
    if (isBoosting) {
        fire.startEffect(effects.fire, 100)
        balloon.y += -1
    }
    if (isCooling) {
        fire.startEffect(effects.fountain, 100)
        balloon.y += 2
    }
})
game.onUpdateInterval(50, function () {
    smallCloud.x += -1
})
