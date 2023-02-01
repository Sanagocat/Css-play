
let myStyle1=document.getElementById("myStyle1");
let danwoo1=document.getElementById("danwoo1");
let imposterButton=document.getElementById("imposter");
imposterButton.addEventListener("click",imposter_buttonFunction);
myStyle1.addEventListener("click",myStyle1_function);
danwoo1.addEventListener("click",danwoo1_function);


function myStyle1_function(){
  console.log("myStyle1_function");

  if(myStyle1.className == "danwooClassGreen")
  {
    myStyle1.className = "danwooClassRed";
  }
  else
  {
    myStyle1.className = "danwooClassGreen";
  }
}

function danwoo1_function(){
  console.log("danwoo1_function");
  if(danwoo1.className == "danwooClassGreen") 
  {
    danwoo1.className = "danwooClassRed";
  }
  else
  {
    danwoo1.className = "danwooClassGreen";
  }
}

function imposter_buttonFunction(){
  console.log("button pressed");
  if(imposterButton.className == "imposter_button")
  {
    imposterButton.className = "imposter_monster";
  }
  else
  {
    imposterButton.className = "imposter_button";
  }
}