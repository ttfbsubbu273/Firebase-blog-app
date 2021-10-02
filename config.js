const dotenv = require('dotenv');
const assert = require('assert');

dotenv.config();

const{
    PORT,
    HOST,
    HOST_URL,
    APIKEY,
    AUTHDOMAIN,
    PROJECTID,
    STORAGEBUCKET,
    MESSAGINGSENDERID,
    APIID,
    MEASUREMENTID
} = process.env;

assert(PORT, "PORT is required");
assert(HOST, "HOST is required");

module.exports = {
    port: PORT,
    host: HOST,
    url: HOST_URL,
    firebaseConfig: {
        apiKey: APIKEY,
        authDomain: AUTHDOMAIN,
        projectId: PROJECTID,
        storageBucket: STORAGEBUCKET,
        messagingSenderId: MESSAGINGSENDERID,
        appId: APIID,
        measurementId: MEASUREMENTID
      }
}

