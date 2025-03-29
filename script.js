document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const receiverName = document.querySelector("#reciver");
    const senderName = document.querySelector("#sender");

    // Fetch URL parameters
    const urlParams = new URLSearchParams(location.search);
    const sender = urlParams.get("sender") || "SAMIR"; // Default sender
    const receiver = urlParams.get("reciver") || "Friend"; // Default receiver

    // Update content dynamically
    if (receiverName) receiverName.innerText = receiver;
    if (senderName) senderName.innerText = sender;
});