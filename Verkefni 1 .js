//1. 1.Hvað er ECMAScript?

ECMA script er grunnurinn sem Javascript er byggt upp á. Það er staðlað í dag en var það ekki áður.

//2. Afhverju að nota === fremur en == í JavaScript?
// === er mun strangara og skilar false ef týpurnar sem eru bornar saman eru mismunandi.
//Dæmi:
console.log(3 == "3"); // true 
console.log(3 === "3"); // false.

/*3.Hvað kemur út og hvaða type (sjá typeof operator)? Skil ekki alveg spurninguna
a) var result = 5 * “5”;
b) var result = 5 + “5”; 
*/
var result = 5 * "5";
var result = 5 + "5";

document.getElementById("demo").innerHTML = result;
//Útkoma;
55

//4.Hvað eru margar global breytur í kóðanum? 
//Tvær?

//5.Hver er munurinn á A og B? Útskýrðu hvað “use strict“ gerir.
//Munurinn er sá að dæmi A mun ekki gefa villu á functionið en dæmi B mun gera það.
//Use strict gerir manni kleift að stilla á ákveðið function að það gefi bara villu á það function frekar en allan scope'inn. Hægt er að setja use strict í byrjun skriftunnar og þá er það global.

//6.Hver er munurinn á null og undefined í notkun?
// Undefined þýðir að það er búið að búa til variable en það er ekki búið að setja neitt gildi á það en þegar null er notað þá getur það verið sett sem gildi því það hefur ekkert gildi.

/* Sleppt
7.Gerðu kóðann skilvirkari og rökstuddu breytinguna!
var names = ['George','Ringo','Paul','John'];
for(var i=0,j=names.length;i<j;i++){
doSomethingWith(names[i]);
}
*/

//8. Hver er munurinn á for of, forEach og for in lykkju. Komdu með dæmi?
//For lúppan keyrir í gegnum fylkið lið fyrir lið. foreach lúppan keyrir í gegnum t.d. lista af objectum. For in lúppar í gegnum öll þau properties eða breytur sem eru í einu objecti.
var obj = {a:1, b:2, c:3};
    
for (var prop in obj) {
  console.log("obj." + prop + " = " + obj[prop]);
}

// Output:
// "obj.a = 1"
// "obj.b = 2"
// "obj.c = 3"
/*9. Hvað er NaN og afhverju er eftirfarandi false? 
console.log(NaN == NaN);*/
// NaN gefur til kynna að gildið sé ekki lögleg tala. Eftirfarandi er false því NaN er ekki tala

//10. Hvað birtist (úttak)? Útskýrðu hversvegna.
console.log(null || "user")
//Í console kemur engin villa, bara user. 


