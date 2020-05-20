const wmf = document.querySelector('#book-list li:nth-child(2).name');
//console.log(wmf);

let books = document.querySelector('#book-list li .name'); //will only return one, usually the first one
//console.log(books);

books = document.querySelectorAll('#book-list li .name'); //this will grab several 
//console.log(books);

Array.from(books).forEach(function(book){
    console.log(book);
})