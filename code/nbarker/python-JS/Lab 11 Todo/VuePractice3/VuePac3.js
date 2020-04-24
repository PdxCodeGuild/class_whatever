//okay! for this one we are going to be doing some looping, so I imagine the JS file will look a little crazy, well not crazy, but there might be, a dictionary inside the list or something like that.
//build that template thing!
//so inside our element '#app' thank god for the hashtag, i'll never forget this one
//our 'data' has a list in it!, a list of dictionaries? with the 'key' as 'text'? If I'm correct, I'm an effing genius!
//sick, so this makes a list, holla at your boy!//

var app = new Vue({
    el: "#app",
    data: {              //our data object!
        todos: [
            {text: 'Learn Javascript' }, //object! with a 'text' key!
            {text: 'Learn Vue'}, //when we render these, we are pulling the text from these items
            {text: 'Build something awesome'}
        ]
    }
})

//wanna add some stuff?!
app.todos.push({ text: 'New item' })

//app name.//list or array name.PUSH({ text: 'whatever the fuck you want to say' })