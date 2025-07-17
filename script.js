
function getNickname() {
    return localStorage.getItem("nickname") || "팬";
}

function setNickname(nick) {
    localStorage.setItem("nickname", nick);
}

function replaceNickname(text) {
    const name = getNickname();
    return text.replaceAll("(name)", name);
}

function loadChatData(member) {
    fetch(`/chat/${member}.json`)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById("chat-container");
            container.innerHTML = "";
            data.forEach(msg => {
                const div = document.createElement("div");
                div.className = "message";
                div.innerText = replaceNickname(msg.text);
                container.appendChild(div);
            });
        });
}
