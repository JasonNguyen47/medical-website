console.log("login.js is loaded");


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
        console.log(`Position: ${loginData.position}`);
        switch (loginData.position){
            case "doctor":
                window.location.href = "/DoctorDashBoard";
                break;
            case "nurse":
                window.location.href = "/DoctorDashNurse";
                break;
            default:
                window.location.href = "/dashboard";
        }  
    } else {
        alert(loginData.error);
    }
    
})

const logoutButton = document.getElementById("logoutButton");

logoutButton.addEventListener("click", async function(e) {
    
    const response = await fetch("/logoutUser", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
    })

    const reponseData = await response.json();
    if (reponseData.success) {
        alert("You have been logout");
    } else {
        alert(reponseData.message);
    }
}) 

