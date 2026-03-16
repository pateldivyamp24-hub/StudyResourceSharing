import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html'
})
export class App {

  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem("token");
    alert("Logged out");
    this.router.navigate(['/login']);
  }

}