#!node
const fs = require("fs");
let name = 'a';
process.argv.slice(2).forEach(function (item){
    if(item.indexOf('--name=')!=-1){
        name = item.split("=")[1].trim();
    }
})
if(name == 'vue'){
    fs.writeFileSync("./"+index+".vue", fs.readFileSync(__dirname+'/template/temp.vue','utf-8'));
}else {
    fs.writeFileSync("./"+name+".html", fs.readFileSync(__dirname+'/template/temp.html','utf-8'));
    fs.writeFileSync("./"+name+".js", fs.readFileSync(__dirname+'/template/temp.js','utf-8'));
    fs.writeFileSync("./"+name+".css", fs.readFileSync(__dirname+'/template/temp.css','utf-8'));
}

console.log("success!");
