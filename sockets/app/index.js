import document from "document";
import {peerSocket} from "messaging";
import { display } from "display";

function Bar(rect){
    console.log(rect);
    this.rect = rect;
    this.isOn = rect.style.display === "inline";
}

Bar.prototype.show = function(){
    this.rect.style.display = "inline";
    this.isOn = true;
};

Bar.prototype.hide = function(){
    this.rect.style.display = "none";
    this.isOn = false;
};

Bar.prototype.toggle = function(){
    if (this.isOn){
        this.hide();
    }else{
        this.show();
    }
};


function getBars(){
    let rects = document.getElementsByClassName("barSegment");
    let bars = [];
    for (let r of rects){
        bars.push(new Bar(r));
    }
    return bars;
}

function setStrength(strength, bars){
    for (let i=0; i< bars.length; i++){
        if(i<strength){
            bars[i].show();
        }else{
            bars[i].hide();
        }
    }
}

/**
 * Try to connect to companion app, return time for round
 * trip message.
 * -1 if no response in TIMEOUT
 */
function pingPhone(){
    //console.log("pinging");
    if (peerSocket.readyState === peerSocket.OPEN){
        peerSocket.send({time: Date.now()})
    }
}

peerSocket.onmessage = function (evt){
    let sendTime = evt.data.time;
    let diff = Date.now()-sendTime;
    statusText.text = diff;
};

display.autoOff = false;
display.on = true;
const statusText = document.getElementById("status");
const bars = getBars();
let strength = 0;
setStrength(2,bars);

setInterval(pingPhone, 500);


// respond to physical buttons
document.onkeypress = function(e){
    if (e.key === "down") {
        //primary
    }else if(e.key ==="up"){
        //secondary
    }else if(e.key === "back"){
        //back
    }
};



