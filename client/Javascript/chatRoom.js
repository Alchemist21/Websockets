const socket = io.connect('http://localhost:4000')

const messageBox = document.getElementById('messageContent')
const sendButton = document.getElementById('sendButton')
const messages = document.getElementById('messages')



//Events in JS

sendButton.addEventListener('click',function() {
	
	socket.emit('mdChat', {
		title:messageBox.value,
		timeStamp:new Date(),
		userName:'Louell Sala'
	})
		
})

socket.on('mdChat', function(data) {
	messages.innerHTML += `<div>${data.title} - ${data.timeStamp} - ${data.userName}</div>` 

})


//console.log(messageBox.value)