const fs = require('fs');
const utils = require('util');

// rpomisify
readFile = utils.promisify(fs.readFile);
writeFile = utils.promisify(fs.writeFile);

class Copy{
	constructor(filename,out){
		this.filename = filename;
		this.out = out;
	}

	async read(){
		 this.data = await readFile(this.filename,'utf-8');
		 return this.data;
	}

	async write(data){
		await writeFile(this.out,data,'utf-8');
		console.log('done');

	}
}


module.exports = Copy;