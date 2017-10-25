import { Component, OnInit } from '@angular/core';
import {User} from '../model/user.model';
import {HttpClient} from '@angular/common/http';
import {Http} from '@angular/http';
import {MatSnackBar} from '@angular/material';
import {Constants} from '../shared/constants';
import {UserService} from '../user/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  title = 'register';

  userRegister: User = new User();

  constructor (private userService: UserService, private snackBar: MatSnackBar) {
  }

  register() {
    this.userService.registerUser(this.userRegister).subscribe(user => {
      this.snackBar.open('Registered user successfully', 'Dismiss', {duration: 2000});
      console.log('Registred user:', user);
    }, (error: any) => {
      this.snackBar.open('User already exists', 'Dismiss', {duration: 2000});
      console.log('Already register');
    });
  }

  ngOnInit() {
  }

  onKeyPress($event) {
    if ($event.keyCode === 13) {
      this.register();
    }
  }
}
