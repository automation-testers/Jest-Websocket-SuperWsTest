import WebSocket from "ws";

module.exports = {

    // Method for create socket
    createSocket(url: any) {
        try {
            const socket = new WebSocket(url);
            return socket;
        } catch (error) {
            console.log("Unable to create connection. Reason:"+error);
        }
        
    },
    
    // Method send message
    sendMessage(message: any, socket: any) {
        try {
            socket.send(message);
        } catch (error) {
            console.log("Unable to send message. Reason:"+error);
        }
        
    } 

}