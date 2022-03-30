const setup = () => {
    let p = document.querySelectorAll("p");
    let newText = document.createTextNode("good job!");
    let oldText = p[0].firstChild;
    console.log(oldText)
    p[0].removeChild(oldText);
    p[0].appendChild(newText);
}
window.addEventListener("load", setup);