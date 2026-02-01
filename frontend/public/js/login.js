console.log("login.js is loaded");

const createdElement = document.createElement("p");
createdElement.textContent = "Created from JS file";
document.body.appendChild(createdElement);

const formHtml = document.getElementById("formID");

formHtml.addEventListener("submit", async function(e) {
    e.preventDefault();

    const userName = docunent.getElementById("userName");
    const passWord = document.getElementById("passWord");


    await fetch("/loginUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, passWord})

    });


})

