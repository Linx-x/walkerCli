#!node
const fs = require("fs");
let name = 'a';
process.argv.slice(2).forEach(function (item){
    if(item.indexOf('--name=')!=-1){
        name = item.split("=")[1].trim();
    }
})

fs.writeFileSync("./"+name+".html", fs.readFileSync(__dirname+'/template/temp.html','utf-8'));
fs.writeFileSync("./"+name+".js", fs.readFileSync(__dirname+'/template/temp.js','utf-8'));
fs.writeFileSync("./"+name+".css", fs.readFileSync(__dirname+'/template/temp.css','utf-8'));
console.log("success!");
