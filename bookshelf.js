let myLibrary = [];

function Book(title, author, pages, isRead) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// Set Book prototype
Book.prototype.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages}, ${this.isRead}`);
}

function addBookToLibrary() {
    // Add initial books
    myLibrary.push(thehobbit, nineteen_eightyfour, war_and_peace);
}

function showLibrary() {
    myLibrary.forEach(function(i, index) {
        const card = document.createElement("div");
        card.classList.add("card");
        // card.setAttribute("data-index", index)
        // console.log(card["data-index"])
        card.dataset.test = index;

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

function hideAddBookForm() {
    form.style.display = "none";
}

function showAddBookForm() {
    form.style.display = "block";
}

function addNewBook() {
    const new_book = new Book(new_book_title.value, new_book_author.value, new_book_pages.value, new_book_read.value);
    myLibrary.push(new_book);

    // Erase old library display
    card_container.innerHTML = "";

    // Show new library
    showLibrary();

    // Reset and close form
    form.reset();
    hideAddBookForm();
}

// Book.prototype.toggleRead = function() {
//     if (isRead == false)
//         isRead == true
//     else
//         isRead == false
// }

const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "have read");
const nineteen_eightyfour = new Book("1984", "George Orwell", 328, "have read");
const war_and_peace = new Book("War and Peace", "Leo Tolstoy", 1296, "haven't read yet");

const card_container = document.querySelector(".card-container");
const form = document.querySelector(".new-book-form")
const new_book_btn = document.querySelector("#new-book-btn");
new_book_btn.addEventListener("click", showAddBookForm);
const cancel_book_btn = document.querySelector("#cancel-book-btn");
cancel_book_btn.addEventListener("click", hideAddBookForm);
const add_book_btn = document.querySelector("#add-book-btn");
add_book_btn.addEventListener("click", addNewBook);
const have_read_label = document.querySelector("dt")


hideAddBookForm();
addBookToLibrary();
// console.log(thehobbit.info())
// console.log(myLibrary[0]);
showLibrary();

// Add new book form
const new_book_title = document.querySelector("#new-book-title");
const new_book_author = document.querySelector("#new-book-author");
const new_book_pages = document.querySelector("#new-book-pages");
const new_book_read = document.querySelector("#new-book-read");
new_book_read.addEventListener("click", () => {
    if (new_book_read.checked == false) { 
        new_book_read.value = "haven't read yet";
        have_read_label.innerHTML = "Haven't Read Yet";
    } else { 
        new_book_read.value = "have read";
        have_read_label.innerHTML = "Have Read";
    }
});

// Set new_book_read value
new_book_read.value = "have read";
have_read_label.innerHTML = "Have Read";



