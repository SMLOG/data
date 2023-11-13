const testFolder = './ttss/';
const fs = require('fs');


let files = fs.readdirSync(testFolder);
files=files.reverse().filter(e=>e.indexOf('.mp3')==e.length-4).map(e=> { return {title:e,url:'https://smlog.github.io/data/'+testFolder.substring(1)+e}})
console.log(files)
let output = {content:files}
fs.writeFileSync('./ttss.json',JSON.stringify(output));
