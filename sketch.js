var hr,Min,Sec


function setup() {
  createCanvas(800,400);
 
}

function draw() {
  translate(500,300)
  rotate(-90)
  background(255,255,255);  

 hr = hour() 
 Min = minute()
 Sec = second()

 if (hr > 12){
   hr = hr-12
 }
 console.log(hr)

 SecAngle = map(Sec,0,60,0,360)

 MinAngle = map(Min,0,60,0,360)

 hrAngle = map(hr,0,12,0,360)
 
 //Second Hand
 push();
 stroke("Red")
 strokeWeight(8)
 rotate(SecAngle)
 line(0,0,100,0)
 pop();

 //Minute Hand
 push();
 stroke("Blue")
 strokeWeight(8)
 rotate(MinAngle) 
 line(0,0,75,0)
 pop(); 

 //Hour Hand
 push();
 stroke("Green")
 strokeWeight(8)
 rotate(hrAngle) 
 line(0,0,50,0)
 pop();

 noFill();
 stroke("red")
 strokeWeight(4)
 arc(0,0,200,200,0,SecAngle)

 noFill();
 stroke("blue")
 strokeWeight(4)
 arc(0,0,150,150,0,MinAngle)

 noFill();
 stroke("Green")
 strokeWeight(4)
 arc(0,0,100,100,0,hrAngle)
 


  drawSprites();
}