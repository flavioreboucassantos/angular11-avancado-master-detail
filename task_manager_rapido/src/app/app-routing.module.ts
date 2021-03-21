import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "@nativescript/angular";

/*import { ItemsComponent } from "./item/items.component";
import { ItemDetailComponent } from "./item/item-detail.component";*/

import { SignInComponent } from './pages/sign-in/sign-in.component';
import { TasksComponent } from './pages/tasks/tasks.component';

const routes: Routes = [
	{ path: "", redirectTo: "/sign-in", pathMatch: "full" },
	{ path: "sign-in", component: SignInComponent },
	{ path: "tasks", component: TasksComponent }
	/*{ path: "", redirectTo: "/items", pathMatch: "full" },
	{ path: "items", component: ItemsComponent },
	{ path: "item/:id", component: ItemDetailComponent }*/
];

@NgModule({
	imports: [NativeScriptRouterModule.forRoot(routes)],
	exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
