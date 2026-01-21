// Page load hone par message
window.onload = function () {
    console.log("Script.js loaded successfully");
    showTime();
};

// Button click par name change
function changeName() {
    document.getElementById("name").innerText = "Welcome Lokesh 🚀";
}

// Current time show karne ke liye
function showTime() {
    const timeElement = document.getElementById("time");
    if (!timeElement) return;

    setInterval(() => {
        const now = new Date();
        timeElement.innerText = now.toLocaleTimeString();
    }, 1000);
}

// Simple alert
function showAlert() {
    alert("Hello Lokesh! JavaScript is working ✅");
}
