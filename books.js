const myLibrary = []
const modal = document.querySelector("dialog");
const openModal = document.querySelector(".add-book");
const closeModalBtn = document.querySelector(".close-button");
const submitBtn = document.querySelector(".submit");


function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function displayBook() { 
    removeAllBooks();
    myLibrary.forEach((book) => {
        const mainContent = document.querySelector(".main-content")
        const bookContainer = document.createElement("div");
        bookContainer.setAttribute("class", "book");
        mainContent.appendChild(bookContainer);

        const title = document.createElement("p");
        title.setAttribute("class", "title");
        title.textContent = "Title: " + book.title
        bookContainer.appendChild(title);

        const author = document.createElement("p");
        author.setAttribute("class", "author");
        author.textContent = "Author: " + book.author;
        bookContainer.appendChild(author);

        const pages = document.createElement("p");
        pages.setAttribute("class", "pages");
        pages.textContent = "No. of pages: " + book.pages;
        bookContainer.appendChild(pages);

        const readBtn = document.createElement("button"); //hier muss noch die changeColor Function hinzugefügt werden
        readBtn.setAttribute("class", "read");
        const readIcon = document.createElement("i");
        readIcon.setAttribute("class", "material-icons");
        readIcon.setAttribute("id", "read-icon");
        readIcon.textContent = "check_circle_outline";
        readBtn.appendChild(readIcon);
        bookContainer.appendChild(readBtn);

        const removeBtn = document.createElement("button"); //hier muss removeBook funtion hinzugefügt werden
        removeBtn.setAttribute("class", "remove");
        const removeIcon = document.createElement("i");
        removeIcon.setAttribute("class", "material-icons");
        removeIcon.setAttribute("id", "remove-icon");
        removeIcon.textContent = "highlight_off";
        removeBtn.appendChild(removeIcon);
        bookContainer.appendChild(removeBtn);
    });
}

function removeAllBooks() {
    const allBooks = document.querySelector(".main-content");
    while (allBooks.firstChild) {
        allBooks.removeChild(allBooks.firstChild);
    }
}

function changeColor(color) {
    const readIcon = document.querySelector("#read-icon")
    if (readIcon.hasAttribute("color", color) === false) {
        readIcon.style.color = color;
    }
}

function changeColorBasedOnCheckbox(checkbox) {
    if (checkbox.checked === true) {
        changeColor("green");
    } else {
        changeColor("red");
    }
}







openModal.addEventListener("click", () => {
    modal.setAttribute("class", "modal")
    modal.showModal();
})

closeModalBtn.addEventListener("click", () => {
    modal.removeAttribute("class")
    modal.close();
})

submitBtn.addEventListener("click", (event) => {
    // "get" the user input
    const title = document.querySelector("#title-of-book");
    const author = document.querySelector("#name-of-author");
    const pages = document.querySelector("#no-of-pages");
    const read = document.querySelector("#read-the-book"); // hier muss ich nochmal gucken, wie ich den value vernünftig kriege

    //create new book object and push it into array
    const newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);

    event.preventDefault();
    modal.close();
    modal.removeAttribute("class")
    displayBook();
});

//eventuell nochmal die einzelnen funktionen und calls überarbeiten
