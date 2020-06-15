const fs = require('fs');
const utils = require('util');

// make this is async
const readdir = utils.promisify(fs.readdir);

// do the same thing with 
// async this time

async function Dataread(){
	
	const data = await readdir('A:/');
	console.log('Data : ',data);
	

}


Dataread();

// this wil print first
console.log("this is the last line");


