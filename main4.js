
function geo() {

    var a = document.getElementById("a").value;
a = parseInt(a)

var r = document.getElementById("r").value;
r = parseInt(r)

var n = document.getElementById("n").value;
n = parseInt(n)

if (a >=1 & r >=2 & n >=1  ) {

    var r1;  
    var a1; 
    var scc = [];

for (let i = 0; i < n+1; i++) {
    
    r1 = Math.pow(r,i)
    
    a1 = a*r1

    scc[i] = a1

}

document.getElementById("sucesion").value = scc;

var Rpt;

for (let i = 0; i < n; i++) {
    
    Rpt = n+1;

    arp = Math.pow(r,Rpt)

    ar = a*arp

    ara = ar - a;

    form = ara/(r-1);

   

    
}

document.getElementById("resultado").value = form ;
    
} else {

    var no = "Ingrese un numero mayor o igual a 1"

    document.getElementById("sucesion").value = no;
    document.getElementById("resultado").value = no;
    
}



}

function geoclean(){

    document.getElementById("sucesion").value = "";

    document.getElementById("resultado").value = "";

    document.getElementById("a").value = "";
    document.getElementById("r").value = "";
    document.getElementById("n").value = "";
}