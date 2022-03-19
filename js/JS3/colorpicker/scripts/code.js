const setup = () => {
    let sliderRed = document.getElementById("sliderRed");
    let sliderGreen = document.getElementById("sliderGreen");
    let sliderBlue = document.getElementById("sliderBlue");

    sliderRed.addEventListener("change", update);
    sliderRed.addEventListener("input", update);

    sliderGreen.addEventListener("change", update);
    sliderGreen.addEventListener("input", update);

    sliderBlue.addEventListener("change", update);
    sliderBlue.addEventListener("input", update);

}
const update = () => {
    let sliderRed = document.getElementById("sliderRed");
    let colorRed = document.getElementById("colorRed");
    let valueRed = sliderRed.value;
    colorRed.innerText = valueRed;
    let sliderGreen = document.getElementById("sliderGreen");
    let colorGreen = document.getElementById("colorGreen");
    let valueGreen = sliderGreen.value;
    colorGreen.innerText = valueGreen;
    let sliderBlue = document.getElementById("sliderBlue");
    let colorBlue = document.getElementById("colorBlue");
    let valueBlue = sliderBlue.value;
    colorBlue.innerText = valueBlue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor = ("rgb("+valueRed+","+valueGreen+","+valueBlue+")");
}

window.addEventListener("load", setup);