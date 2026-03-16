import { CanActivateFn } from '@angular/router';

export const guestGuard: CanActivateFn = () => {

  const token = localStorage.getItem("token");

  // If token exists → user already logged in
  if (token) {

    alert("You are already logged in");

    // redirect to dashboard
    window.location.href = "/";

    return false;
  }

  return true;
};