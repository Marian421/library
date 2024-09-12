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
    let read = haveRead.checked ? "read" : "unread";
    let index = MyLibrary.length;
    MyLibrary.push(new Book(
        bookTitle.value,
        author.value,
        pages.value,
        read,
        index
    ))
    addBooksToLibrary();
    showNewBook();
    clearInputs();
    dialog.close();
})

function Book(name, author, numberOfPages, read, index) {
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.index = index;
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
    let author = MyLibrary[MyLibrary.length - 1].name;
    let numberOfPages = MyLibrary[MyLibrary.length - 1].numberOfPages;
    let read = MyLibrary[MyLibrary.length - 1].read;
    const card = document.createElement('div');
    card.classList.add('card');
    content.appendChild(card);
}



