'use script'

function onBallClick(elBall) {
    var ballSize = elBall.innerText
    var newBAllSize = `${+ballSize + 50}px`

    elBall.style.width = newBAllSize
    elBall.style.height = newBAllSize
    
    elBall.innerText = (+ballSize + 50)


}