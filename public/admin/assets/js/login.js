document.getElementById("loginForm").addEventListener("submit", async function (e) {

    e.preventDefault();

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value.trim();

    const message = document.getElementById("message");
    const loginBtn = document.getElementById("loginBtn");

    message.innerHTML = "";

    loginBtn.disabled = true;
    loginBtn.innerHTML = '<span class="spinner-border spinner-border-sm"></span> Signing In...';

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

        if (!response.ok) {
            throw new Error("Server Error");
        }

        const result = await response.json();

        if (result.status) {

            localStorage.setItem("admin_token", result.token);
            localStorage.setItem("admin_name", result.admin.name);
            localStorage.setItem("admin_email", result.admin.email);

            message.innerHTML =
                `<div class="alert alert-success">${result.message}</div>`;

            setTimeout(() => {
                window.location.href = "https://asd-tech-creation2.vercel.app/admin/index.html";
            }, 1000);

        } else {

            message.innerHTML =
                `<div class="alert alert-danger">${result.message}</div>`;

            loginBtn.disabled = false;
            loginBtn.innerHTML = '<i class="bi bi-box-arrow-in-right"></i> Sign In';

        }

    } catch (error) {

        console.error(error);

        message.innerHTML =
            `<div class="alert alert-danger">Unable to connect to the server.</div>`;

        loginBtn.disabled = false;
        loginBtn.innerHTML = '<i class="bi bi-box-arrow-in-right"></i> Sign In';

    }

});