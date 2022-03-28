const setup = () => {
    let lijst = document.getElementById("gemeente");
    let gemeenteLijst = [];
    let stop = false;
    while(!stop){
        let gemeente = window.prompt("Gemeente:");
        if(gemeente === "stop"){
            stop = true;
        }
        else{
            gemeenteLijst.push(gemeente);
        }
    }
    gemeenteLijst.sort();
    for(let i = 0;i<gemeenteLijst.length;i++){
        let gesorteerdeGemeente = gemeenteLijst[i];
        lijst.innerHTML+=`<option value=\"${gesorteerdeGemeente}\">${gesorteerdeGemeente}</option>`;
    }
}
window.addEventListener("load", setup);

//