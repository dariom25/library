const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBookToLibrary() {
    const book = new Book("Test", "Test Mustertest", "300", true);
    myLibrary.push(book);
}

function displayBook() {

}

function changeColor() {
    
}