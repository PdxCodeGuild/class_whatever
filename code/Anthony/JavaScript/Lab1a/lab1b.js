function calculateGrade(){
    var marks = document.getElementById("marks").value;
    var result = ""
    if((90 <= marks) && (marks <= 100) ){
        result = "A grade";
    }else if((80 <= marks) && (marks <= 89) ){
        result = "B grade";
    }else if((70 <= marks) && (marks <= 79) ){
        result = "C grade";
    }else if((60 <= marks) && (marks <= 69) ){
        result = "D grade";
    }else if((0 <= marks) && (marks <= 59) ){
        result = "F grade";
    }

    document.getElementById("grade_result").innerHTML = result;

}
