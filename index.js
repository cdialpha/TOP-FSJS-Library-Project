
catalog = [];
let isPopup = false;
const form = document.getElementById('addBook');
const cardsArea = document.getElementById('cards-area');

let displayPopup = document.querySelector('#new-book-popup-screen');
console.log(displayPopup);

form.addEventListener("submit",handleSend);

function handleSend(ev) {
    ev.preventDefault();
    const formData = new FormData(form);
    const values = [...formData.entries()];
    catalog.push([...values]);
    console.log(values);
    togglePopup();
    form.reset();
    generateItem(values);
}

function generateItem(bookData) {
    let newCard = document.createElement("div");
    newCard.classList.add("new-card");
    cardsArea.append(newCard);
    
    let title = document.createElement("span");
    title.classList.add("card-title");
    title.innerText = bookData[1];

    let author = document.createElement("span");
    author.classList.add("card-author");
    author.innerText = bookData[2];

    let pages = document.createElement("pages");
    pages.classList.add("card-pages");
    pages.innerText = bookData[3];

    newCard.append(title, author, pages);
    }

let addBookButton = document.getElementById("add-book-button");
addBookButton.addEventListener("click",togglePopup);

let exit = document.getElementById("exit");
exit.addEventListener("click", togglePopup);

function togglePopup() {     
    if (!isPopup) {
        displayPopup.classList.add("no-show");
        return isPopup = true};
    if (isPopup) {displayPopup.classList.remove("no-show")
        return isPopup = false} 
} 







