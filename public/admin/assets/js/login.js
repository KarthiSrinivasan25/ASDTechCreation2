document.getElementById("loginForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    try {

        const response = await fetch("https://karthikeyanportfolio.helioho.st/api/login.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        });

        const result = await response.json();

        if (result.status) {

            // Save token
            localStorage.setItem("admin_token", result.token);

            // Save admin details (optional)
            localStorage.setItem("admin_name", result.admin.name);
            localStorage.setItem("admin_email", result.admin.email);

            alert(result.message);

            window.location.href = "../../index.html";

        } else {

            alert(result.message);

        }

    } catch (error) {

        console.error(error);
        alert("Unable to connect to the server.");

    }

});