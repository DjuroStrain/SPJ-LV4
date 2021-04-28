var newObject = new _lib('.page-list');
var naslov = new _lib('.naslov');
console.log(newObject.el[0].innerHTML);

newObject.ubaciElement(0, "h3", "novi", "noviId", "Ovo je novo dodano");

    //newObject.sakrij();

naslov.dodajAtribut("name", "naslov");
newObject.prikazi();

localStorage.clear();
localStorage.setItem("racunarstvo", "http://racunarstvo.vuv.hr/");
localStorage.setItem("loomen", "https://loomen.carnet.hr");
localStorage.setItem("imagine", "http://e5.onthehub.com/d.ashx?s=ui4qkso06k");
localStorage.setItem("studentskiDom", "http://studom.vsmti.hr");
localStorage.setItem("office365", "https://outlook.office365.com/owa/?realm=vsmti.hr#path=/mail");

for(var i = 0; i < localStorage.length; i++)
{
    var footer = document.getElementById('footer');
    var footBar = document.createElement('li');
    var alink = document.createElement('a');
    key = localStorage.key(i);
    value = localStorage.getItem(localStorage.key(i));
    alink.innerHTML = key;
    alink.setAttribute("href", value);
    footer.appendChild(footBar);
    footBar.appendChild(alink);
}

