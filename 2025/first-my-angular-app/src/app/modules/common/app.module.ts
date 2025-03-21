import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../../app.component';
import { HeaderComponent } from '../../components/header/header.component';
import { UserComponent } from '../../components/user/user.component';
import { SharedModule } from '../shared/card';
import { TasksModule } from '../../modules/shared/tasks.module';


@NgModule({
  declarations: [AppComponent, HeaderComponent, UserComponent],
  imports: [BrowserModule, SharedModule, TasksModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
