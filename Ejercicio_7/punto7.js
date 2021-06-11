var i;
var linea

for (i=0 ;i<=500; i++){
        document.write(+i);   

        if (i % 4 == 0){
            document.write (" (Es multiplo de 4)")
        } else if (i % 9 == 0){
            document.write (" (Es multiplo de 9) ")
        }else if (i % 5 == 0){
            document.write ("<br>" + "____________________" + "<br>")
        }

        document.write ("<br>");
}