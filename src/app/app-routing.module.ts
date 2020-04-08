import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    { path: '', component: TodoComponent },
  ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
