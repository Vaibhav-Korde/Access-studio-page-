console.log("Access Studio Loaded");

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".access-navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});