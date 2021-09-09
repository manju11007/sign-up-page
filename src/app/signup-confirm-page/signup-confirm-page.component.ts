import { Component, OnInit } from '@angular/core';
import { SignuppageService } from '../signuppage.service';

@Component({
  selector: 'app-signup-confirm-page',
  templateUrl: './signup-confirm-page.component.html',
  styleUrls: ['./signup-confirm-page.component.css'],
  providers: [ SignuppageService ]
})
export class SignupConfirmPageComponent implements OnInit {


  constructor(private signupService : SignuppageService) { }

  ngOnInit(): void {

    this.signupService.testFunction();
  }

}
