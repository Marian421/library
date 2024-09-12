const MyLibrary = [];
const showDialog = document.querySelector(".addBook");
const dialog = document.getElementById("dialog");
const jsCloseButton = document.querySelector("#js-close");
const addUserBook = document.querySelector("#add");
const bookTitle = document.querySelector("#name");
const haveRead = document.querySelector("#haveRead");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const content = document.querySelector(".content");


showDialog.addEventListener("click", () => {
    dialog.showModal();
})

jsCloseButton.addEventListener('click', (e) => {
    e.preventDefault();
    clearInputs();
    dialog.close();
})

addUserBook.addEventListener('click', (e) => {
    e.preventDefault();
    let read = haveRead.checked ? "Read" : "Not read";
    let index = MyLibrary.length;
    MyLibrary.push(new Book(
        bookTitle.value,
        author.value,
        pages.value,
        read,
        index, 
        true
    ))
    addBooksToLibrary();
    showNewBook();
    clearInputs();
    dialog.close();
})

function Book(name, author, numberOfPages, read, index, shown) {
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.index = index;
    this.shown = shown;
    this.info = function() {
        return name + ' ' + author;
    }
}
let book;
function addBooksToLibrary() {
    for (let i = 0; i < MyLibrary.length; i++) {
        book = MyLibrary[i];
        console.log(book);
    }
}
function clearInputs() {
    bookTitle.value = "";
    author.value = "";
    pages.value = "";
    if(haveRead.checked){
        haveRead.checked = false;
    }
}

function showNewBook() {
    let name = MyLibrary[MyLibrary.length - 1].name;
    let author = MyLibrary[MyLibrary.length - 1].author;
    let numberOfPages = MyLibrary[MyLibrary.length - 1].numberOfPages;
    let read = MyLibrary[MyLibrary.length - 1].read;
    let index = MyLibrary.length-1;

    const card = document.createElement('div');
    card.classList.add('card');
    content.appendChild(card);

    const Name = document.createElement('p');
    Name.classList.add('title');
    Name.innerHTML = name;
    card.appendChild(Name);

    const Author = document.createElement('p');
    Author.classList.add('author');
    Author.innerHTML = "Author: " + author;
    card.appendChild(Author);

    const Pages = document.createElement('p');
    Pages.classList.add('pages');
    Pages.innerHTML = "Pages: " + numberOfPages;
    card.appendChild(Pages);

    const Read = document.createElement('p');
    Read.classList.add('read');
    Read.innerHTML = "Status: " + read;
    card.appendChild(Read);

    const deleteBook = document.createElement('button');
    deleteBook.classList.add('deleteBook');
    deleteBook.innerHTML = "Remove";
    card.appendChild(deleteBook);

    deleteBook.addEventListener('click', () => {
        while (card.firstChild){
            card.removeChild(card.lastChild);
        }
        card.parentNode.removeChild(card);
        MyLibrary[index].shown = false;
    })
}



