function sendMessage() {

    const messageInput = document.getElementById("message");

    const chatBox = document.getElementById("chat-box");

    const message = messageInput.value;

    if (message.trim() !== "") {

        const messageDiv = document.createElement("div");

        messageDiv.textContent = message;

        messageDiv.style.margin = "10px 0";

        messageDiv.style.padding = "10px";

        messageDiv.style.background = "#f1f1f1";

        messageDiv.style.borderRadius = "5px";

        chatBox.appendChild(messageDiv);

        messageInput.value = "";

        chatBox.scrollTop = chatBox.scrollHeight;
    }
}
