import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateActivityComponent } from './components/create-activity/create-activity.component';
import { ListActivityComponent } from './components/list-activity/list-activity.component';

const routes: Routes = [
  {path:'list-activity',component:ListActivityComponent},
  {path:'add-activity',component:CreateActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
