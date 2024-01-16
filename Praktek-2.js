let beratJoan = 64;
let tinggiJoan = 1.65;
let beratMadan = 60;
let tinggiMadan = 1.6;

var IMT1 = beratMadan / tinggiMadan **2;
var IMT2 = beratJoan / tinggiJoan **2;

var madanHigherintIMT = IMT1 > IMT2;
console.log(madanHigherintIMT);

console.log("Berat Joan  : " + beratJoan);
console.log("Tinggi Joan : " + tinggiJoan);
console.log("Hasil       :" + IMT2);
console.log("Berat Madan : " + beratMadan);
console.log("Tinggi Madan" + tinggiMadan);
console.log("Hasil       :" + IMT1);




