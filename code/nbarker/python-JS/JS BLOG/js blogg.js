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

        //add content
        deleteBtn.textContent = 'delete';
        bookName.textContent = value;
        
        //add classes
        bookName.classList.add('name');
        deleteBtn.classList.add('delete');

        // append to document
        li.appendChild(bookName);
        li.appendChild(deleteBtn);
        list.appendChild(li);

    });

//create a constant referencing the checkbox
//add event listener that listens for 'change'
//if statement hidebox.checked remember {}
//else remember {}
const hideBox = document.querySelector("#hide")
hideBox.addEventListener('change', function(e){
    if (hideBox.checked){
        list.style.display = "none";
    } else {
        list.style.display = "initial"
    };
    });

//create a custom search filter!
//create constant referencing the textbox
//create constant referencing the titles
//create constant referencing the input
//something to cycle through the titles to match them
//something to make them hide or show 'block'
//filter books

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term)!=-1){
            book.style.display = "block";
        } else {
            book.style.display = "none";
            }
        })
    });