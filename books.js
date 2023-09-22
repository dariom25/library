const myLibrary = []
const modal = document.querySelector("dialog");


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
        readIcon.textContent = "check_circle_outline";
        readBtn.appendChild(readIcon);
        bookContainer.appendChild(readBtn);

        const removeBtn = document.createElement("button"); //hier muss removeBook funtion hinzugefügt werden
        removeBtn.setAttribute("class", "remove");
        const removeIcon = document.createElement("i");
        removeIcon.setAttribute("class", "material-icons");
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

const addBookToLibrary = document.querySelector(".add-book");
addBookToLibrary.addEventListener("click", () => { //die funktion wird beim klicken des buttons immer zu Ende ausgeführt
    modal.showModal();
})

const closeModalBtn = document.querySelector(".close-button");
closeModalBtn.addEventListener("click", () => {
    modal.close();
})

const submitBtn = document.querySelector(".submit")
submitBtn.addEventListener("click", (event) => { //wird hier zu viel auf einmal gemacht in der funktion? aufteilen?
    const title = document.querySelector("#title-of-book");
    const author = document.querySelector("#name-of-author");
    const pages = document.querySelector("#no-of-pages")
    const read = document.querySelector("#read-the-book") // hier muss ich nochmal gucken, wie ich den value vernünftig kriege

    const newBook = new Book(title.value, author.value, pages.value, read.value);
    myLibrary.push(newBook);

    event.preventDefault();
    modal.close();
    displayBook();
});

//funktion erstellen, die die daten aufnimmt und ins array packt. 
//eventuell nochmal die einzelnen funktionen und calls überarbeiten
//closeModal() funktion erstellen