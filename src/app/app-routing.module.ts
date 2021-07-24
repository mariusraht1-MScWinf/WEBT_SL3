import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TerminologyAddComponent } from './terminology-add/terminology-add.component';

const routes: Routes = [
{ path:"", redirectTo:"/dashboard", pathMatch: "full" },
{path: "terminology-add", component: TerminologyAddComponent},
{path:"dashboard", component:DashboardComponent},
{path:"terminology-details/:id", component:TerminologyAddComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
