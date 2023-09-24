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

        const readBtn = document.createElement("button");
        readBtn.setAttribute("class", "read");
        const readIcon = document.createElement("i");
        readIcon.setAttribute("class", "material-icons");
        readIcon.setAttribute("id", "read-icon");
        readIcon.textContent = "check_circle_outline";

        changeColorBasedOnCheckbox(book, readIcon); //colors of all book are changing to their original color --> status von checkbox wird nicht geändert, aber jedes mal abgefragt 

        readBtn.appendChild(readIcon);
        bookContainer.appendChild(readBtn);

        //eventlistener to change color of read status
        readBtn.addEventListener("click", () => {
            let color = window.getComputedStyle(readIcon).getPropertyValue("color");
            let green = "rgb(0, 128, 0)";
            let red = "rgb(255, 0, 0)";
            if (color === green) {
                changeColor("red", readIcon);
                book.read = false
            } else if (color === red) {
                changeColor("green", readIcon);
                book.read = true
            }
        });

        const removeBtn = document.createElement("button");
        removeBtn.setAttribute("class", "remove");
        const removeIcon = document.createElement("i");
        removeIcon.setAttribute("class", "material-icons");
        removeIcon.setAttribute("id", "remove-icon");
        removeIcon.textContent = "highlight_off";
        removeBtn.appendChild(removeIcon);
        bookContainer.appendChild(removeBtn);

        //eventlistener to delete a book from the library
        removeBtn.addEventListener("click", () => {
            deleteBookFromLibrary()
        })
    });
}

function removeAllBooks() {
    const allBooks = document.querySelector(".main-content");
    while (allBooks.firstChild) {
        allBooks.removeChild(allBooks.firstChild);
    }
}

function changeColor(color, icon) {
    icon.style.color = color;
}

function changeColorBasedOnCheckbox(book, icon) {
    if (book.read === true) {
        changeColor("green", icon);
    } else {
        changeColor("red", icon);
    }
}

function deleteBookFromLibrary() {
    const indexOfBook = 0;
    alert("book deleted")
}

openModal.addEventListener("click", () => {
    modal.setAttribute("class", "modal");
    modal.showModal();
})

closeModalBtn.addEventListener("click", () => {
    modal.removeAttribute("class");
    modal.close();
})

//eventlisteners and buttons




submitBtn.addEventListener("click", (event) => {
    // "get" the user input
    const title = document.querySelector("#title-of-book");
    const author = document.querySelector("#name-of-author");
    const pages = document.querySelector("#no-of-pages");
    const read = document.querySelector("#read-the-book"); // hier muss ich nochmal gucken, wie ich den value vernünftig kriege

    //create new book object and push it into array
    const newBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(newBook);

    event.preventDefault();
    modal.close();
    modal.removeAttribute("class")
    displayBook();
});

//eventuell nochmal die einzelnen funktionen und calls überarbeiten
