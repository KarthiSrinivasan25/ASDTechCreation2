(async function () {

    const token = localStorage.getItem("admin_token");

    // No token -> Login
    if (!token) {
        window.location.href = "https://asd-tech-creation2.vercel.app/admin/login.html";
        return;
    }

    try {

        const response = await fetch("https://karthikeyanportfolio.helioho.st/api/verify.php", {

            method: "POST",

            headers: {
                "Authorization": "Bearer " + token,
                "Content-Type": "application/json"
            }

        });

        const result = await response.json();

        if (!result.status) {

            localStorage.removeItem("admin_token");
            localStorage.removeItem("admin_name");
            localStorage.removeItem("admin_email");

            window.location.href = "https://asd-tech-creation2.vercel.app/admin/login.html";
            return;

        }

        // Show admin name (optional)
        const adminName = document.getElementById("adminName");

        if (adminName) {
            adminName.innerHTML = result.admin.name;
        }

    } catch (e) {

        console.log(e);

        localStorage.clear();

        window.location.href = "https://asd-tech-creation2.vercel.app/admin/index.html";

    }

})();