import { Component } from '@angular/core';
import { TextField } from '@nativescript/core';

@Component({
	selector: 'tasks',
	templateUrl: './tasks.component.html',
	moduleId: module.id
})
export class TasksComponent {
	public tasks: Array<string> = [
		'Tarefa #01',
		'Tarefa #02',
		'Tarefa #03',
		'Tarefa #04',
		'Tarefa #05',
		'Tarefa #06',
		'Tarefa #07',
		'Tarefa #08',
		'Tarefa #09',
		'Tarefa #10',
		'Tarefa #11',
		'Tarefa #12',
		'Tarefa #13',
		'Tarefa #14',
		'Tarefa #15',
		'Tarefa #16',
		'Tarefa #17',
		'Tarefa #18',
		'Tarefa #19',
		'Tarefa #20'
	];

	public createTask(taskField: TextField) {
		this.tasks.unshift(taskField.text);
		taskField.text = '';
	}

	public deleteTask(args) {
		let taskIndex = args.index;
		this.tasks.splice(taskIndex, 1);
		alert('Tarefa ' + taskIndex + ' removida!');
	}
}