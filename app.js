//Focusing on Events 

var btns = document.querySelectorAll('#book-list.delete');

Array.from(btns).forEach(function(btn){
    btn.addEventListener('click',function(e){
   
   const li = e.target.parentElement;
   li.parentNode.removeChild(li) //getting the parent node from li (ul) then from this ul i want to remove a child 

    });
});

const link = document.querySelector('#page-banner a');

link.addEventListener('click',function(e){
    e.preventDefault();
    console.log('navigation to',e.target.textContent,' was prevented');
})