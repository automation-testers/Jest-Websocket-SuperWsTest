import {http_const} from "./http_const";

const supertest = require('supertest');
const publicApi = supertest(http_const.HTTP_BASE_URL);

module.exports = {

    // API call for create user
    createUsers(payload: any, authorization: any) {
        return publicApi.post(`/users`)          
            .set({ 'Content-Type': 'application/json' })
            .set({ 'Authorization': authorization })
            .send(payload)
    },  
    // API call for get user
    getUsers() {
        return publicApi.get(`/users`)
          
            .set({ 'Content-Type': 'application/json' })
            .send()
    },  

}
