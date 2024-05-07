import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { SkateparksListComponent } from './components/skateparks-list/skateparks-list.component';
import { SettingsPageComponent } from './components/settings-page/settings-page.component';
import { AuthGuard } from './auth.guard';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'profile', component: ProfileComponent,
    canActivate: [AuthGuard]
},
  {
    path: 'friends', component: FriendsListComponent,
    canActivate: [AuthGuard]
},
  {
    path: 'skateparks', component: SkateparksListComponent,
    canActivate: [AuthGuard]
},
  {
    path: 'settings', component: SettingsPageComponent,
    canActivate: [AuthGuard]
},
  { path: '', redirectTo: 'profile', pathMatch: 'full' }, // Default route
  { path: '**', redirectTo: 'profile', pathMatch: 'full' } // Catch-all route
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,
    FormsModule],
  exports: [RouterModule],
})
export class AppRoutingModule { }
export { routes };
