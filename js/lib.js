function _lib(selektor){
    this.selektor = selektor;
    this.el = document.querySelectorAll(selektor);
}

_lib.prototype.ubaciElement = function (index, sNaziv, sKlasa, sIdentifikator, sTekst) {
    if(isEmptyOrSpaces(sNaziv))
    {
        console.log("Error");
    }
    else
    {
        var Elemenet = document.createElement(sNaziv);
        if(!isEmptyOrSpaces(sKlasa)) Elemenet.setAttribute('class', sKlasa);
        if(!isEmptyOrSpaces(sIdentifikator)) Elemenet.setAttribute('id', sIdentifikator);
        if(!isEmptyOrSpaces(sTekst)) Elemenet.innerHTML = sTekst;
    }

    this.el[index].appendChild(Elemenet);
}

_lib.prototype.dodajKlasu = function (sKlasa) {
    this.el.forEach(element => {
        element.setAttribute('class', sKlasa);
    });
}

_lib.prototype.dodajAtribut = function (sNazivAtr, sVrijedAtr){
    this.el.forEach(element => {
        element.setAttribute(sNazivAtr, sVrijedAtr);
    })
} 

_lib.prototype.prikazi = function(){
    this.el.forEach(element => {
        element.style.visibility = 'show';
    })
}

_lib.prototype.sakrij = function(){
    this.el.forEach(element => {
        element.style.visibility = 'hidden';    
    })
}

function isEmptyOrSpaces(str){
    return str === null || str.match(/^ *$/) !== null;
}