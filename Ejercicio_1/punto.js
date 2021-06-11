var Num = window.prompt ("Ingrese su calificación ")
    var nota = parseInt(Num);

    if(nota <= 3){
        alert ("Su nota es muy deficiente ");
    } 
    else if (nota <=5){
        alert ("Su nota es Insuficiente ");
    }
    else if (nota <=6){
        alert ("Su nota  es Suficiente ");
    }
    else if (nota <=7){
        alert ("Su nota es Bien ");
    }
    else if (nota <=9){
        alert ("Su nota es Notable ");
    }
    else {
        alert ("Su nota es Sobresaliente ");
    }