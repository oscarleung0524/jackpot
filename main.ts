function reward_3 () {
    if (第一個.get(LedSpriteProperty.Y) == 第二個.get(LedSpriteProperty.Y) && 第二個.get(LedSpriteProperty.Y) == 第三個.get(LedSpriteProperty.Y)) {
        lucky_times_3 += 1
        game.addScore(100)
        basic.showString("lucky!")
        basic.clearScreen()
    }
    if (第二個.get(LedSpriteProperty.Y) == 第三個.get(LedSpriteProperty.Y) && 第三個.get(LedSpriteProperty.Y) == 第四個.get(LedSpriteProperty.Y)) {
        lucky_times_3 += 1
        game.addScore(100)
        basic.showString("lucky!")
        basic.clearScreen()
    }
    if (第三個.get(LedSpriteProperty.Y) == 第四個.get(LedSpriteProperty.Y) && 第四個.get(LedSpriteProperty.Y) == 第五個.get(LedSpriteProperty.Y)) {
        lucky_times_3 += 1
        game.addScore(100)
        basic.showString("lucky!")
        basic.clearScreen()
    }
}
function 是否中獎 () {
    if (第一個.get(LedSpriteProperty.Y) == 第二個.get(LedSpriteProperty.Y) && (第二個.get(LedSpriteProperty.Y) == 第三個.get(LedSpriteProperty.Y) && (第三個.get(LedSpriteProperty.Y) == 第四個.get(LedSpriteProperty.Y) && 第四個.get(LedSpriteProperty.Y) == 第五個.get(LedSpriteProperty.Y)))) {
        lucky_times_1 += 1
        game.addScore(200)
        basic.showString("lucky!")
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.A, function () {
    basic.showNumber(game.score())
})
function reward4 () {
    if (第一個.get(LedSpriteProperty.Y) == 第二個.get(LedSpriteProperty.Y)) {
        lucky_times_4 += 1
        game.addScore(50)
        basic.clearScreen()
    }
    if (第二個.get(LedSpriteProperty.Y) == 第三個.get(LedSpriteProperty.Y)) {
        lucky_times_4 += 1
        game.addScore(50)
        basic.clearScreen()
    }
    if (第三個.get(LedSpriteProperty.Y) == 第四個.get(LedSpriteProperty.Y)) {
        lucky_times_4 += 1
        game.addScore(50)
        basic.clearScreen()
    }
    if (第四個.get(LedSpriteProperty.Y) == 第五個.get(LedSpriteProperty.Y)) {
        lucky_times_4 += 1
        game.addScore(50)
        basic.clearScreen()
    }
}
input.onButtonPressed(Button.AB, function () {
    basic.showString("data")
    basic.showString("fourth:")
    basic.showNumber(lucky_times_4)
    basic.showString("third:")
    basic.showNumber(lucky_times_3)
    basic.showString("second:")
    basic.showNumber(lucky_times_2)
    basic.showString("first:")
    basic.showNumber(lucky_times_1)
})
input.onButtonPressed(Button.B, function () {
    if (game.score() <= 0) {
        game.gameOver()
    } else {
        game.addScore(-10)
        開關1 = true
        開關2 = true
        開關3 = true
        開關4 = true
        開關5 = true
    }
})
function reward2 () {
    if (第一個.get(LedSpriteProperty.Y) == 第二個.get(LedSpriteProperty.Y) && (第二個.get(LedSpriteProperty.Y) == 第三個.get(LedSpriteProperty.Y) && 第三個.get(LedSpriteProperty.Y) == 第四個.get(LedSpriteProperty.Y))) {
        lucky_times_2 += 1
        game.addScore(150)
        basic.showString("lucky!")
        basic.clearScreen()
    }
    if (第二個.get(LedSpriteProperty.Y) == 第三個.get(LedSpriteProperty.Y) && (第三個.get(LedSpriteProperty.Y) == 第四個.get(LedSpriteProperty.Y) && 第四個.get(LedSpriteProperty.Y) == 第五個.get(LedSpriteProperty.Y))) {
        lucky_times_2 += 1
        game.addScore(150)
        basic.showString("lucky!")
        basic.clearScreen()
    }
}
let lucky_times_2 = 0
let lucky_times_4 = 0
let lucky_times_1 = 0
let lucky_times_3 = 0
let 開關5 = false
let 開關4 = false
let 開關3 = false
let 開關2 = false
let 開關1 = false
let 第五個: game.LedSprite = null
let 第四個: game.LedSprite = null
let 第三個: game.LedSprite = null
let 第二個: game.LedSprite = null
let 第一個: game.LedSprite = null
game.setScore(200)
第一個 = game.createSprite(0, 1)
第二個 = game.createSprite(1, 2)
第三個 = game.createSprite(2, 1)
第四個 = game.createSprite(3, 2)
第五個 = game.createSprite(4, 1)
開關1 = false
開關2 = false
開關3 = false
開關4 = false
開關5 = false
basic.forever(function () {
    if (開關2) {
        for (let index = 0; index < randint(34, 36); index++) {
            basic.pause(45)
            第二個.change(LedSpriteProperty.Y, 1)
            if (第二個.get(LedSpriteProperty.Y) == 4) {
                basic.pause(45)
                第二個.set(LedSpriteProperty.Y, 1)
            }
        }
        開關2 = false
    }
})
basic.forever(function () {
    if (開關1) {
        for (let index = 0; index < randint(31, 33); index++) {
            basic.pause(40)
            第一個.change(LedSpriteProperty.Y, 1)
            if (第一個.get(LedSpriteProperty.Y) == 4) {
                basic.pause(40)
                第一個.set(LedSpriteProperty.Y, 1)
            }
        }
        開關1 = false
    }
})
basic.forever(function () {
    if (開關3) {
        for (let index = 0; index < randint(37, 39); index++) {
            basic.pause(50)
            第三個.change(LedSpriteProperty.Y, 1)
            if (第三個.get(LedSpriteProperty.Y) == 4) {
                basic.pause(50)
                第三個.set(LedSpriteProperty.Y, 1)
            }
        }
        開關3 = false
    }
})
basic.forever(function () {
    if (開關4) {
        for (let index = 0; index < randint(40, 42); index++) {
            basic.pause(55)
            第四個.change(LedSpriteProperty.Y, 1)
            if (第四個.get(LedSpriteProperty.Y) == 4) {
                basic.pause(55)
                第四個.set(LedSpriteProperty.Y, 1)
            }
        }
        開關4 = false
    }
})
basic.forever(function () {
    if (開關5) {
        for (let index = 0; index < randint(43, 45); index++) {
            basic.pause(60)
            第五個.change(LedSpriteProperty.Y, 1)
            if (第五個.get(LedSpriteProperty.Y) == 4) {
                basic.pause(60)
                第五個.set(LedSpriteProperty.Y, 1)
            }
        }
        開關5 = false
        是否中獎()
        reward2()
        reward_3()
        reward4()
    }
})
