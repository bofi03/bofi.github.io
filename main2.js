
function impares() {

    var n = document.getElementById("limite").value;
    n = parseInt(n);

if (n>=1) {

    var form = [];
    var m = 0;

    for (let i = 1; i < n+1; i++) {
        


        m = 2*i-1;

        form[i-1] = m;
        
    }

    let suman = Math.pow(n,2)

    document.getElementById("resultado").value = suman;

        document.getElementById("sucesion").value = form;
    
    
} else {

    var aviso = "Ingrese un numero mayor o igual a 1"
    document.getElementById("sucesion").value = aviso
    document.getElementById("resultado").value = aviso
    
}


}

function sumaimpares(){

    let suman = Math.pow(n,2)

    document.getElementById("resultado").value = suman;
}

function ggimpares(){

    document.getElementById("limite").value = "";

    document.getElementById("sucesion").value = "";

    document.getElementById("resultado").value = "";
}

