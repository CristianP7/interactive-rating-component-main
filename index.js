const card = document.querySelector(".card")
const rate = document.querySelector(".rate")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    rate.classList.remove("hidden")
    card.style.display = "none"
})

