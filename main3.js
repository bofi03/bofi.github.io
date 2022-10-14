 function formula() {
    
    var n = document.getElementById("limite").value;

    n = parseInt(n);

    potencia = 1;

    var sec = [];

    var dos = 0;

    var prueba;

 

    if (n>=1) {

        for (let i = 0; i < n; i++) {

            prueba = i;
            prueba = parseInt(i);
            prueba = prueba + 1;
            
            dos = " " + 2 +"^"+ prueba + " ";
    
            sec[i] = dos;
            
        }
    
        document.getElementById("sucesion").value = "2^0 , " + sec;

        var res = [];
        var comple = 0;

        for (let i = 0; i < n+1; i++) {
            
            comple = Math.pow(2,i)
            
            res[i] = comple;

        }

        // METODO

        exp = n+1;

        exp = parseInt(exp)

        exp1 = Math.pow(2,exp) - 1;

        document.getElementById("resultado").value = exp1;


        // SUMAR TODOS LOS ARRAYS

        // let suma = 0;

        // for (let i = 0; i < res.length; i++) {
        //     suma += res[i];
        // }

        // document.getElementById("resultado").value = suma;
    
    } else {

        var no = "Ingrese un numero mayor o igual a 1"

        document.getElementById("sucesion").value = no;
        document.getElementById("resultado").value = no;
    }

   
 }

 function ggclean(){

    document.getElementById("limite").value = "";

    document.getElementById("sucesion").value = "";

    document.getElementById("resultado").value = "";
}