const copy = require('./Copy');


// this is the copy paste function
mycopy = new copy('./data.json','data2.json');
var data = mycopy.read()

data.then((value)=>{
	mycopy.write(value);
})
