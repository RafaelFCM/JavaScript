// ------------------------------------------ SCRIPTS ------------------------------------------


(function () {

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    // variaveis para as dimensões de tamanho, e lugar no canvas para o objeto
    var x_vermei = 0;
    var y_vermei = 0;
    var larg_vermei = 80;
    var alt_vermei = 80;
    var x_azu = 900;
    var y_azu = 0;
    var larg_azu = 80;
    var alt_azu = 80;
    // let block1 = new Sprite(90, 70, 300, 350 , "#000");

    var x_obj = 220;
    var y_obj = 140;
    var larg_obj = 30;
    var alt_obj = 300;
    
    var x_obj1 = 700;
    var y_obj1 = 100;
    var larg_obj1 = 30;
    var alt_obj1 = 300;
 
    var x_obj2 = 100;
    var y_obj2 = 70;
    var larg_obj2 = 350;
    var alt_obj2 = 100;
 
    var x_obj3 = 500;
    var y_obj3 = 400;
    var larg_obj3 = 350;
    var alt_obj3 = 100;



    // variavel imagem
    var icon1 = new Image();
    icon1.src = "./images/robôV.png";
    var icon2 = new Image();
    icon2.src = "./images/RobôA.png";
    var pared = new Image();
    pared.src = "./images/Parede.png";


    //-------------- Teclas ----------------

    //----- Player 1 -----
    const LEFT = 37
    const UP = 38
    const RIGHT = 39
    const DOWN = 40;
    
    //----- Player 2 -----
    const A = 65;
    const W = 87;
    const D = 68;
    const S = 83;


    //----- movimento -----
	let mvLeft = mvUp = mvRight = mvDown = false;
	
	let plLeft = plUp = plRight = plDown = false;




    window.addEventListener("keydown", function(e){
        let key = e.keyCode;
        switch(key){
            case LEFT:
                mvLeft = true;
                break;
            case RIGHT:
                mvRight = true;
                break;
            case UP:
                mvUp = true;
                break;
            case DOWN:
                mvDown = true;
                break;
        }
    }, false);

    window.addEventListener("keyup", function(e){
        let key = e.keyCode;
        switch(key){
            case LEFT:
                mvLeft = false;
                break;
            case RIGHT:
                mvRight = false;
                break;
            case UP:
                mvUp = false;
                break
            case DOWN:
                mvDown = false;
                break
        }
    },false);






    window.addEventListener("keydown", function(r){
        let key = r.keyCode;
        switch(key){
            case A:
                plLeft = true;
                break;
            case D:
                plRight = true;
                break
            case W:
                plUp = true;
                break
            case S:
                plDown = true;
                break;
        }
    }, false);

    window.addEventListener("keyup", function(r){
        let key = r.keyCode;
        switch(key){
            case A:
                plLeft = false;
                break;
            case D:
                plRight = false;
                break;
            case W:
                plUp = false;
                break
            case S:
                plDown = false;
                break
        }
    },false);




    requestAnimationFrame(gameloop);

    //vermei
    function update1(){
//controles

    if(mvLeft==true && mvRight==false){
        x_vermei = x_vermei - 3
    }else if(mvRight==true && mvLeft==false){
        x_vermei = x_vermei + 3
    }
    if(mvUp==true && mvDown==false){
        y_vermei = y_vermei - 3
    }else if(mvDown==true && mvUp==false){
        y_vermei = y_vermei + 3
    }


    //Colisão


    if(x_vermei>930){
        x_vermei=x_vermei-3
    }
    if(x_vermei<-8){
        x_vermei=x_vermei+3
    }
    if(y_vermei<-8){
        y_vermei=y_vermei+3
    }
    if(y_vermei>525){
        y_vermei=y_vermei-3
    }


        distY=(y_azu+(alt_azu/2)) - (y_vermei+(alt_vermei/2))
        distX=(x_azu+(larg_azu/2)) - (x_vermei+(larg_vermei/2))

        passoux= 80-Math.abs(distX)
        passouy= 80-Math.abs(distY)
    
    




        

        // //Quando X
        if(passoux<passouy){
            if(distY<50 && distX<50 && distX>0 && distY>-50){

                x_vermei-=3;

            }
        if(distY<50 && distX>-50 && distX<0 && distY>-50){

                x_vermei+=3;
            }
        }else{
            //quando y
        if(distX<50 && distY<50 && distY>0 && distX>-50){
                y_vermei-=3;

            }
        if(distX<50 && distY>-50 && distY<0 && distX>-50){
                y_vermei+=3;
            }
        }



    }


    //azul
    function update2(){
        if(plLeft==true && plRight==false){
            x_azu = x_azu - 3
        }else if(plRight==true && plLeft==false){
            x_azu = x_azu + 3
        }
        if(plUp==true && plDown==false){
            y_azu = y_azu - 3
        }else if(plDown==true && plUp==false){
            y_azu = y_azu + 3
        }


        if(x_azu>930){
            x_azu=x_azu-3
        }
        if(x_azu<-8){
            x_azu=x_azu+3
        }
        if(y_azu<-8){
            y_azu=y_azu+3
        }
        if(y_azu>525){
            y_azu=y_azu-3
        }
       


        distY=(y_azu+(alt_azu/2)) - (y_vermei+(alt_vermei/2))
        distX=(x_azu+(larg_azu/2)) - (x_vermei+(larg_vermei/2))

        passoux= 80-Math.abs(distX)
        passouy= 80-Math.abs(distY)
    
    


        // //Quando X
        if(passoux<passouy){
            if(distY<50 && distX<50 && distX>0 && distY>-50){

                x_azu+=3;
            }
        if(distY<50 && distX>-50 && distX<0 && distY>-50){

                x_azu-=3;
            }
        }else{
            //quando y
        if(distX<50 && distY<50 && distY>0 && distX>-50){
                y_azu+=3;

            }
        if(distX<50 && distY>-50 && distY<0 && distX>-50){
                y_azu-=3;
            }
        }
    }


    //game loop
    function gameloop() {
        desenharImage(x_vermei, y_vermei);
        desenharImage(x_azu, y_azu);

        update1();
        update2();
        

       










        requestAnimationFrame(gameloop);
    }

    function desenharImage() {
        
        ctx.clearRect(0, 0, 1000, 800);
        ctx.drawImage(icon1, x_vermei, y_vermei, larg_vermei, alt_vermei)
        ctx.drawImage(icon2, x_azu, y_azu, larg_azu, alt_azu)   
        ctx.drawImage(pared, x_obj, y_obj, larg_obj, alt_obj)     
        ctx.drawImage(pared, x_obj1, y_obj1, larg_obj1, alt_obj1)     
        ctx.drawImage(pared, x_obj2, y_obj2, larg_obj2, alt_obj2)     
        ctx.drawImage(pared, x_obj3, y_obj3, larg_obj3, alt_obj3)     


    }

}())
// ------------------------------------------ FIM SCRIPTS ------------------------------------------