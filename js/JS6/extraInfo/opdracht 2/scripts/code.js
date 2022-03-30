const setup = () => {
    let li = document.querySelectorAll("li");
    for (let i=0;i<li.length;i++) {
        li[i].style.color="red";
    }
    let img = document.createElement("img")
    img.setAttribute("src", "./img/foto1.jpg" )
    let body = document.querySelector("body");
    body.appendChild(img);
}
window.addEventListener("load", setup);