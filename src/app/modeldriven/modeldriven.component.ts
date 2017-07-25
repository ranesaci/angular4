import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-modeldriven',
  templateUrl: './modeldriven.component.html',
  styleUrls: ['./modeldriven.component.css']
})
export class ModeldrivenComponent implements OnInit {

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
