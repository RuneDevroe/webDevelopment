const setup = () => {
   button.addEventListener("click", buttonClicked);
}

const buttonClicked = () => {
    let input = document.getElementById("inputTxt").value;
    let result = input.replaceAll(" ","");
    let result2 = "";
    for(let i = 0; i <result.length;i++){
        result2 += result.charAt(i)
        result2 += " "
    }
    console.log(result2);
}

window.addEventListener("load", setup);