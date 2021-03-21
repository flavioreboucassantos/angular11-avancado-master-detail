import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "@nativescript/angular";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

/*import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";*/

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TasksComponent } from './pages/tasks/tasks.component';

@NgModule({
	bootstrap: [
		AppComponent
	],
	imports: [
		NativeScriptModule,
		AppRoutingModule
	],
	declarations: [
		AppComponent,
		SignInComponent,
		TasksComponent
		/*ItemsComponent,
		ItemDetailComponent*/
	],
	providers: [],
	schemas: [
		NO_ERRORS_SCHEMA
	]
})
export class AppModule { }
