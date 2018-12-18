import { peerSocket } from "messaging"
import document from "document";

const requestButton = document.getElementById("request")
const value = document.getElementById("value")

requestButton.onclick = function(e){
    if (peerSocket.readyState === peerSocket.OPEN){
        peerSocket.send("newRequestPlease")
    } else {
        console.log("Companion not ready")
    }
}

peerSocket.onmessage = function (evt){
    const person = evt.data
    console.log(JSON.stringify(evt.data));
    value.text = person.name + ", " + person.height + "cm"

}