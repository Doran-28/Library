

const myLibrary = [];
const container = document.querySelector('.container');

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        if (read)
            return `The ${this.title} by ${this.author}, ${this.pages} pages, this book is read`
        else
            return `The ${this.title} by ${this.author}, ${this.pages} pages, this book is not read`;
    }

}

Book.prototype.toggleReadStatus = function() {
    this.read = !this.read;
}

function addBookToLibrary(book) {
    myLibrary.push(book)
}

function displayBooks() {
    container.querySelectorAll('p').forEach(p => p.remove());
    for (let i = 0; i < myLibrary.length; i++){
        book = document.createElement('p');
        book.textContent = myLibrary[i].info();

        remove = document.createElement('button');
        remove.textContent = "Remove book";
        container.appendChild(book);
        book.appendChild(remove);

        readStatus = document.createElement('button');
        readStatus.textContent = "Toggle read status";
        book.appendChild(readStatus);

        remove.addEventListener('click', function() {
            book.remove(); // Remove the book element when the button is clicked
            // Optional: You might also want to remove the book from the `myLibrary` array
            myLibrary.splice(i, 1); // Removes the book from the array
            displayBooks(); // Re-display the updated list of books
        });

        readStatus.addEventListener('click', () =>{
            book.toggleReadStatus();
            display()
        })
    }
}


const addBook = document.querySelector(".container > button");
const modal = document.querySelector(".modal");
addBook.addEventListener('click', () => {
    modal.style.display = 'block';
});

const close = document.querySelector(".close");
close.addEventListener("click", () => {
    modal.style.display = 'none';
});

const submit = document.querySelector('.modal form');
submit.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = document.getElementById('title');
    const author = document.getElementById('author');
    const pages = document.getElementById('pages');
    const read = document.getElementById('read');
    addBookToLibrary(new Book(title.value, author.value, pages.value, read.checked));
    displayBooks();
});