import { SignupComponent } from './pages/signup/signup';
import { LoginComponent } from './pages/login/login';
import { UploadComponent } from './pages/upload/upload';
import { NotesComponent } from './pages/notes/notes';
import { authGuard } from './guards/auth-guard';
import { DashboardComponent } from './pages/dashboard/dashboard';
import { guestGuard } from './guards/guest-guard';
export const routes = [

  { path:'', component:DashboardComponent },

  { path:'signup', component:SignupComponent, canActivate:[guestGuard] },

  { path:'login', component:LoginComponent, canActivate:[guestGuard] },

  { path:'upload', component:UploadComponent, canActivate:[authGuard] },

  { path:'notes', component:NotesComponent }

];