let myLibrary = [];

class Book {
    constructor(title, author, pages, isRead) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;
        // isRead = false;
    }
}

Book.prototype.info = function() {
    return(`${this.title} by ${this.author}, ${this.pages}, ${this.isRead}`);
}

// Book.prototype.toggleRead = function() {
//     const read_btn = document.querySelector(".read")
//     read_btn.addEventListener("click", () => {
//         if (isRead == "haven't read yet")
//             isRead = "have read"
//         else
//             isRead = "haven't read yet"
//     })
// }

const thehobbit = new Book("The Hobbit", "J.R.R. Tolkien", 295, "Read");
const nineteen_eightyfour = new Book("1984", "George Orwell", 328, "Read");
const war_and_peace = new Book("War and Peace", "Leo Tolstoy", 1296, "Not Read");

function showDefaultBooks() {
    // Add initial books
    myLibrary.push(thehobbit, nineteen_eightyfour, war_and_peace);
}

function showLibrary() {
    myLibrary.forEach(function(i, index) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.indexNum = index;

        const innerCard = document.createElement("div");
        innerCard.classList.add("inner-card");

        const title = document.createElement("div");
        title.classList.add("title");
        
        const author = document.createElement("div");
        author.classList.add("author");
        
        const pages = document.createElement("div");
        pages.classList.add("pages");
        
        const bookBtns = document.createElement("div");
        bookBtns.classList.add("book-btns");

        const read = document.createElement("button");
        read.classList.add("read");
        read.addEventListener("click", () => {
            // Change button HTML and myLibrary array
            if (read.innerHTML == "Not Read") { 
                read.innerHTML = "Read";
                myLibrary[index].isRead = "Read"
            } else { 
                read.innerHTML = "Not Read"
                myLibrary[index].isRead = "Not Read"
            }
        });
        
        const deleteBookBtn = document.createElement("button");
        deleteBookBtn.classList.add("delete-book-btn");
        deleteBookBtn.innerHTML = "Remove Book";
        deleteBookBtn.addEventListener("click", () => {
            // Delete book
            let book_index = card.dataset.indexNum;
            if (book_index == 0) {
                myLibrary = myLibrary.slice(1);
            } else {
                myLibrary.splice(book_index, 1);
            }
            // Erase old library display
            card_container.innerHTML = "";

            // Show new library
            showLibrary();
        });
        bookBtns.append(read, deleteBookBtn);
        innerCard.append(title, author, pages, bookBtns);
        card.appendChild(innerCard);
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
    document.querySelector("#new-book-title").focus();

    new_book_read.addEventListener("click", () => {
        if (new_book_read.checked == false) { 
            new_book_read.value = "Not Read";
            have_read_label.innerHTML = "Not Read";
        } else { 
            new_book_read.value = "Read";
            have_read_label.innerHTML = "Read";
        }
    });
    
    // Set new_book_read value
    new_book_read.value = "Not Read";
    have_read_label.innerHTML = "Not Read";
}

function addNewBook(e) {
    e.preventDefault();
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

const card_container = document.querySelector(".card-container");
const form = document.querySelector(".new-book-form")
const new_book_btn = document.querySelector("#new-book-btn");
new_book_btn.addEventListener("click", showAddBookForm);
const cancel_book_btn = document.querySelector("#cancel-book-btn");
cancel_book_btn.addEventListener("click", hideAddBookForm);
const add_book_btn = document.querySelector("#add-book-btn");
//add_book_btn.addEventListener("submit", addNewBook);
form.onsubmit = addNewBook.bind(form);
const have_read_label = document.querySelector("dt")

function initialSetup() {
    hideAddBookForm();
    showDefaultBooks();
    // console.log(thehobbit.info())
    // console.log(myLibrary[0]);
    showLibrary();
}

initialSetup();


// Add new book form
const new_book_title = document.querySelector("#new-book-title");
const new_book_author = document.querySelector("#new-book-author");
const new_book_pages = document.querySelector("#new-book-pages");
const new_book_read = document.querySelector("#new-book-read");


