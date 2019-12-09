'use strict';

/* your code goes here! */
class Task{
  constructor(taskDescription, isComplete){
    this.description = taskDescription;
    this.complete = isComplete;
  }

  render(){
    let taskElement = document.createElement('li');
    taskElement.textContent = this.description;
    if(this.complete){
      taskElement.classList.add('font-strike');
    }
    taskElement.addEventListener('click',()=> {
      this.toggleFinished()
      taskElement.classList.toggle('font-strike');
    });
    return taskElement;
  }

  toggleFinished(){
    this.complete = !this.complete;
  }
}


class TaskList{

  constructor(tasks){
    this.tasks = tasks;
  }

  addTask(taskDescription){
    let newTask = new Task(taskDescription,false);
    this.tasks.push(newTask);
  }

  render(){
    let taskList = document.createElement('ol');
    this.tasks.forEach((task)=> {
      taskList.appendChild(task.render());
    });
    return taskList;
  }
}


class NewTaskForm{

  constructor(submitCallback){
    this.submitCallback = submitCallback;
  }

  render(){
    let form = document.createElement('form');
    let input = document.createElement('input');
    input.classList.add('form-control', 'mb-3');
    input.setAttribute('placeholder', 'What else do you have to do?')
    let submitButton = document.createElement('button');
    submitButton.classList.add('btn', 'btn-primary');
    submitButton.textContent = "Add task to list";
    form.appendChild(input);
    form.appendChild(submitButton);
    submitButton.addEventListener('click', (event) => {
      event.preventDefault();
      this.submitCallback(input.value)
    });
    return form;
  }
}


class App {
  constructor(parentElement, taskList) {
    this.parentElement = parentElement;
    this.taskList = taskList;
  }

  addTaskToList(taskDescription) {
    this.taskList.addTask(taskDescription);
    this.parentElement.innerHTML = '';
    this.render();
  }

  render() {
    let para = document.createElement('p');
    para.classList.add('lead');
    para.textContent = "Things I have to do";
    this.parentElement.appendChild(para);
    this.parentElement.appendChild(this.taskList.render());
    let taskForm = new NewTaskForm((description) => { this.addTaskToList(description) });
    this.parentElement.appendChild(taskForm.render());
    return this.parentElement;
  }
}

let task4 = new Task("Make classes", true);
let task5 = new Task("Arrow functions", false);
let app = document.querySelector('#app');

let tasks = new TaskList([task4, task5]);

let start = new App(app, tasks);

start.render();


//Make functions and variables available to tester. DO NOT MODIFY THIS.
if(typeof module !== 'undefined' && module.exports){
  /* eslint-disable */
  if(typeof Task !== 'undefined')
    module.exports.Task = Task;
  if(typeof TaskList !== 'undefined')
    module.exports.TaskList = TaskList;
  if(typeof NewTaskForm !== 'undefined')
    module.exports.NewTaskForm = NewTaskForm;
  if(typeof App !== 'undefined')
    module.exports.App = App;
}
