var suma=0; 

do{

    var continuar = confirm("esta seguro que desea continuar ?");
    
    
    if(continuar){

            var Num = window.prompt("Ingrese un numero ");
            var numero = parseInt(Num); 
                
            if(isNaN(numero)) {                  
                alert ("no es un numero ingrese un valor que corresponda ");
                }

            else {
                parseInt (numero);
                suma=suma + numero;
            }   

        }

    else {
            alert ("El total de los numeros ingresados son "+suma);
        }

}             
while (continuar != undefined)