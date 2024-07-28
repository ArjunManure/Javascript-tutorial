console.log("This is my first javascript")
user = "arjun";
if (user === "arjun") {
    console.log("success")
}
else {
    console.error("failure")
}

const password = prompt("enter a number");
if (password.length >= 6 && password.indexOf(" ") === -1) {
    console.log("Valid password!!")
}
else {
    console.log("Invalid password")
}

