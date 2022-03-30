const setup = () => {
    let button = document.createElement("button");
    button.innerText= "button";
    let body = document.querySelector("body");
    body.appendChild(button);
    button.addEventListener("click", addPElement);

}
const addPElement = () => {
    let div = document.querySelector("div");
    let p = document.createElement("p");
    div.appendChild(p);
    let pText = document.createTextNode("dit is een p tekst");
    p.appendChild(pText);

}
window.addEventListener("load", setup);