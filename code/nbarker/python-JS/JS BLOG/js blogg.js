//the CSS and HTML are from a tutorial, I wrote a blog 'blog.htm' with corresponding CSS file, and am writing the JS from scratch for practice adding/deleting/etc.  I feel like my JS needs practice

//select the UL from the html and save it as a variable
const list = document.querySelector('#book-list ul')

//delete books by adding event listener, IF statement, const that is a parent of the target element, then we removeChild
list.addEventListener('click', function(e){
    if(e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

//line 7 addEventListener for 'click' *ADD THE FUNCTION THAT TAKES IN THE EVENT!
//lines 8-9 If statement, if the className of the event target (e.target) is delete, then WE GO UP TO PARENT ELEMENT and save it as a variable, just like we did with ITS parent element (list in line 4)
//line 10 - remove child element (li) from parent element (ul), remember this is only if they hit "THE PLACE THAT HAS A CLASS 'delete' (delete button, bro!)"


//adding books! this is fucking HUGE
const addForm = document.forms['add-book'];
addForm.addEventListener('submit', function(e){
        e.preventDefault();
        const value = addForm.querySelector('input[type="text"]').value;
        // console.log(value);

        //create elements like a pro!
        const li = document.createElement('li');
        const bookName = document.createElement('span');
        const deleteBtn = document.createElement('span');

        //assign content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;
        
        // append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

    });

