import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../pages/main-card/main-card.module').then(m => m.MainCardModule) },
  { path: 'foros', loadChildren: () => import('../pages/foros/foros.module').then(m => m.ForosModule) },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
