import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponentComponent} from './home-component/home-component.component';
import { AboutComponent} from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponentComponent },
  { path: 'about', component: AboutComponent },


];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
