Vue.component('task-list', {
    template: '#task-list',
    props: {
      tasks: { default: [] } },
  
    data() {
      return {
        newTask: '' };
  
    },
    computed: {
      incomplete() {
        return this.tasks.filter(this.inProgress).length;
      } },
  
    methods: {
      addTask() {
        if (this.newTask) {
          this.tasks.push({
            title: this.newTask,
            completed: false });
  
          this.newTask = '';
        }
      },
      completeTask(task) {
        task.completed = !task.completed;
      },
      removeTask(index) {
        this.tasks.splice(index, 1);
      },
      clearCompleted() {
        this.tasks = this.tasks.filter(this.inProgress);
      },
      clearAll() {
        this.tasks = [];
      },
  
      inProgress(task) {
        return !this.isCompleted(task);
      },
      isCompleted(task) {
        return task.completed;
      } } });
  
  
  
  Vue.component('task-item', {
    template: '#task-item',
    props: ['task'],
    computed: {
      className() {
        let classes = ['tasks__item__toggle'];
        if (this.task.completed) {
          classes.push('tasks__item__toggle--completed');
        }
        return classes.join(' ');
      } } });
  
  
  
  new Vue({
    el: '#app',
    data: {
      tasks: [
      {
        title: 'Blue represents the sea',
        completed: false },
         {
        title: 'Green is a bright color',
        completed: false },
  
  
      {
        title: 'Red is a dangarous color',
        completed: false }] } });