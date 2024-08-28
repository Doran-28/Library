

const myLibrary = [];
const container = document.querySelector('.container');

function Book(title, author, pages, read=false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `The ${this.title} by ${this.author}, ${this.pages} pages, read status: ${read}`
    }
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    for (let i = 0; i < myLibrary.length; i++){
        book = document.createElement('p');
        book.textContent = myLibrary[i].info();
        container.appendChild(book);
    }
}


addBookToLibrary(new Book("title1", "author", 100, false));
addBookToLibrary(new Book("title1", "author", 100, false));
addBookToLibrary(new Book("title1", "author", 100, false));
addBookToLibrary(new Book("title1", "author", 100, false));
displayBooks()


const addBook = document.querySelector(".container > button");
const modal = document.querySelector(".modal");
addBook.addEventListener('click', () => {
    modal.style.display = 'block';
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
    modal.style.display = 'none';
});