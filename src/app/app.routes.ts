import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { SkateparksListComponent } from './components/skateparks-list/skateparks-list.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'friends', component: FriendsListComponent },
  { path: 'skateparks', component: SkateparksListComponent },
  { path: 'settings', component: SettingsPageComponent },
  { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'profile', pathMatch: 'full' } // Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export { routes };
