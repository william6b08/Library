const openPopUpWindowbtn = document.getElementById("add-book");
const overlay = document.getElementById("overlay");
const popUpWindow = document.querySelector(".pop-up-window");
const mainBody = document.querySelector(".main-body");

const closeBtn = document.querySelector(".close-button");
const submitBtn = document.getElementById("submit");
const showBookBtn = document.getElementById("showbook")
const functionsForSubmitBtn = [addBookToLibrary, closePopUpWindow];

openPopUpWindowbtn.addEventListener("click", openPopUpWindow);
closeBtn.addEventListener("click", closePopUpWindow);
showBookBtn.addEventListener("click", updateBookShelf);


for (func of functionsForSubmitBtn){
  submitBtn.addEventListener("click", func);
}

class Book{
  constructor(title, author, year,read){
    this.title = title;
    this.author = author;
    this.year = year;
    this.read = read;
  }

}

let book0 = new Book("Testing book1", "Arthur Morgan", 1899, true)

let book1 = new Book("Testing book2", "Jimmy Machill", 1900, false)

let book2 = new Book("Testing book3", "Chuck", 1900, false)
let book3 = new Book("Testing book4", "kim", 1900, false)
let book4 = new Book("Testing book5", "Arthur Morgan", 1899, true)

let book5 = new Book("Testing book6", "Jimmy Machill", 1900, false)
let book6 = new Book("Testing book7", "Chuck", 1900, false)
let book7 = new Book("Testing book8", "kim", 1900, false)
let myLibrary = [book0, book1, book2, book3, book4, book5, book6, book7];


function addBookToLibrary(){
  let bookName;
  let author;
  let year;
  let read;
  const results = document.querySelectorAll("input");
  for (result of results){
    if(result !== null){
      if(result.id === "book-name"){
        bookName = result.value;
      }
  
      else if (result.id === "author"){
        author = result.value;
      }
  
      else if (result.id === "year"){
        year = result.value;
      }
      else if (result.id === "read")
      {
        read = result.checked;
      }
    }
  }
  myLibrary.push(new Book(bookName, author, year, read));
}

function updateBookShelf(){

  const oldBookShelf = document.querySelector(".bookshelf");
  if (oldBookShelf)
  {
    oldBookShelf.remove();
  }

  let bookShelf = document.createElement("div");
  bookShelf.classList.add("bookshelf");

  for (book of myLibrary){
    const bookDiv = document.createElement("div");
    bookDiv.classList.add("book")
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-button");
    removeBtn.id = myLibrary.indexOf(book);
    removeBtn.addEventListener('click', removeBook);
    removeBtn.addEventListener('click', updateBookShelf);

    const readBtn = document.createElement("button");
    readBtn.classList.add("Read")
    for (info in book){
      const contentPara = document.createElement("p");
      const textContent = document.createTextNode(`${info}: ${book[info]}`); 

      contentPara.appendChild(textContent);
      bookDiv.appendChild(contentPara);
      bookDiv.appendChild(removeBtn);
    }
    bookShelf.appendChild(bookDiv);
  }
  mainBody.appendChild(bookShelf);
}

function openPopUpWindow(){
  overlay.classList.add("active");
  popUpWindow.classList.add("active");
}

function closePopUpWindow(){
  overlay.classList.remove("active");
  popUpWindow.classList.remove("active");
}

function removeBook(eventObj){
  myLibrary.splice(eventObj.target.id, 1);
}

