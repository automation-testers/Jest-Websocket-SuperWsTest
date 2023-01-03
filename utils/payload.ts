const  faker  = require('faker');

module.exports = {

    // Payload
    getPayload(name: any, email: any,gender: any, status: any) {
                  
        return {
            "name": name,
            "email": email,
            "gender": gender,
            "status": status
        }
    },  

        // Payload
        getWsPayload() {
                  
            return {
                event: "subscribe", 
                channel: "status", 
                key: "deriv:tBTCF0:USTF0",
                abc: "123", 
                xyz: "456", 
                pqr: "789", 
                std: "101"
            }
        } 
}