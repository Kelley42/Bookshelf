let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

Book.prototype.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages}, ${this.isRead}`);
}

// Book.prototype.toggleRead = function() {
//     if (isRead == false)
//         isRead == true
//     else
//         isRead == false
// }

function addBookToLibrary() {
    myLibrary.push(thehobbit, nineteen_eightyfour, war_and_peace);
}



function showLibrary() {
    myLibrary.forEach(i => {
        const card = document.createElement("div");
        card.classList.add("card");

        const title = document.createElement("div");
        title.classList.add("title");
        card.appendChild(title);
        const author = document.createElement("div");
        author.classList.add("author");
        card.appendChild(author);
        const pages = document.createElement("div");
        pages.classList.add("pages");
        card.appendChild(pages);
        const read = document.createElement("div");
        read.classList.add("read");
        card.appendChild(read);

        card_container.appendChild(card);

        title.innerHTML = i["title"];
        author.innerHTML = i["author"];
        pages.innerHTML = i["pages"];
        read.innerHTML = i["isRead"];
    })
}

// function addBookForm() {
//     const new_book = document.createElement("div");
//     new_book.classList.add("new-book");

//     const new_book_heading = document.createElement("h2");
//     new_book_heading.classList.add("new-book-heading");
//     new_book_heading.innerHTML = "New Book";
//     new_book.appendChild(new_book_heading);
//     const new_book_title = document.createElement("div");
//     new_book_title.classList.add("new-book-title");
//     new_book.appendChild(new_book_title);
//     const new_book_author = document.createElement("div");
//     new_book_author.classList.add("new-book-author");
//     new_book.appendChild(new_book_author);
//     const new_book_pages = document.createElement("div");
//     new_book_pages.classList.add("new-book-pages");
//     new_book.appendChild(new_book_pages);
//     const new_book_read = document.createElement("div");
//     new_book_read.classList.add("new-book-read");
//     new_book.appendChild(new_book_read);

//     form.appendChild(new_book);
// }

function showAddBookForm() {

}


const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "have read");
const nineteen_eightyfour = new Book("1984", "George Orwell", 328, "have read");
const war_and_peace = new Book("War and Peace", "Leo Tolstoy", 1296, "haven't read yet");

const card_container = document.querySelector(".card-container");
const form = document.querySelector(".new-book-form")
const add_book_btn = document.querySelector("#new-book-btn");
add_book_btn.addEventListener("click", showAddBookForm);

addBookToLibrary();
// console.log(thehobbit.info())
// console.log(myLibrary[0]);
showLibrary();
