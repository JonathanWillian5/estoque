import { Task } from './task';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: Task[] = [
    {id: 1, descricao: 'Peça 1', quantidade: 20},
    {id: 2, descricao: 'Peça 2', quantidade: 40},
    {id: 3, descricao: 'Peça 3', quantidade: 60},
    {id: 4, descricao: 'Peça 4', quantidade: 80},
    {id: 5, descricao: 'Peça 5', quantidade: 100},
  ]

  constructor() { }

  getAll(){
    return this.tasks;
  }

  getById(id: number){
    const task = this.tasks.find((value) => value.id == id);
    return task;
  }

  save(task: Task){
    if (task.id){
      const taskArr = this.getById(task.id);
      taskArr!.descricao = task.descricao;
      taskArr!.quantidade = task.quantidade;
    } else{
      const lastId = this.tasks[this.tasks.length-1].id;
      task.id = lastId +1;
      task.quantidade = 0;
      this.tasks.push(task);
    }
  }

  delete(id: number) {
    const taskIndex = this.tasks.findIndex((value) => value.id == id);
    this.tasks.splice(taskIndex, 1);
  }
}
