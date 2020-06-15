var fs = require('fs');


fs.readFile('./data.json','utf-8',(err,data)=>{
	if(err){
		console.log('data cant be loaded');
	}else{
		console.log(data);
	}

})