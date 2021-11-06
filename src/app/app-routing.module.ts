import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePage } from './home/home.page';
import { TrackMatchComponent } from './track-match/track-match.component';
import { TeamListComponent } from './team-list/team-list.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'track-match',
    component: TrackMatchComponent
  },
  {
    path: 'team-list',
    component: TeamListComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
