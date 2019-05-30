import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { SearchComponent }   from './search/search.component';
import { LoginComponent } from './login/login.component';
import { AddTouristComponent } from './add-tourist/add-tourist.component';
import { TouristsComponent } from './tourists/tourists.component';
import { ProfileComponent } from './profile/profile.component';



const routes: Routes = [
	{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'search', component: SearchComponent },
	{ path: 'add', component: AddTouristComponent},
	{ path: 'tourists', component: TouristsComponent},
	{ path: 'profile/:id', component:ProfileComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
