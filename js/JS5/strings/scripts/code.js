const setup = () => {
    let string1 = 'test';
    let string2 = 'test';
    if(string1 == string2){
        console.log("== is gelijk");
    }
    if(string1 === string2){
        console.log("=== is gelijk");
    }
    if(string1.slice(0,5) == string2){
        console.log("== is gelijk");
    }
    if(string1.slice(0,3) === "tes"){
        console.log("=== is gelijk");
    }
    let concatenatie = string1 + string2;
    console.log(concatenatie.slice(2,7));
}
window.addEventListener("load", setup);