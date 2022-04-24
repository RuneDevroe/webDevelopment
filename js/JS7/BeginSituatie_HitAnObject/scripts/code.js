let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "./images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 2000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, // aantal hits
    timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};


const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click",start);

    let target = document.getElementById("target");
    target.addEventListener("click",targetClicked);

};

const start = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", move);

    move();
}

const targetClicked = (image) => {
    if(image.target.className.indexOf("bom") !== -1){
        window.alert("game over");
    }
    else{
        clearTimeout(global.timeoutId);

        let score = document.getElementById("score");
        global.score++;
        score.textContent = global.score;

        move();
    }

}

const move = () => {

    let target = document.getElementById("target");
    let playfield = document.getElementById("playField");
    let maxLeft = playfield.clientWidth - target.offsetWidth;
    let maxHeight = playfield.clientHeight - target.offsetHeight;

    // verplaats de sprite
    let left=Math.floor(Math.random()*maxLeft);
    let top=Math.floor(Math.random()*maxHeight);
    target.style.left=left+"px";
    target.style.top=top+"px";

    // random image
    let getal =Math.floor(Math.random()*global.IMAGE_COUNT);
    target.src = global.IMAGE_PATH_PREFIX + getal + global.IMAGE_PATH_SUFFIX;

    if (getal === 0) {
        // bom
        target.className = "bom";
    } else { // iets anders
        target.className = "";
    }
    global.timeoutId = setTimeout(move, global.MOVE_DELAY);

}


window.addEventListener("load", setup);


