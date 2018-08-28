const path = require('path')
//We are bringing and storing path as a tool that is creating a path to our file

const socket = require('socket.io')
//We are creating a variable and creating a socket tool called socket

const express = require('express')

//We are bringing in and storing express as a tool

const app = express()
//We are calling express and assigning it to the variable called app

app.use(express.static('client'))
//app is an object and it has a property called use which is a function
//Inside as a paramenter to the use function, we input our client folder

app.get('/', function(req,response){
	response.sendFile(path.join(__dirname,'/client/index.html'))
})


//when the client requests the main website, the app AKA express
//engine will send back a response as the main index.html file.



const server = app.listen(4000)
//Establishing a variable called server assigned to creating a server listening on a port

const io = socket(server)
//Establishing a variable called io assigned to creating a socket

io.on('connection', function(channel){
	channel.on('mdChat', function(data){
		io.sockets.emit('mdChat', data)
	})
})
//When the socket receives a connection, create a channel called mdChat then send messages to and from the mdChat channel 

console.log ('You are listening in on port 4000')

//Storing a variable called server which is assigned to listen in on PORT # 4000
//If it is listening a message will appear telling is everything is good.
