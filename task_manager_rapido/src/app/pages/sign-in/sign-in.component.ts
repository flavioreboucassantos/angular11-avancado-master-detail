import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'sign-in',
	templateUrl: './sign-in.component.html',
	moduleId: module.id
})
export class SignInComponent {

	public constructor(private router: Router) {
	}

	public signInUser() {
		this.router.navigate(['tasks']);
	}

	public createAccount() {
		alert('Criar conta!')
	}

}