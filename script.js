const MyLibrary = [];

function Book(name, author, numberOfPages, read) {
    this.name = name;
    this.author = author;
    this.numberOfPages = numberOfPages;
    this.read = read;
    this.info = function() {
        return name + ' ' + author;
    }
}
let book;
function addBooksToLibrary() {
    for (let i = 0; i < MyLibrary.length; i++) {
        book = MyLibrary[i];
        console.log(book.name);
    }
}

let harryPotter = new Book("Harry Potter", "J.K Rowling", "500", true);
MyLibrary.push(harryPotter);
console.log(MyLibrary);

let noLongerHuman = new Book("No Longer Human", "Osamu Dazai", "390", true);
MyLibrary.push(noLongerHuman);

console.log(MyLibrary);
addBooksToLibrary();

