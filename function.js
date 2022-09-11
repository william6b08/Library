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
showBookBtn.addEventListener("click", showBookInfo);


for (func of functionsForSubmitBtn){
  submitBtn.addEventListener("click", func);
}

let myLibrary = [];

function Book(bookName, author, year){
  this.bookName = bookName;
  this.author = author;
  this.year = year;
}

function addBookToLibrary(){
  let bookName;
  let author;
  let year;
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
    }
  }
  myLibrary.push(new Book(bookName, author, year));
}

function showBookInfo(){

  const oldBookShelf = document.querySelector(".bookshelf");
  if (oldBookShelf)
  {
    oldBookShelf.remove();
  }

  let bookShelf = document.createElement("div");
  bookShelf.classList.add("bookshelf");

  for (book of myLibrary){
    const bookDiv = document.createElement("div");
    for (info in book){
      const contentPara = document.createElement("p")
      const textContent =  document.createTextNode(book[info]);
      contentPara.appendChild(textContent);
      bookDiv.appendChild(contentPara);
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

