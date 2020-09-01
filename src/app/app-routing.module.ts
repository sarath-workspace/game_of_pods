import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPanelComponent} from './main-panel/main-panel.component'

const routes: Routes = [{
  path: 'main-panel',
  component : MainPanelComponent,
  data : {title: 'example'}
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
