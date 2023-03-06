//Kis Péter - Frontend team 12
const Dolgozok = [{
    nev: "Koaxk Ábel",
    kor: 23,
    fizetes: 400000,
    beosztas: "Rendszergazda"
},
{
    nev: "Zsíros B. Ödön",
    kor: 45,
    fizetes: 1200000,
    beosztas: "Ügyvezető Igazgató"
},
{
    nev: "Meg Győző",
    kor: 32,
    fizetes: 600000,
    beosztas: "Marketing Manager"
},
{
    nev: "Békés Csaba",
    kor: 63,
    fizetes: 180000,
    beosztas: "Takarító"
},
{
    nev: "Pofá Zoltán",
    kor: 25,
    fizetes: 300000,
    beosztas: "Biztonsági Őr"
},
{
    nev: "Fejet Lenke",
    kor: 22,
    fizetes: 220000,
    beosztas: "Irodai Titkár"
},
{
    nev: "Vak Cina",
    kor: 30,
    fizetes: 500000,
    beosztas: "Üzem Orvos"
}
]


//1. feladat
document.write("<b>1. feladat:</b>");
function hosszEllenor(szoveg){
let igazE=0;
for (let i=0;i<szoveg.length;i++){
if (i>7){
igazE=true;
}
else{
igazE=false;
}
}
return igazE;
}
document.write("<br>"+hosszEllenor("teszt"));
document.write("<br>"+hosszEllenor("feladatteszt"));
document.write("<br>"+hosszEllenor(Dolgozok));

document.write("<hr>");
document.write("<b>2. feladat:</b><br>");
function tajSzamEllenor(szamsor){
let paros=0;
let paratlan=0;
for(i=0;i<szamsor.length;i++){
    if(szamsor.length!=9){
    return false;
}
}
for(i=0;i<szamsor;i++){
    if(i%2===0) {
      paros+=Number(szamsor[i]);
    }
    else {
      paratlan+=Number(szamsor[i]);
    }
   }
let ellenorzoSzam =((paros * 7) + (paratlan*3))%10;
return ellenorzoSzam == Number(szamsor[8]);
}
document.write(tajSzamEllenor("111111111"));
document.write("<br>");
document.write(tajSzamEllenor("019536646"));

document.write("<hr>");
document.write("<b>3. feladat:</b>");
function fizetesKulonbseg(tomb) {
let maximum = tomb[0].fizetes;
let minimum = tomb[0].fizetes;
for (let i=1; i< tomb.length;i++) {
if (tomb[i].fizetes>maximum) {
  maximum= tomb[i].fizetes;
}

if (tomb[i].fizetes < minimum) {
  minimum= tomb[i].fizetes;
}
}
return maximum-minimum;
}

document.write("<br>"+fizetesKulonbseg(Dolgozok)+" Ft"); 

document.write("<hr>");
document.write("<b>4. feladat:</b>");
function legidosebbDolgozo(objektum){
let maximumIndex=0;
for(let i=0;i<objektum.length;i++){
if(objektum[i].kor>objektum[maximumIndex].kor){
maximumIndex=i;
}
}
return maximumIndex;
}
document.write("<br>"+legidosebbDolgozo(Dolgozok));

document.write("<hr>");
document.write("<b>5. feladat:</b>");
function atlagFizetesEmeles(tomb) {
let osszeg=0;
let db=0;
for (let i=0; i<tomb.length; i++) {
osszeg+= tomb[i].fizetes;
db++;
}
let atlag = osszeg/db
for (let i=0; i <tomb.length; i++) {
if (tomb[i].fizetes<atlag) {
  tomb[i].fizetes*= 1.1;
}
}
document.write("A dolgozók átlag fizetése: "+atlag+" Ft<br>");
for (let i = 0; i < tomb.length; i++) {
document.write(tomb[i].nev + " fizetése: " + tomb[i].fizetes + " Ft<br>");
}
return tomb;
}
atlagFizetesEmeles(Dolgozok);