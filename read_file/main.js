const fs = require('fs');
const utils = require('util');


const readFile = utils.promisify(fs.readFile);

// rad the file directly
// with custom function
async function ReadFile(){

	var data = await readFile('./data.json','utf-8');
	console.log(data);

}

ReadFile();
console.log("this is a async function");


