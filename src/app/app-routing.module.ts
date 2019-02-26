import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NameEditorComponent } from './name-editor/name-editor.component';

const routes: Routes = [
  {path: 'name-editor', component: NameEditorComponent},
  {path: '', pathMatch: 'full', redirectTo: 'name-editor'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
