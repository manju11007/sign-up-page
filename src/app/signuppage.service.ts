import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignuppageService {

  signuppagecontent: {
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
    monthbrn : number }[] = [];


    public getSignupInfo(){

    }



  constructor() { }

  testFunction(){
    console.log('Service Test function called:');
  }



}
