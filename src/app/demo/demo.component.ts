import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  Register(regForm:NgForm){
    console.log(regForm);

    const fname = this.Register.name;
    console.log(fname);

  }


}
