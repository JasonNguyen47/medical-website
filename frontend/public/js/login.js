console.log("login.js is loaded");

const createdElement = document.createElement("p");
createdElement.textContent = "Created from JS file";
document.body.appendChild(createdElement);

const formHtml = document.getElementById("formID");

formHtml.addEventListener("submit", async function (e) {
    e.preventDefault();

    console.log("Sending to Server");
    const userName = document.getElementById("userName").value;
    const passWord = document.getElementById("passWord").value;


    const respone = await fetch("/loginUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ userName, passWord})
    });

    console.log("from formhtml after fetch");
    const loginData = await respone.json();

    if (loginData.success) {
        window.location.href = "/dashboard";
    } else {
        alert(loginData.error);
    }
    


})
