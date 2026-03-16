import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../../services/auth';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.html'
})
export class LoginComponent {

  user:any = {
    email:'',
    password:''
  };

  constructor(
    private authService:AuthService,
    private router:Router
  ){}

  login(){

    this.authService.login(this.user).subscribe({

      next:(res:any)=>{

        localStorage.setItem("token",res.token);

        alert("Login successful");

        // redirect to notes page
        this.router.navigate(['/notes']);

      },

      error:(err)=>{
        alert("Login failed");
      }

    });

  }

}