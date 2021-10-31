class Game{
    constructor(){
this.button1 =createButton("BACK");
this.button2 =createButton("BACK");
this.button3 =createButton("BACK");
this.button4 =createButton("BACK");
    }
    start(){
        if(gameState ===0){
            form =new Form();
            form.display();
        }
    }

    play(){
        form.hide();
        fill('yellow');
        textSize(75);
        text("S9@p4$4WE",550,400);

        fill('red');
        textSize(35);
        text("Password For Level 1",600,280);

        if(gameState===1){
            this.button1.position(50,50);
            this.button1.style('height','50px');
            this.button1.style('width','70px');
            this.button1.style('background','green');  
            this.button1.style('fontSize','20px') 
            this.button1.style('color','silver');
            }
       
        this.button1.mousePressed(()=>{
        this.button1.hide();

            gameState =0;
            this.start();
    })

    
        
    }

    play2(){
        form.hide();
        fill('lime');
        textSize(25);
        text("ABOUT BLASTER GAME",620,100);

        fill('AQUA');
        textSize(20);
        text("HELICOPTER BLASTER IS A GAME DESIGNED FOR NATION LOVERS.",150,150);

        fill('AQUA');
        textSize(20);
        text("OUR CAMMANDO HAS TO SAVE HIS NATION FROM ENEMY ATTACK.",150,180);

        fill('AQUA');
        textSize(20);
        text("AT THE INTRO SCREEN PLAYER HAS TO SUBMIT HIS/HER NAME AND AGE.",150,210);

        fill('aqua');
        textSize(20);
        text("GAME IS MODIFIED IN 3 LEVELS.",150,240);

        fill('aqua');
        textSize(20);
        text("PASSWORD CHANGES AT EVERY LEVEL.",150,270);

        fill('aqua');
        textSize(20);
        text("PLAYER CAN SEE THE PASSWORD ONLY ONCE.",150,300);

        fill('aqua');
        textSize(20);
        text("ONCE HE COMES BACK TO INRO SCREEN AFTER OBSERVING THE PASSWORD, IF PLAYER AGAIN CLICKS ON PASSWORD HE CANNOT",150,330);

        
        fill('aqua');
        textSize(20);
        text("COME BACK TO INTRO SCREEN.",150,360);

        fill('aqua');
        textSize(20);
        text("THE PLAYER HAS TO GRADEUP 40 IN LEVEL 1 WITH ONE LIFE. ",150,390);

        fill('aqua');
        textSize(20);
        text("THE PLAYER HAS TO GRADEUP 120 IN LEVEL 2 WITH 2 LIFE.",150,420);

        fill('aqua');
        textSize(20);
        text("THE PLAYER HAS GRADEUP 200 IN LEVEL 3 WITH 3 LIFE.",150,450);

        fill('aqua');
        textSize(20);
        text("IF PLAYER COLLECTS BLUE BADGE THEN 5 GRADEUPS.",150,480);

        fill('aqua');
        textSize(20);
        text("IF PLAYER COLLECTS YELLOW BADGE THEN 10 GRADEUPS.",150,510);

        fill('aqua');
        textSize(20);
        text("IF PLAYER COLLECTS RED BADGE THEN 20 GRADEUPS.",150,540);

        fill('aqua');
        textSize(20);
        text("IF PLAYER DESTROY ENEMY CRAFT THEN 5 GRADEUPS.",150,570);

        fill('aqua');
        textSize(20);
        text("IF ENEMY CRAFT ENTERS BLUE ZONE THEN PLAYER WILL LOSE THE GAME.",150,600);

        











    if(gameState===2){
            this.button2.position(50,50);
            this.button2.style('height','50px');
            this.button2.style('width','70px');
            this.button2.style('background','green');  
            this.button2.style('fontSize','20px') 
            this.button2.style('color','silver');
            }
            
            this.button2.mousePressed(()=>{
                this.button2.hide();
        
                    gameState =0;
                    this.start();

            }) 
        }

        play3(){
            
            form.hide();
            
            fill('darkred');
            textSize(20);
            text("Press 'Right Arrow' to move right.",250,50);
            
            fill('darkred');
            textSize(20);
            text("Press 'Left Arrow' to move left.",250,80);
            
            fill('darkred');
            textSize(20);
            text("Press 'Up Arrow' to move up.",250,110);

            fill('darkred');
            textSize(20);
            text("Press 'Down Arrow' to move down.",250,140);

            fill('darkred');
            textSize(20);
            text("Press 'Space Bar' to sprint forward.",250,170);

            fill('darkred');
            textSize(20);
            text("Press 'S' key to fire WH-24 missile.",250,200);

            fill('darkred');
            textSize(20);
            text("Press 'K' key to fire NB-001 missile.",250,230);

            fill('darkred');
            textSize(20);
            text("Press 'C' key to fire GYANO missile.",250,260);

            fill('darkred');
            textSize(20);
            text("Press 'N' key to fire SUPER-T missile.",250,290);

            fill('darkred');
            textSize(20);
            text("Press 'R' key to fire WB0-25 missile.",250,320);

            


            if(gameState===3){
                this.button3.position(50,50);
                this.button3.style('height','50px');
                this.button3.style('width','70px');
                this.button3.style('background','green');  
                this.button3.style('fontSize','20px') 
                this.button3.style('color','silver');
                }
           
            this.button3.mousePressed(()=>{
            this.button3.hide();
    
                gameState =0;
                this.start();
        })
        }





        play4(){
            form.hide();

            fill('yellow');
            textSize(20);
            text("3 days ago, Our Colonel Gamor had kept a secret meeting with his officers in night at 2 o'clock. Among the offficers Marnold was the head. ",200,50);
            
            fill('yellow');
            textSize(20);
            text("On that night Gamor told Marnold about precious badges.These badges were kept in the Building of JACO.",200,80);

            fill('yellow');
            textSize(20);
            text("These Three badges were like backbone of our country.They contained the design of security system of every state.",200,110);

            fill('yellow');
            textSize(20);
            text("One can get all underground secrets of security with these badges.Hence the location of these badges was only known to Colonel Gamor.",200,140);


            fill('yellow');
            textSize(20);
            text("He has to depart for pacific ocean next day.He told everything about these badges to Marnold.",200,170);

            fill('yellow');
            textSize(20);
            text("Marnold went to building of JACO at 4 am. You saw him going towards the shield security of badges.",200,200);

            fill('yellow');
            textSize(20);
            text("After a few moments Marnold was missing from the building.You ordered security guards and junior commandos to search him. ",200,230);

            fill('yellow');
            textSize(20);
            text("Till half an hour you were unable to find him.Suddenly you heard the sound of blades of helicopters.",200,260);

            fill('yellow');
            textSize(20);
            text("You went to the roof of the building and saw Marnold leaving towards enemy country with badges with him.",200,290);

            fill('yellow');
            textSize(20);
            text("You tried to catch him but was unsucessful.But you were able to see the Mark of Tiger on the helicopter.",200,320);

            fill('yellow');
            textSize(20);
            text("Now you became sure that Marnold was one of the member of DEVIL gang who had tried many times to envade your country.",200,350);

            fill('yellow');
            textSize(20);
            text("Within few days enemy country can attack anywhere in your country.",200,380);

            fill('RED');
            textSize(23);
            text("COMMANDO BE ALERT AND SAVE YOUR COUNTRY",540,540);




            if(gameState===4){
                this.button4.position(50,50);
                this.button4.style('height','50px');
                this.button4.style('width','70px');
                this.button4.style('background','yellow');  
                this.button4.style('fontSize','20px') 
                this.button4.style('color','silver');
                }
           
            this.button4.mousePressed(()=>{
            this.button4.hide();
    
                gameState =0;
                this.start();
        })
        }
    }

