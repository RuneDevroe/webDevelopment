let kleuren = [];
let sliders = {};

const initialize = () =>{
    let btnSave = document.getElementById("btnSave");
    let sliders = document.getElementsByClassName("slider");
    let localStorage = document.getElementById("localStorage");

    //loop over sliders
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }

    //1ste keer
    restoreSliders();

    update();

    localStorage.addEventListener("click", clearLocalStorage)
    btnSave.addEventListener("click", saveSwatch);

    restoreColors();

};

//toevoegen swatch
const saveSwatch = () =>{
    let swatchComponents = document.getElementById("swatchComponents");
    let swatch = buildSwatchComponent();
    swatchComponents.appendChild(swatch);


    bewaarKleur();


    let kleurString = JSON.stringify(kleuren);
    localStorage.setItem("kleur",kleurString);
};

const bewaarKleur = (red,green,blue) => {
    let kleur={};

    if(red === undefined){
        kleur.red = document.getElementById("sldRed").value;
    }
    else{
        kleur.red = red
    }
    if(green === undefined){
        kleur.green = document.getElementById("sldGreen").value;
    }
    else{
        kleur.green = green
    }
    if(blue === undefined){
        kleur.blue = document.getElementById("sldBlue").value;
    }
    else{
        kleur.blue = blue
    }
    kleuren.push(kleur);
}

const restoreColors = () => {

    let array = JSON.parse(localStorage.getItem("kleur"));
    for(let i = 0; i <array.length; i++){
        let swatchComponents = document.getElementById("swatchComponents");
        let swatch = buildSwatchComponent(array[i].red,array[i].green,array[i].blue);
        swatchComponents.appendChild(swatch);
        bewaarKleur(array[i].red,array[i].green,array[i].blue)
    }
}

const restoreSliders = () => {
    let sliders = JSON.parse(localStorage.getItem("sliders"));

    document.getElementById("sldRed").value = sliders.red;
    document.getElementById("sldGreen").value = sliders.green;
    document.getElementById("sldBlue").value = sliders.blue;


}


const configureSwatch = (swatch,red,green,blue) =>{
    if(red === undefined){
        red = document.getElementById("sldRed").value;
    }
    swatch.setAttribute("data-red", red);

    if(green === undefined){
        green = document.getElementById("sldGreen").value;
    }
    swatch.setAttribute("data-green", green);

    if(blue === undefined){
        blue = document.getElementById("sldBlue").value;
    }
    swatch.setAttribute("data-blue", blue);

    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";
};

const buildSwatchComponent = (red,green,blue) =>{
    let swatch = document.createElement("div");
    let btnDelete = document.createElement("input");

    swatch.className = "swatch";
    configureSwatch(swatch,red,green,blue);
    swatch.addEventListener("click", setColorPickerFromSwatch);

    btnDelete.setAttribute("type", "button");
    btnDelete.setAttribute("value", "X");
    btnDelete.addEventListener("click", deleteSwatch);

    swatch.appendChild(btnDelete);
    return swatch;
};

const setColorPickerFromSwatch = (event) =>{
    let swatch = event.target;
	
    let red = swatch.getAttribute("data-red");
    document.getElementById("sldRed").value = red;
    
	let green = swatch.getAttribute("data-green");
    document.getElementById("sldGreen").value = green;
    
	let blue = swatch.getAttribute("data-blue");
    document.getElementById("sldBlue").value = blue;

    update();
};

const deleteSwatch = (event) =>{
    let swatchComponents = document.getElementById("swatchComponents");
    let button = event.target;
    let swatch = button.parentNode;
    swatchComponents.removeChild(swatch);
    event.stopPropagation();

    //todo verwijderen in array

}

const update = () =>{

    let red = document.getElementById("sldRed").value;
    document.getElementById("lblRed").innerHTML = red;
    sliders.red = red;

    let green = document.getElementById("sldGreen").value;
    document.getElementById("lblGreen").innerHTML = green;
    sliders.green = green;

    let blue = document.getElementById("sldBlue").value;
    document.getElementById("lblBlue").innerHTML = blue;
    sliders.blue = blue;

    let swatch = document.getElementById("swatch");
    swatch.style.background = "rgb(" + red + "," + green + "," + blue + ")";

    let sliderString = JSON.stringify(sliders);
    localStorage.setItem("sliders",sliderString);


};

const clearLocalStorage = () =>{

    localStorage.clear();
    kleuren= [];
}

window.addEventListener("load", initialize);