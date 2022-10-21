import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodemirrorComponent } from './expression/codemirror/codemirror.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: CodemirrorComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
