const setup = () => {
    let input = document.getElementById("text").textContent;
    let string = input.toLowerCase();
    console.log(string);
    let teller = 0;

    let result = string.lastIndexOf("an");
        for(let i=result; i>0 ; i){
        if(string.lastIndexOf("an",i) === i){
            teller++;
            i--;
        }
        i--;
    }
    console.log(teller);
}
window.addEventListener("load", setup);