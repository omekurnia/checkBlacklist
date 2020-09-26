const fs = require("fs");
const prompt = require("prompt-sync")();
var path = prompt("please input your file name: ");
if (path == "blocked.txt") {
    let name = prompt("please enter the name: ");
    let phoneNumber = prompt("please enter the phone number: ");
    checkBlacklist(name, phoneNumber);
} else {
    console.log("sorry couldn't find your file name, check again.");
}

function initialize(path) {
    let blacklist = fs.readFileSync(path).toString();
    return blacklist;
}

function checkBlacklist(name, phoneNumber) {
    let blacklist = initialize(path);
    let args = name.toLowerCase() + " " + phoneNumber.toLowerCase();
    if (blacklist.includes(args)) {
        console.log("It is on Blacklist");
    } else {
        console.log("Not in Blacklist");
    }
}