
let nickname = localStorage.getItem('nickname') || prompt("닉네임을 입력하세요:");
localStorage.setItem('nickname', nickname);

function loadChat(member) {
    fetch(`../data/${member}.json`)
        .then(res => res.json())
        .then(data => {
            const chatContainer = document.getElementById("chat-container");
            chatContainer.innerHTML = "";
            data.messages.forEach(msg => {
                const div = document.createElement("div");
                div.className = "chat";
                div.innerHTML = `<strong>${msg.sender}:</strong> ${msg.text.replace("(name)", nickname)} <span class="time">${msg.time}</span>`;
                chatContainer.appendChild(div);
            });
        });
}

function loadMemories(member) {
    fetch(`data/${member}_memories.json`)
        .then(res => res.json())
        .then(data => {
            const memContainer = document.getElementById("memories-container");
            memContainer.innerHTML = "";
            data.memories.forEach(mem => {
                const cell = document.createElement("div");
                cell.className = "memory";
                if (mem.type === "image") {
                    cell.innerHTML = `<img src="../images/${mem.file}" /><a href="../images/${mem.file}" download>저장</a>`;
                } else if (mem.type === "video") {
                    cell.innerHTML = `<video controls src="../images/${mem.file}"></video><a href="../images/${mem.file}" download>저장</a>`;
                }
                memContainer.appendChild(cell);
            });
        });
}
