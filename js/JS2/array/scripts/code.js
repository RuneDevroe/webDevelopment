const familieleden=['jan','piet','pol','tim','sam']
console.log('atl familieleden = ' + familieleden.length);
console.log('1: ' + familieleden[0]);
console.log('3: ' + familieleden[2])
console.log('5: ' + familieleden[4]);
console.log(familieleden.join(', '));

const setup = () => {

    VoegNaamToe();

}

const VoegNaamToe = () => {
    let nieweGebruiker =window.prompt("Wat is uw naam", "onbekend");
    familieleden.push(nieweGebruiker);
    console.log(familieleden);


}
window.addEventListener("load", setup);