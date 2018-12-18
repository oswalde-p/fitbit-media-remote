import {peerSocket} from "messaging";


peerSocket.onopen = function(){
    console.log("Companion ready to receive messages");
};

peerSocket.onmessage = function(evt){
  //console.log("Rcvd: " + JSON.stringify(evt.data));
  peerSocket.send(evt.data);
};