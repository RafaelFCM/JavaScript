
function bater(x_cor , y_cor){

    var x_vermei = 0;
    var y_vermei = 0;
    var larg_vermei = 80;
    var alt_vermei = 80;
    var x_azu = 900;
    var y_azu = 0;
    var larg_azu = 80;
    var alt_azu = 80;
    var colX = 0;
    var colY = 0;

    distY=(y_cor+(alt_azu/2)) - (y_vermei+(alt_vermei/2))
    distX=(x_cor+(larg_azu/2)) - (x_vermei+(larg_vermei/2))

    passoux= 80-Math.abs(distX)
    passouy= 80-Math.abs(distY)




        // //Quando X
        if(passoux<passouy){
            if(distY<80 && distX<80 && distX>0 && distY>-80){

                x_cor+=3;
                
            }
        if(distY<80 && distX>-80 && distX<0 && distY>-80){

                x_cor-=3;
            }
        }else{
            //quando y
        if(distX<80 && distY<80 && distY>0 && distX>-80){
                y_cor+=3;

            }
        if(distX<80 && distY>-80 && distY<0 && distX>-80){
                y_cor-=3;
            }
        }
    }