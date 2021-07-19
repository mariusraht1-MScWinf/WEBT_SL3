import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminologyAddComponent } from './terminology-add/terminology-add.component';

const routes: Routes = [
{ path: 'terminology-add', component: TerminologyAddComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
