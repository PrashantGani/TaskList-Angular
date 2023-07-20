import { Component } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent {


  tasks :Task[] =[
    new Task("Go to gym"),
    new Task("Go to office"),
    new Task("Go to shop"),
    new Task("Go for lunch"),
    new Task("Go to room")
  ]

  add(newTask:string){
    this.tasks.push(new Task(newTask));
  }

  remove(existingTask:Task){
    var taskConfirmed=confirm(`are sure you want to remove task?"${existingTask.title}"`)

    if(taskConfirmed){
      this.tasks=this.tasks.filter(task=>task !=existingTask);
    }
  }


}

class Task{

  constructor(public title:string){

  }
  toggleIsDone(){
    this.isDone =! this.isDone
  }

  public isDone=false
}
