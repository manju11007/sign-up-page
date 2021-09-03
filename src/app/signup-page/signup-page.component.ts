import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { NgForm } from '@angular/forms';



@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {



  constructor( private router: Router ) {

    var name:string;


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
    }
    }

  ngOnInit(): void {

  }


  Register(signupForm:NgForm){

    var name:string;
    name = signupForm.value.mainnum;

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
