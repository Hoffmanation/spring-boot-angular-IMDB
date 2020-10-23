import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { TrailersComponent } from './component/trailers/trailers.component';
import { SearchComponent } from './component/search/search.component';
import { RatesComponent } from './component/rates/rates.component';
import { ExploreComponent } from './component/explore/explore.component';
import { DocComponent } from './component/doc/doc.component';

 
const routes: Routes = [
    {path: 'home' ,component: HomeComponent},
    {path: 'trailers' ,component: TrailersComponent},
    {path: 'search' ,component: SearchComponent},
    {path: 'rates' ,component: RatesComponent},
    {path: 'rates/:id' ,component: RatesComponent},
    {path: 'explore' ,component: ExploreComponent},
    {path: 'explore/:id' ,component: ExploreComponent},
    {path: 'doc' ,component: DocComponent},
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }