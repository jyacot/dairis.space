import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ForosComponent } from './foros.component';

const routes: Routes = [
  {
    path: '',
    component: ForosComponent,
  },

  {
    path: ':id',
    component: ForosComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForosRoutingModule { }
