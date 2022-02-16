const setup = () => {

    let btnSubstring=document.getElementById("substring");
    btnSubstring.addEventListener("click", substring);
}

const substring = () => {
    let txtInput=document.getElementById("inputText");
    let txtOutput=document.getElementById("txtOutput");
    let getalLinks=document.getElementById("nummerLinks").value;
    let getalRechts=document.getElementById("nummerRechts").value;
    let textInputTxt = txtInput.value;
    let substring = textInputTxt.substring(getalLinks,getalRechts);
    txtOutput.innerHTML = substring;
    console.log(getalLinks);
}
window.addEventListener("load", setup);
