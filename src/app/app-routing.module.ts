import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './components/students/students.component';

const routes: Routes = [
	{	path: 'students', component: StudentsComponent	},
	{ path: '',   redirectTo: 'students', pathMatch: 'full' },
	{	path: '**', component: StudentsComponent	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
