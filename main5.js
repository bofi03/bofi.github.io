
function calcular(){

 var n = document.getElementById("limite").value;

 n = parseInt(n)

 var num = 0;

 var par = [];

 for (let i = 0; i < n; i++) {

    num = num + 2;

    par[i] = num

 }
 
 document.getElementById("sucesion").value = par;

    var first = 0;

    first = n*(n+1)

    document.getElementById("resultado").value = first;

}

function ggcalcular(){

   document.getElementById("limite").value = "";

   document.getElementById("sucesion").value = "";

   document.getElementById("resultado").value = "";
}