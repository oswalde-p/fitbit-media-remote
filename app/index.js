import { peerSocket } from "messaging"
import document from "document";

const playButton = document.getElementById("play")
const message = document.getElementById("message")

message.text = 'Companion not ready'

function checkConnection(){
    if (peerSocket.readyState === peerSocket.OPEN){
        peerSocket.send('ping')
    } else {
        message.text = 'Companion not ready'
        console.log('Companion not ready')
    }
}

setInterval(checkConnection, 3000)

playButton.onclick = function(e){
    if (peerSocket.readyState === peerSocket.OPEN){
        peerSocket.send('space')
    } else {
        message.text = 'Companion not ready'
    }
}

document.onkeypress = function(e) {
    const key = e.key
    if (key == 'up') {
        peerSocket.send('volumeup')
    } else if (key == 'down') {
        peerSocket.send('volumedown')
    }
  }

peerSocket.onmessage = function (evt){
    if (!evt.data.connected) {
        message.text = 'Disconnected from server'
    } else {
        message.text = ''
    }
}

// icons by Icons made by flaticon.com/authors/smashicons
