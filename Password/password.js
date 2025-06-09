const ranPassword = document.getElementById("password");
const length = 18;

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const num = "0123456789";
const symbol = "!@#$%^&*()_+={[}]|\<>/";

const allchars = upper + lower + num + symbol;

function randomPassword(){
    let password = "";
    password += upper[Math.floor(Math.random() * upper.length)];
    password += lower[Math.floor(Math.random() * lower.length)];
    password += num[Math.floor(Math.random() * num.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > password.length){
        password += allchars[Math.floor(Math.random() * allchars.length)];
    }
    ranPassword.value = password;
}

async function copyPassword() {
    if (!ranPassword.value) {  // Check if input is empty
        const message = document.getElementById("copy-message");
        message.textContent = "No password to copy!";
        message.style.opacity = "1";

        setTimeout(() => {
            message.style.opacity = "0";
        }, 2000);
        return;
    }
    try {
        await navigator.clipboard.writeText(ranPassword.value);

        // Show the message
        const message = document.getElementById("copy-message");
        message.textContent = "Password Copied!";
        message.style.opacity = "1";

        // Hide the message after 2 seconds
        setTimeout(() => {
            message.style.opacity = "0";
        }, 2000);
        
    } catch (err) {
        console.error("Failed to copy: ", err);
    }
}
