const testFolder = './ttss/';
const fs = require('fs');


let files = fs.readdirSync(testFolder).map(function(v) { 
                  return { name:v,
                           time:fs.statSync(testFolder + v).mtime.getTime()
                         }; 
               })
               .sort(function(a, b) { return b.time - a.time; })
files=files.filter(e=>e.name.indexOf('.mp3')==e.name.length-4).map(e=> { return {title:e.name,date:e.time,url:'https://smlog.github.io/data/'+testFolder.substring(1)+encodeURIComponent(e.name)}})
console.log(files)
let output = {content:files}
fs.writeFileSync('./ttss.json',JSON.stringify(output,null,2));
