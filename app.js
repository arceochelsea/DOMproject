document.addEventListener('DOMContentLoaded', function (){

//interacting with forms
const list = document.querySelector('#show-list ul');

//delete shows
list.addEventListener('click',function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//add show-list

const addForm = document.forms['add-show'];

addForm.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;

    //create elements
    const li = document.createElement('li');
    const showName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    //add content
    deleteBtn.textContent = 'delete';
    showName.textContent = value;

    //add classes
    showName.classList.add('name');
    deleteBtn.classList.add('delete');

    //append to DOM
    li.appendChild(showName); //this is how to we add to DOM, appending adds to the end
    li.appendChild(deleteBtn); //order matters, if switched delete button will go first and thats not what we want!
    list.appendChild(li);


});

//hide shows

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
        list.style.display = 'none';
    } else {
        list.style.display = 'initial';
    }
});

//filter shows

const searchBar = document.forms['search-shows'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const shows = list.getElementsByTagName('li');
    Array.from(shows).forEach(function(show){
        const title = show.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) != -1){
            show.style.display = 'block';
        } else {
            show.style.display = 'none';
        }
    })
});

// tabbed content

const tabs = document.querySelector('.tabs');
const panels = document.querySelectorAll('.panel');
tabs.addEventListener('click',function(e){
    if(e.target.tagName == 'LI'){
        const targetPanel = document.querySelector(e.target.dataset.target);
        panels.forEach(function(panel){
            if(panel == targetPanel){
                panel.classList.add('active');
            } else {
                panel.classList.remove('active');
            }
        })
    }
})

})

