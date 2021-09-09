import { Component, OnInit } from '@angular/core';
import { SignupModel } from '../signuppage.model';
import { SignuppageService } from '../signuppage.service';

@Component({
  selector: 'app-demo1',
  templateUrl: './demo1.component.html',
  styleUrls: ['./demo1.component.css'],
  providers: [ SignuppageService ]
})
export class Demo1Component implements OnInit {

  signuppagecontent : SignupModel[] =[
    new SignupModel(8892234552, "manju@gmail.com", "Mr","Manjunath","R",
    "abc company","Bangalore","India","Fintech","Payments",2020,2,2,0,
    "Beta_Launch",2,3),
    new SignupModel(7402388387, "shiva@gmail.com", "Mr","Shiva","2021",
    "xyz company","Mumbai","India","Fintech 2","Payments",2021,2,2,0,
    "Beta_Launch",2,3)
  ]

  constructor(private signupService : SignuppageService,) { }

  ngOnInit(): void {
  }

}
