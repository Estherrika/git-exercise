'use script'

function onBallClick(elBall) {
    var ballSize = elBall.innerText
    var RandomSize=getRandomInt(20,60)
    var newBAllSize = `${+ballSize+RandomSize}px`
    if (+ballSize >= 400) {
        newBAllSize = "100px"
        ballSize = 100
        elBall.innerText = 100


    } else {
        elBall.innerText = (+ballSize + RandomSize)
    }
    elBall.style.width = newBAllSize
    elBall.style.height = newBAllSize




}