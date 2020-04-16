import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {CreateComponent} from './create/create.component';
import {ListComponent} from './list/list.component';
import {APIComponent} from './api/api.component';
import {EditComponent} from './edit/edit.component';


const routes: Routes = [
  {path:  '', pathMatch:  'full',redirectTo:  'home'},
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'create', component: CreateComponent},
  {path: 'list', component: ListComponent},
  {path: 'api', component: APIComponent},
  {path: 'edit', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
