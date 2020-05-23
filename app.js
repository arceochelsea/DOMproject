//interacting with forms
const list = document.querySelector('#book-list ul');

//delete books
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add book-list

const addForm = document.forms['add-book'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const bookName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM
    li.appendChild(bookName); //this is how to we add to DOM, appending adds to the end
    li.appendChild(deleteBtn); //order matters, if switched delete button will go first and thats not what we want!
    list.appendChild(li);


});

//Tutorial 14

//Attributes 

//in this tutorial netninja reviewed different ways to manipulate attributes on the DOM 
//book.getAttribute('element') will get
//book.setAttribute('element', 'whateverYouWantToChangeItTo') will change
//book.hasAttribute('element') checking to see if it has; it will return true or false
//book.removeAttribute('element') will remove

//no changes to js file during this time