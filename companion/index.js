import * as messaging from "messaging"
import settingsStorage from "settings"

const serverUrl = JSON.parse(settingsStorage.getItem('serverUrl')).name || "https://shabado620062.localtunnel.me/"

if (serverUrl.slice(-1) != '/') serverUrl += '/'

messaging.peerSocket.onopen = function(){
    console.log("Companion ready")
}
messaging.peerSocket.onmessage = function(evt) {
    const url = serverUrl + evt.data + '/'
    fetch(url, {
        method: "GET",
        headers: {
            "content-type": "application/json"
        },
        mode: 'cors',
        cache: 'default',
    }).then(function (response) {
        if (response.status == '200') return messaging.peerSocket.send({ connected: true })
        else {
            console.log('Error fetching ' + url)
            console.log('Status: ' + response.status)
            return messaging.peerSocket.send({ connected: false })
        }
    }).catch( e => {
        messaging.peerSocket.send({ message: 'error', connected: false })
        console.log(e);
    });
}
