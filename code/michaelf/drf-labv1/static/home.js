let app =  new Vue({
    el: '#app',
    delimiters:['[[', ']]'],
    data: {
        csrf_token: "",
        students: [],
        newStudent:{
            "first_name": "",
            "last_name": "",
            "cohort": "",
            "favorite_topic": "",
            "favorite_teacher": "",
            "capstone": ""
        },
    },
    methods: {
        createStudent: function(){
            axios({
                method:'post',
                url: '/api/v1/students/',
                data: this.newStudent,
                headers:{
                    "X-CSRFToken": this.csrf_token
                }
            }).then(response => {
                this.getStudentList()
                this.newStudent={
                    "first_name": "",
                    "last_name": "",
                    "cohort": "",
                    "favorite_topic": "",
                    "favorite_teacher": "",
                    "capstone": ""
                }
            })
        },
        getStudentList: function(){
            axios({
                method: 'get',
                url: 'api/v1/students/',
            }).then(response => this.students=response.data)
        }
    },
    mounted: function(){
        this.csrf_token=document.querySelector('input[name=csrfmiddlewaretoken]').value
        this.getStudentList()
    }
})