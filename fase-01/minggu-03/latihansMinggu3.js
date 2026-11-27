const nama  = "novanda";
const kota  = "madiun";
const tahun = 1999;
let   celcius = 30;
let   panjang = 8;
let   lebar   = 5;


// biodata
const bidoata = `aku bernama ${nama} , aku lahir di ${kota} dengan tahun lahir ${tahun}`;
console.log(bidoata);


// konversi
let farenheit = (celcius)*9/5;
console.log("total farenheit :",farenheit);
 
// perhiutngan persegi panjang
let   luas     = panjang * lebar;
console.log("total luas persegi :",luas);
let   keliling = 2 *(panjang+lebar);
console.log("total keliling :",keliling);

//perhiutngan umur
let umur = 2026-tahun;
console.log("umur saya adalah :",umur);

//menit ke jam
let jam = 135/60;
let menit = 135%60;
console.log(Math.round(jam),"jam",menit,"menit");

// diskon dan pajak
let harga = 250000;
let hargadiskon = harga-(harga*0.20) ;
let pajak  = hargadiskon*0.11;
let hargafinal  = pajak;

console.log("total harga=",hargafinal);

// tukar nilai
let a = 3;
let c = a;
let b = 7;
console.log("nilai a=",a=b);
console.log("nilai b=",c);

