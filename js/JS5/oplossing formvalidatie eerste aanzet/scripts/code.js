const setup = () => {
	let btnValideer=document.getElementById("btnValideer");
	btnValideer.addEventListener("click", valideer);
};
const valideer = () => {
	valideerVoornaam();
	valideerAchternaam();
	valideerGeboorteDatum();
	valideerEmail();
	valideerAantalKinderen();
	validatie();
};
const valideerVoornaam = () => {
	let txtVoornaam = document.getElementById("txtVoornaam");
	let errVoornaam = document.getElementById("errVoornaam");
	let voornaam = txtVoornaam.value.trim();
	if (voornaam.length > 30) {
		txtVoornaam.className="invalid"; // invalid class instellen
		errVoornaam.innerHTML = "max. 30 karakters";
	} else {
		txtVoornaam.className=""; // alle classes verwijderen
		errVoornaam.innerHTML = "";
	}
};
const valideerAchternaam = () => {
	let txtFamilienaam = document.getElementById("txtFamilienaam");
	let errFamilienaam = document.getElementById("errFamilienaam");
	let familienaam = txtFamilienaam.value.trim();
	if (familienaam.length > 50) {
		txtFamilienaam.className = "invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "max. 50 karakters";
	}
	if (familienaam.length ===0) {
		txtFamilienaam.className="invalid"; // invalid class instellen
		errFamilienaam.innerHTML = "verplicht veld";
	}
	if(txtFamilienaam.className !== "invalid"){
		txtFamilienaam.className=""; // alle classes verwijderen
		errFamilienaam.innerHTML = "";
	}
};
const valideerGeboorteDatum = () => {
	let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
	let errGeboorteDatum = document.getElementById("errGeboorteDatum");
	let geboorteDatum = txtGeboorteDatum.value.trim();
	// correcte lengte?
	if (geboorteDatum.length!==10) {
		txtGeboorteDatum.className="invalid";
		errGeboorteDatum.innerHTML="verplicht veld"
	} else {
		let formatCorrect=true;
		// streepjes op juiste plaats?
		if (formatCorrect && (geboorteDatum.charAt(4)==='-' && geboorteDatum.charAt(7)==='-') ) {
			formatCorrect=false;
		}
		// jaar gedeelte een getal?
		if (formatCorrect) {
			// year
			let yearText=geboorteDatum.substring(0,4);
			if (!isPositiveNonZeroNumber(yearText)) {
				formatCorrect=false;
			}
		}
		// maand gedeelte een getal?
		if (formatCorrect) {
			// month
			let monthText=geboorteDatum.substring(5,7);
			if (!isPositiveNonZeroNumber(monthText)) {
				formatCorrect=false;

			}
		}
		// dag gedeelte een getal?
		if (formatCorrect) {
			// day
			let dayText=geboorteDatum.substring(8,11);
			if (!isPositiveNonZeroNumber(dayText)) {
				formatCorrect=false;

			}
		}

		if (formatCorrect) {
			txtGeboorteDatum.className=""; // alle classes verwijderen
			errGeboorteDatum.innerHTML = "";
		} else {
			txtGeboorteDatum.className="invalid";
			errGeboorteDatum.innerHTML="formaat is niet jjjj-mm-dd";
		}
	}
};
const isPositiveNonZeroNumber = (text) => {
	let number=parseInt(text, 10);
	return !isNaN(number) && number>0;
};
const valideerEmail = () => {
	let txtEmail = document.getElementById("txtEmail");
	let errEmail = document.getElementById("errEmail");
	let email = txtEmail.value.trim();
	if (email.length===0) {
		txtEmail.className="invalid";
		errEmail.innerHTML="verplicht veld"
	} else {
		let formatCorrect=true;
		let idx=email.indexOf("@");

		if (idx<1 || idx===email.length-1) {
			// @ teken komt niet voor, of helemaal vooraan of helemaal achteraan de tekst
			formatCorrect=false;
		}
		idx=email.indexOf("@", idx+1);
		if (formatCorrect && idx!==-1) {
			// @-teken komt meermaals voor
			formatCorrect=false;
		}
		if (formatCorrect) {
			txtEmail.className="";
			errEmail.innerHTML=""
		} else {
			txtEmail.className="invalid";
			errEmail.innerHTML="geen geldig emailadres";
		}
	}
};
const valideerAantalKinderen = () => {
	let txtAantalKinderen = document.getElementById("txtAantalKinderen");
	let errAantalKinderen = document.getElementById("errAantalKinderen");
	let aantalKinderen = txtAantalKinderen.value.trim();
	if (aantalKinderen <0){
		txtAantalKinderen.className="invalid";
		errAantalKinderen.innerHTML="is geen positief getal";
	}
	if (aantalKinderen >99){
		txtAantalKinderen.className="invalid";
		errAantalKinderen.innerHTML="is te vruchtbaar";
	}
};

const validatie = () =>{
	let elements = document.getElementsByClassName("invalid");
	if (elements.length === 0) {
		// alles in orde
		window.alert("proficiat")

	}
};

window.addEventListener("load", setup);