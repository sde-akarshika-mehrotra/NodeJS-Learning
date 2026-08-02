import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

let myusername = process.env.my_username;

console.log("value: ", myusername);
console.log(process.env.database);
console.log("Beginning of Learning backend");
