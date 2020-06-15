const fs = require('fs');


fs.readFile('./data.json','utf-8',(err,data)=>{
		if(err){
			console.log('error loading data');
		}else{
			var json = JSON.parse(data);
			console.log(json);

		}
})
