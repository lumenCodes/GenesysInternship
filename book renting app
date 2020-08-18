function Book (index, title,status){
    this.index = index;
    this.title = title;
    this.status = status;
}
let det = new Book (1,'hello ada','borrowed')
let bookStore = [
    {index:1, title: 'jewnrjenr', status: 'available'},
    {index:2, title: 'jewnrjenr', status: 'available'},
    {index:3, title: 'jewnrjenr', status: 'available'},
    {index:4, title: 'jewnrjenr', status: 'available'},
    {index:5, title: 'jewnrjenr', status: 'rented'},
    {index:6, title: 'jewnrjenr', status: 'available'},
    {index:7, title: 'jewnrjenr', status: 'available'},
    {index:8, title: 'jewnrjenr', status: 'rented'},
    {index:9, title: 'jewnrjenr', status: 'available'},
];   //an array to store the book

const numberOfBooks = bookStore.length
console.log('The number of books in the store is ' + numberOfBooks)

bookStore.forEach(Book => {
    console.log(Book)
});
function availableBooksList(){ 
  let availablebooks= bookStore.filter(
    function (books) {
       return books.status === 'available';
    });
    console.log(availablebooks)
    }

availableBooksList()

//to list rented books
function rentedBooksList(){
  let rentedBooks = bookStore.filter(
    function(books){
      return books.status === 'rented';
          }
    );
    console.log(rentedBooks)
}
rentedBooksList()

// to add books to the store.
function addNewBook (){
  bookStore.push({
    index: 10, 
    title:'mmqqwed',
    status:'rented',
  })
  return bookStore
 
};
addNewBook()
// to update the array
function render(){
  rentedBooksList()
  availableBooksList()
  addNewBook()
  return bookStore
  console.log(numberOfBooks)
  }
  render()
