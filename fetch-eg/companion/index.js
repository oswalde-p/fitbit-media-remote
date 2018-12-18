import * as messaging from "messaging"

const person = Math.random() * Math.floor(60)

messaging.peerSocket.onopen = function(){
    console.log("Companion ready")
}
messaging.peerSocket.onmessage = function(e) {
    const url = makeUrl()
    fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
        mode: 'cors',
        cache: 'default',
    }).then(function (response) {
        return response.json();
    }).then(data => {
        //console.log(`Data: ${JSON.stringify(data)}`)
        messaging.peerSocket.send({name: data.name, height: data.height})
    }).catch( e => {
        console.log(e);
    });
}

function makeUrl(){
    let url = "https://swapi.co/api/people/"
    const person = Math.floor(Math.random() *60)
    url += person + "/"
    return url
}