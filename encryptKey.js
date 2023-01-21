const ethers = require("ethers");
const fs = require("fs-extra");
require("dotenv").config();

async function main(){
    const wallet = new ethers.Wallet(process.env.privateKey);
    const encryptedJsonKey = await wallet.encrypt(
        process.env.privateKeyPwd,
        process.env.privateKey
    );
    console.log(encryptedJsonKey);
}

main();