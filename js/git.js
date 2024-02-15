'use script'

function onBallClick(elBall) {
    var ballSize = elBall.innerText
    var newBAllSize = `${+ballSize + 50}px`
    console.log(newBAllSize);
    if (elBall.style.width === '400px') {
        newBAllSize = "100px"
        ballSize = 100
        elBall.innerText = 100


    } else {
        elBall.innerText = (+ballSize + 50)
    }
    elBall.style.width = newBAllSize
    elBall.style.height = newBAllSize




}