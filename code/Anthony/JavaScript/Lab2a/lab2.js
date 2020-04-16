
function Average(){
    let  num = [];
    let  sum = 0;
    
    while (true) {
        let user = prompt("Enter a number or done: ");
        if (user === 'done'){
            num.push(parseInt(user));
            let length = num.length;
            for (let i =0; i < length; i++){
                num/length;
            }
            alert(`The average of ${num} is ${num/length}`);
            // break;
        } else{
        }
        // for (let i=0; i<nums.length; i++){
        //     alert(i);
        // }
    }

}
Average();
