const numCoins = 15;
const coins = Array.from( {length: numCoins}, (el, i) => {
    return new Coin({x: 70 * i, y: 100}, 40);
})

const heroMario = new Mario({x: 200,  y: 200}, 200);

function preload(){
    objectsImg = loadImage('assets/items-objects.png');
    marioImg = loadImage('assets/mario-use.png');
}

function setup(){
    createCanvas(1000, 600);
    background(95, 138, 245);
    frameRate(15);

    // assign images
    heroMario.images = loadMarioImages(marioImg);
    coins.forEach( coin =>  coin.images = loadCoinImages(objectsImg));

//     for (let i = 0; i < 12; i++) {
//         if (i < numCoins) {
//             coins.push(objectsImg.get(i * 16, 80, 16, 17))
//         } else {
//             coins.push(objectsImg.get(0 * 16, 80, 16, 17)) // starting position, ending position, ??
//         }
//     }
}

function draw(){
    background(95, 138, 245);
    fill(110, 59, 21);
    // this is the ground
    rect(0, 400, 1000, 200);

    // draw the coins
    coins.forEach(coin => {
        coin.update()
        coin.render()
    });
    checkKeys()
    heroMario.update();
    heroMario.render();
}

function checkKeys() {
    if (keyIsDown(UP_ARROW)) {
        heroMario.jump()
        return
    } else if (keyIsDown(LEFT_ARROW)) {
        heroMario.runLeft()
    } else if (keyIsDown(RIGHT_ARROW)) {
        heroMario.runRight()
    }
}

function keyReleased(){
    if (keyCode === UP_ARROW) {
        heroMario.clearJump()
    }
}