import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SignuppageService } from '../signuppage.service';

import { SignupModel } from '../signuppage.model';



@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css'],
  providers: [ SignuppageService ]
})
export class SignupPageComponent implements OnInit {


  signuppagecontent : SignupModel[] =[
    new SignupModel(10023432, "manju@gmail.com", "mr","Manjunath",
    "abc_company","bangalore","India","Fintech","Payments","2021",4,2,2,0,
    "Beta_Launch",2,3)
  ]

/*   signupPage : SignuppageService[] = []; */





/*   signuppagecontent: {
    mainnum : number,
    mainemail : string,
    mrmrs : string,
    firstname : string,
    sname : string,
    compname : string,
    loc : string,
    coun : string,
    indus : string,
    segm : string,
    year : number,
    month : number,
    prmoter : number,
    tfund : number,
    stage : string,
    monthrev : number,
    monthbrn : number }[] = []; */
    //mainnum = this.




  constructor( private router: Router,
    private signupService : SignuppageService,
     ) {


      this.signupService.getSignupInfo;

/*     var name:string;
    type Signup = {
      mainnum : number;
      mainemail : string;
      mrmrs : string;
      firstname : string;
      sname : string;
      compname : string;
      loc : string;
      coun : string;
      indus : string;
      segm : string;
      year : number;
      month : number;
      prmoter : number;
      tfund : number;
      stage : string;
      monthrev : number;
      monthbrn : number;
    } */
    }

  ngOnInit(): void {


   // this.signup = this.

  }


  Register(signupForm:NgForm){

    var mainnumber :string = signupForm.value.mainnum;
    var mainemail :string = signupForm.value.mainemail;
    console.log(signupForm);
    }

    onLoadSignupConfirmPage(){

      //Calculations
      this.router.navigate(['/signupconfirmpage']), { state: { data: { SignupPageComponent }}} ;

    }



/*   onSubmit(signupForm:NgForm){
    console.log(signupForm);

  } */


}
