const bookList = document.querySelector('#book-list');

console.log('the parents node is:', bookList.parentNode); //grabbing the reference of the parent node of bookList
//console.log('the parents element is:', bookList.parentElement); //this will show the same thing
console.log('the parents element is:', bookList.parentElement.parentElement); //finds the parents element of the bookList then finds the parent element of that! 

console.log(bookList.children);