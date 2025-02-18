/* script.js */
document.addEventListener("DOMContentLoaded", function() {
    const stars = document.querySelectorAll(".star");
    let selectedRating = localStorage.getItem("selectedRating");

    stars.forEach((star, index) => {
        star.addEventListener("mouseover", function() {
            highlightStars(index);
        });

        star.addEventListener("mouseout", function() {
            resetStars();
        });

        star.addEventListener("click", function() {
            setRating(index);
        });
    });

    function highlightStars(index) {
        stars.forEach((star, i) => {
            star.style.color = i <= index ? "gold" : "gray";
        });
    }

    function resetStars() {
        stars.forEach((star, i) => {
            if (!star.classList.contains("selected")) {
                star.style.color = "gray";
            }
        });
    }

    function setRating(index) {
        stars.forEach((star, i) => {
            star.classList.remove("selected");
            star.style.color = i <= index ? "gold" : "gray";
        });

        stars[index].classList.add("selected");
        localStorage.setItem("selectedRating", index);
    }

    // Restore the rating from localStorage
    if (selectedRating !== null) {
        setRating(parseInt(selectedRating));
    }

    // Menu Animation
    const menu = document.getElementById("menu");
    menu.addEventListener("mouseover", function() {
        menu.style.backgroundColor = "#444";
    });
    menu.addEventListener("mouseout", function() {
        menu.style.backgroundColor = "#333";
    });
});