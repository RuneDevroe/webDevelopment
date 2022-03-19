const setup = () => {
    let input = document.getElementById("text").textContent;
    let string = input.toLowerCase();
    console.log(string);
    let teller = 0;

    for(let i=0; i<string.length; i){
        if(string.indexOf("an",i) === i){
            teller++;
            i++;
        }
        i++;
    }
    console.log(teller);
}
window.addEventListener("load", setup);