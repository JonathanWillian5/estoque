import { TaskService } from './../shared/task.service';
import { Task } from './../shared/task';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { Router } from 'express';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  task: Task = new Task();
  title: string = 'Nova Peça';

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private taskService: TaskService
  ){}

  ngOnInit(): void {
    const id = this.activateRoute.snapshot.paramMap.get('id');
  }

  onSubmit(){

  }
}
