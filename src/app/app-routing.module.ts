import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GitParseComponent } from './git-parse/git-parse.component';

const routes: Routes = [
  {path:"git", component: GitParseComponent},
  // {path:"**", component: GitParseComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
