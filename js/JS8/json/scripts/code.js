let student={
    voornaam : "Jan",
    familienaam : "Janssens",
    geboorteDatum : new Date("1993‐12‐31"),
    adres : { // een object
        straat : "Kerkstraat 13",
        postcode : "8500",
        gemeente : "Kortrijk"
    },
    isIngeschreven : true,
    namenVanExen : ["Sofie", "Berta", "Philip", "Albertoooo"], // een array
    aantalAutos : 2
}

const setup = () => {
    let tekst = JSON.stringify(student);
    console.log(tekst);

    let string =  '{"voornaam":"Jan","familienaam":"Janssens","geboorteDatum":null,"adres":{"straat":"Kerkstraat 13","postcode":"8500","gemeente":"Kortrijk"},"isIngeschreven":true,"namenVanExen":["Sofie","Berta","Philip","Albertoooo"],"aantalAutos":2}';
    let student1 = JSON.parse(string);
    console.log(student1);
}
window.addEventListener("load", setup);