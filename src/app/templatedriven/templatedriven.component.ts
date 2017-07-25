import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-templatedriven',
  templateUrl: './templatedriven.component.html',
  styleUrls: ['./templatedriven.component.css']
})
export class TemplatedrivenComponent implements OnInit {

  constructor() { }

  myform: FormGroup;
  ngOnInit() {
    
    this.myform = new FormGroup({
    firstname: new FormControl("Sac"),
    lastname: new FormControl(),
    languages: new FormControl() 
    });
  };
  onSubmit = function(myform){
    alert(myform.firstname+","+myform.lastname+","+myform.languages);
    console.log(myform)
  }
}
