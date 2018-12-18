import document from "document";

const button0 = document.getElementById("button0");
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const button3 = document.getElementById("button3");

const allButtons = [button0, button1, button2, button3];

let tempColour;

for (let i=0; i<allButtons.length; i++){
  const b = allButtons[i];
  b.onmousedown = function(e){
      tempColour = b.style.fill;
      b.style.fill = "gray";
  };

  b.onmouseup = function(e){
    b.style.fill = tempColour;
  };
}



button0.onclick = function(e){
  console.log("0 pressed");
};



button1.onclick = function(e){
  console.log("1 pressed");
};

