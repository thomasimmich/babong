namespace SpriteKind {
    export const Effect = SpriteKind.create()
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
    isFiring = true
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.y += 1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    balloon.y += -1
})
let balloon: Sprite = null
let isFiring = false
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
isFiring = false
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
`, SpriteKind.Player)
smallMountain.setPosition(160, 116)
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
`, SpriteKind.Enemy)
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
`, SpriteKind.Enemy)
let fog = sprites.create(img`
. 1 1 . . . . . 1 . . . 1 . . 1 . . . . 1 . . 1 . . . . . 1 . . . . . . . . 1 . . 1 . . . . . . . . . . . . . 1 1 1 1 1 1 . . . . . 1 1 . 1 . 1 1 1 . . . . 1 . . . . . 1 1 . . . 1 . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
1 . . . 1 . . . . . 1 . . . 1 . . 1 1 . 1 . 1 . 1 1 1 . . . . 1 . 1 . . . . . . 1 . . . 1 . . . 1 1 1 1 1 1 1 . . . . . . . . . . . . . . 1 1 1 . . . . 1 . . . . 1 . . . . . 1 . . . 1 . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.Player)
fog.setPosition(123, 22)
game.onUpdateInterval(100, function () {
    bigCloud.x += -1
})
game.onUpdateInterval(200, function () {
    balloon.y += 1
    smallMountain.x += -1
    isFiring = false
})
game.onUpdateInterval(30, function () {
    fog.x += -1
})
forever(function () {
    fire.setPosition(balloon.x, balloon.y)
    fire.y += 16
    if (isFiring) {
        fire.startEffect(effects.fire, 100)
        balloon.y += -1
    }
})
game.onUpdateInterval(50, function () {
    smallCloud.x += -1
})
