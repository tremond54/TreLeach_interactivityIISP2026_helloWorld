const cards = document.querySelectorAll(".card");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalText = document.getElementById("modal-text");
const closeBtn = document.getElementById("close");

cards.forEach(card => {
    card.addEventListener("click", () => {

        modalTitle.textContent = card.dataset.title;
        modalText.textContent = card.dataset.description;

        modal.style.display = "block";
    });
});

closeBtn.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (e) => {
    if (e.target === modal) {
        modal.style.display = "none";
    }
};