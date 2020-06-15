const express = require('express');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
var port = 3000;


/*
	temp data for working
*/

var message = [
	{name:"tanvir",message:"hi"},
	{name:"ornob",message:"Hello"}

]


/*
	REQUEST STARTS HERE

*/

app.get('/message',(req,res)=>{
	res.send(message);
});

app.post('/message',(req,res)=>{
	console.log(req.body);
	// add to the message json
	message.push(req.body);
	res.sendStatus(200);

});



/*
	static middleware goes here	
	loding all the css and client side js 
*/

app.use(express.static(__dirname));

/*
	SERVER PORTION STARTS HERE
*/
app.listen(port,()=>{
	console.log(`[*] APP IS RUNNING ON PORT ${port}`);

})