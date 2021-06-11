var suma=""; 

do{

    var continuar = confirm("esta seguro que desea continuar ?");
    if(continuar){

    var texto = window.prompt("Ingrese el texto ");
            
        if(texto == "") {      
            suma= suma + texto;
            }

        else {
            suma= suma + "-" + texto;
        }   

    }

else {
        alert ("Todos los textos introducidos son  "+suma);
    }

}             
while (continuar != undefined)