const setup = () => {
    let date = new Date();
    let verjaardag = new Date(2002, 3, 21);
    let verschil = date - verjaardag;
   let dagen= verschil/1000/60/60/24;
    console.log(dagen);


}
window.addEventListener("load", setup);