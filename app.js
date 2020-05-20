let titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles)); //will return false if not an array true if it is
// console.log(Array.isArray(Array.from(titles))); //we want to make an array from titles collection which will then trigger the isArray method to be true 

Array.from(titles).forEach(function(item){ //array from titles turns it into array 
    console.log(item);
})