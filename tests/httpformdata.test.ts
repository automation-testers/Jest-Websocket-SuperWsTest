'use strict';

import {http_const} from "../src/http_const";
const  faker  = require('faker');
const api = require('../src/app');
const payload_Wrap = require('../utils/payload');

let accessToken =http_const.ACCESS_TOKEN;
let res;
let payload: { name: any; email: string; gender: string; status: string; };
describe('The App component', function () {

    // test case for an https POST API
  
  
  test('1 - Create users - POST', async function () {
    res = await api.UploadFormFile();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  test('2 - Create users - POST', async function () {
    res = await api.UploadFormData();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  test('3 - Create users - POST', async function () {
    res = await api.UploadFormDataFile();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  test('4 - Create users - POST', async function () {
    res = await api.UploadWithType();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });
  
  test('5 - Create users - POST', async function () {
    res = await api.UploadurlencodedFile();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

  
  test('6 - Create users - POST', async function () {
    res = await api.UploadWithTypeAndEncodeUrl();
    console.log("Response from Image api: ",res.body);
    expect(res.statusCode).toEqual(200);
  });

});