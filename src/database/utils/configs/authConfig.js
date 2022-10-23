//secret key as String to encode and decode token
//- use by verify() and sign() function
require("crypto").randomBytes(35).toString("hex");
const jwtSecret = "cat";
module.exports = jwtSecret;
