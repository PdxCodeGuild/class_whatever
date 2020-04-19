

function check_anagram(first_word, second_word){
    word1=first_word.trim().toLowerCase().split('').sort().join('')
    console.log(word1)
    word2=second_word.trim().toLowerCase().split('').sort().join('')
    console.log(word2)
    if (word1===word2){
        return `${first_word} and ${second_word} are Anagrams!!!`
    }else{
        return `${first_word} and ${second_word} are not Anagrams.`
    }
    
}

let bt=document.getElementById('submit')
let div=document.querySelector('div')
    bt.addEventListener('click', function(){
        let first_word=document.getElementById('first-word').value
        let second_word=document.getElementById('second-word').value
        div.innerText=check_anagram(first_word, second_word)
    })
