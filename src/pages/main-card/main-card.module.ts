import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainCardComponent } from './main-card.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';


const Router = RouterModule.forChild([
  {
    path: '',
    component: MainCardComponent,
  },

]);



@NgModule({
  declarations: [
    MainCardComponent
  ],
  imports: [
    CommonModule, FontAwesomeModule,
    Router,
    TranslateModule,
  ]
})
export class MainCardModule { }
