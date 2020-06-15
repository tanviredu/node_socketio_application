const express = require('express');
var bodyParser = require('body-parser');
const mongoose = require('mongoose');

// ading sttings for the socket io
const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http)

var mongoDB = 'mongodb://127.0.0.1/chat_app';
mongoose.connect(mongoDB, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}))
var port = 3000;



// setting up the model Schema
// first is the collection name
// second is the structure
var Message = mongoose.model('message',{
	name:String,
	message:String

})



/*
	temp data for working
*/

// var message = [
// 	{name:"tanvir",message:"hi"},
// 	{name:"ornob",message:"Hello"}

// ]


/*
	REQUEST STARTS HERE

*/

app.get('/message',(req,res)=>{
	Message.find({},(err,message)=>{
		res.send(message);	
	});
	
});

app.get('/message/:user',(req,res)=>{
	var user = req.params.user;
	Message.find({name:user},(err,message)=>{
		res.send(message);
	})
})

app.post('/message', async (req,res)=>{
	var mg= new Message(req.body);
	var saved_message =  await mg.save();
	console.log("saved");
	// console.log(mg)
	// console.log(req.body);
	// make a event that a message came 
	// and send the messgae to the client
	// the rest of the code will be used
	// to stre the message in persistant database 
	io.emit('message',req.body);
	// now catch the event with a listener
	// add to the message json
	//message.push(req.body);
	res.sendStatus(200);

});

// adding a event emitter
// give your event a name "connection"
io.on('connection',(event)=>{
	console.log("event emit successfully");
	// now catch the event from the client


});

/*
	static middleware goes here	
	loding all the css and client side js 
*/

app.use(express.static(__dirname));

/*
	SERVER PORTION STARTS HERE
*/


// add the http insted of 
http.listen(port,()=>{
	console.log(`[*] APP IS RUNNING ON PORT ${port}`);

})