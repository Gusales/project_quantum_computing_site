const filterTexts = document.querySelectorAll(".filter-texts button");
const filterableTexts = document.querySelectorAll(".filterable-texts .card");

const filterTextCards = (c) => {
    document.querySelector(".filter-texts .active").classList.remove("active");
    c.target.classList.add("active");

    filterableTexts.forEach(card => {
        if(card.dataset.name === c.target.dataset.filter ) {
            return card.classList.replace("fcard-hide", "fcard-show");
        }
        card.classList.add("fcard-hide");
    });
}

filterTexts.forEach(button => button.addEventListener("click", filterTextCards));