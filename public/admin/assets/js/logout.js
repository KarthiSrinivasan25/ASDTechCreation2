async function logout() {

    const token = localStorage.getItem("admin_token");

    try {

        await fetch("https://karthikeyanportfolio.helioho.st/api/logout.php", {

            method: "POST",

            headers: {
                "Authorization": "Bearer " + token
            }

        });

    } catch (e) {
        console.log(e);
    }

    // Clear browser storage
    localStorage.removeItem("admin_token");
    localStorage.removeItem("admin_name");
    localStorage.removeItem("admin_email");

    // Redirect
    window.location.href = "https://asd-tech-creation2.vercel.app/admin/login.html";
}