scene.setBackgroundColor(9)
let balloon = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
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
let cloud = sprites.create(img`
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
