import { Component} from '@angular/core';

@Component({
  selector: 'location-display',
  template: `
  <div class='row'>
  <div class='col-md-4 offset-md-4'>
    <form class="form-signin">
        <h2 class="form-signin-heading">Please sign in</h2>
        <label for="inputEmail" class="sr-only">Email address</label>
        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
        <label for="inputPassword" class="sr-only">Password</label>
        <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
        <div class="checkbox">
          <label>
            <input type="checkbox" value="remember-me"> Remember me
          </label>
        </div>
        <button class="btn btn-lg btn-primary btn-block" type="submit" [routerLink]="['/main']">Sign in</button>
      </form>
      </div>
        </div>
  `
})
export class LoginComponent {

}
