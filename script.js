document.getElementById('send-button').addEventListener('click', sendMessage);
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

function sendMessage() {
    const userInput = document.getElementById('user-input');
    const message = userInput.value.trim();
    
    if (message) {
        addMessage(message, 'user');
        userInput.value = '';
        botReply(message);
    }
}

function addMessage(text, sender) {
    const chatBody = document.getElementById('chat-body');
    const messageContainer = document.createElement('div');
    messageContainer.classList.add(sender === 'user' ? 'user-message' : 'bot-message');

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.innerText = text;

    messageContainer.appendChild(messageContent);
    chatBody.appendChild(messageContainer);
    chatBody.scrollTop = chatBody.scrollHeight;
}

function botReply(message) {
    let reply = 'Desculpe, não entendi sua pergunta.';

    if (message.toLowerCase().includes('olá') || message.toLowerCase().includes('oi')) {
        reply = 'Olá! Como posso ajudar você?';
    } else if (message.toLowerCase().includes('nome')) {
        reply = 'Eu sou um chatbot, criado para ajudar você!';
    } else if (message.toLowerCase().includes('adeus')) {
        reply = 'Até mais! Tenha um ótimo dia!';
    }

    setTimeout(() => {
        addMessage(reply, 'bot');
    }, 1000);
}
