let global = {
    AANTAL_HORIZONTAAL: 4,
    AANTAL_VERTICAAL: 3,
    AANTAL_KAARTEN: 6,
    IMAGES: ["./images/kaart1.png","./images/kaart1.png","./images/kaart2.png","./images/kaart2.png","./images/kaart3.png","./images/kaart3.png",
        "./images/kaart4.png","./images/kaart4.png","./images/kaart5.png","./images/kaart5.png","./images/kaart6.png","./images/kaart6.png",],
    IMAGE_BACK: "./images/achterkant.png",
    hasFlippedCard: false,
    lockBoard: false,
    firstCard: "",
    secondCard: ""
};

const setup = () => {
    generateCards();
}

const shuffle =() =>{
    let array = global.IMAGES;
    let currentIndex = global.IMAGES.length;
    let randomIndex;

    while (currentIndex != 0){
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }


}

const generateCards = () => {
    shuffle()
    let game = document.getElementById("memory-game");

    for(let i = 0; i<global.IMAGES.length; i++){

        //html aanmaken
        let card = document.createElement("div");
        let image = document.createElement("img");
        let background = document.createElement("img");

        card.className = "memory-card";
        card.appendChild(image);
        card.appendChild(background);

        background.src = global.IMAGE_BACK;
        game.appendChild(card);
        image.src = global.IMAGES[i];
        image.className = "front-face";
        background.className = "back-face";

        card.addEventListener("click", flipCard);

    }
}

const flipCard =  (card) => {
    let target = card.target;
    let div = target.parentNode;

    if(global.lockBoard) return;
    if (div === global.firstCard) return;

    div.classList.add('flip');

    if(!global.hasFlippedCard){
        global.hasFlippedCard = true;
        global.firstCard = div;
        console.log(global.firstCard)
        return;
    }
    global.secondCard = div;
    console.log(global.secondCard)

    checkForMatch();
}
const checkForMatch = () => {

    console.log(global.firstCard.firstChild)
    console.log(global.secondCard.firstChild)

    if(global.firstCard.firstChild.src == global.secondCard.firstChild.src){

        disableCards()
        console.log("disabled")
    }
    else {
        unflipCards()
    }
}
const disableCards = () => {
    global.firstCard.removeEventListener('click', flipCard);
    global.secondCard.removeEventListener('click', flipCard);

    resetBoard();
}
const unflipCards = () => {
    global.lockBoard = true;

    setTimeout(() => {

        global.firstCard.classList.remove('flip');
        global.secondCard.classList.remove('flip');

        resetBoard();
    }, 1500);

}
const resetBoard = () => {
    global.hasFlippedCard = false;
    global.lockBoard = false;
    global.firstCard = "";
    global.secondCard = "";
}
window.addEventListener("load", setup);