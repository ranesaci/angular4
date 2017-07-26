import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';

@Component({
  selector: 'app-formvalidation',
  templateUrl: './formvalidation.component.html',
  styleUrls: ['./formvalidation.component.css']
})
export class FormvalidationComponent implements OnInit {


  constructor() { }
 myform: FormGroup;
  ngOnInit() {

    this.myform = new FormGroup({
    firstname: new FormControl("", Validators.compose([
      Validators.maxLength(3),
      Validators.required,
    ])),
    lastname: new FormControl("",this.textValidator),
    languages: new FormControl()
    });
  };
  textValidator(control){
    if(control.value.length <3){
      return {'lastname':true};
    }

  };

  onSubmit = function(myform){
    alert(myform.firstname+","+myform.lastname+","+myform.languages);
    console.log(myform)
  }
}
