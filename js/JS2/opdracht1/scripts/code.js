const setup = () => {
    window.alert("Dit is een mededeling");
    console.log(window.prompt("Wat is uw naam", "onbekend"));
    console.log(window.confirm("Weet u het zeker?"));
}
window.addEventListener("load", setup);