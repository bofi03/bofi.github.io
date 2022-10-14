
function gg() {

    var n = document.getElementById("limite").value;
    n = parseInt(n);

    if (n>=1) {


        var base = 0;

        var m = [];
    
        for (let i = 0; i < n; i++) {
    
           base = base + 1;
            
            m[i] = base;
            
        }
    
        document.getElementById("sucesion").value = m;
    
            var formula = (n*(n+1))/2
    
            document.getElementById("resultado").value = formula;
        
    } else {

        
        var aviso = "Ingrese un numero mayor o igual a 1"
        document.getElementById("sucesion").value = aviso
        document.getElementById("resultado").value = aviso

    }

        
}

function ggclean(){

    document.getElementById("limite").value = "";

    document.getElementById("sucesion").value = "";

    document.getElementById("resultado").value = "";
}


