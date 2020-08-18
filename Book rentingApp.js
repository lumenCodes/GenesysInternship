let bookstore = [
  { index: 1, title: "title", status: "available" },
  { index: 2, title: "title", status: "rented" },
  { index: 3, title: "title", status: "rented" },
  { index: 4, title: "title", status: "read" },
  { index: 5, title: "title", status: "available" },
  { index: 6, title: "title", status: "rented" },
  { index: 7, title: "title", status: "available" },
  { index: 8, title: "title", status: "available" },
  { index: 9, title: "title", status: "available" },
  { index: 10, title: "title", status: "available" },
  { index: 11, title: "title", status: "rented" }
];

let Book = function () {};

// this prototype is used to add books to the book store
Book.prototype.addBook = (title, status) => {
  let newbook = {
    index: bookstore.length + 1,
    title,
    status
  };
  bookstore.push(newbook);
  console.log(bookstore);
};

// this enables on rent a book
Book.prototype.rentBook = (id, title) => {
  let book = bookstore.find(book => book.index == id && book.title == title);
  if (book.status == "available") {
    book.status = "rented";
    console.log(
      `Book with title ${book.title} and id ${book.index} is been rented`
    );
  } else {
    console.log(`Book with title ${title} and id ${id} is not available`);
  }
};

// this returns all the books that are rented
Book.prototype.rentedBooks = () => {
  let rented = bookstore.filter(books => {
    return books.status == "rented";
  });
  console.log(rented);
};

//this returns available books in the store
Book.prototype.availBooks = () => {
  let available = bookstore.filter(books => {
    return books.status == "available";
  });
  console.log(available);
};

let book = new Book();
book.addBook("obi", "available");
book.availBooks();
book.rentedBooks();
