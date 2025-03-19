// pre loader

var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  this.setTimeout(function () {
    loader.style.display = "none";
  }, 1800);
});

//booking popup

let popup = document.getElementById("popup");

function openPopup(event) {
  event.preventDefault();
  popup.classList.add("open-popup");
}

function closePopup() {
  popup.classList.remove("open-popup");
}

// hamburger
let menuList = document.getElementById("menuList");
menuList.style.maxHeight = "0px";

function toggleMenu() {
  if (menuList.style.maxHeight == "0px") {
    menuList.style.maxHeight = "300px";
  } else {
    menuList.style.maxHeight = "0px";
  }
}

function toggleChat() {
  let chatContainer = document.getElementById("chat-container");
  chatContainer.style.display =
    chatContainer.style.display === "none" || chatContainer.style.display === ""
      ? "block"
      : "none";
}

function sendMessage() {
  let input = document.getElementById("user-input");
  let message = input.value.trim();
  if (message === "") return;

  addMessage("You", message, "user");
  input.value = "";

  setTimeout(() => {
    let response = getBotResponse(message);
    addMessage("Bot", response, "bot");
  }, 500);
}

let unknownCount = 0;

        function toggleChat() {
            let chatContainer = document.getElementById("chat-container");
            chatContainer.style.display = (chatContainer.style.display === "none" || chatContainer.style.display === "") ? "block" : "none";
        }

        function sendMessage() {
            let input = document.getElementById("user-input");
            let message = input.value.trim();
            if (message === "") return;
            
            addMessage("You", message, "user");
            input.value = "";
            
            setTimeout(() => {
                let response = getBotResponse(message);
                addMessage("Bot", response, "bot");
            }, 500);
        }

        function addMessage(sender, text, className) {
            let chatBox = document.getElementById("chat-box");
            let messageDiv = document.createElement("div");
            messageDiv.className = className;
            messageDiv.innerText = sender + ": " + text;
            chatBox.appendChild(messageDiv);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        function getBotResponse(input) {
            let responses = {
              "hello": "Hi there! How can I help you?",
              "how are you": "I'm just a bot, but I'm doing great!",
              "bye": "Goodbye! Have a great day!",
              "seedhe maut":
                "Seedhe Maut is a hip-hop duo from Delhi, India, consisting of Siddhant Sharma (Calm) and Abhijay Negi (Encore ABJ).",
              "who is seedhe maut":
                "Seedhe Maut is a hip-hop duo from Delhi, India, consisting of Siddhant Sharma (Calm) and Abhijay Negi (Encore ABJ).",
              "what are their albums":
                "Seedhe Maut has released albums like 'Bayaan', 'Nayaab', and mixtape 'न'.",
                "Top album":
                "Seedhe Maut has released albums like 'Bayaan', 'Nayaab', and mixtape 'न'.",
                "albums":
                "Seedhe Maut has released albums like 'Bayaan', 'Nayaab', and mixtape 'न'.",
              "what is their music about":
                "Their music often reflects urban struggles, youth aspirations, and social issues, combining raw storytelling with intricate wordplay.",
              "who produces their music":
                "Many of their tracks are produced by Sez on the Beat and Calm himself.",
              "what is their most popular song":
                "Seedhe Maut has several popular songs, including 'Seedhe Maut Anthem', 'Bayaan', and 'Nayaab'.",
                "song":
                "Seedhe Maut has several popular songs, including 'Seedhe Maut Anthem', 'Bayaan', and 'Nayaab'.",
              "where can i listen to their music":
                "You can listen to Seedhe Maut on platforms like Spotify, Apple Music, and YouTube.",
              "merchandise":
                "You can purchase Seedhe Maut merchandise from their official website or music store pages.",
            };
            
            if (responses[input.toLowerCase()]) {
                unknownCount = 0;
                return responses[input.toLowerCase()];
            } else {
                unknownCount++;
                if (unknownCount === 1) {
                    return "I'm not sure how to respond to that. Try asking about Seedhe Maut's albums, songs, or merchandise!";
                } else {
                    unknownCount = 0;
                    return "I still don't understand. Ask the Seedhe Maut project team members directly as I have limited training";
                }
            }
        }
