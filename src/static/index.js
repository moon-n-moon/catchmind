const socket = io("/");

socket.on("hello", () => console.log("Somebody said Hello"));

socket.emit("helloGuys");

function handleMessageNoti(data) {
  const { message } = data;
  console.log(`some${message}`);
}

socket.on("messageNoti", handleMessageNoti);

function sendMessage(message) {
  socket.emit("newMessage", { message });
}

function setNickname(nickname) {
  socket.emit("setNickname", { nickname });
}
