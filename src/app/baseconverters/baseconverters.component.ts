import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-baseconverters',
  templateUrl: './baseconverters.component.html',
  styleUrls: ['./baseconverters.component.css']
})
export class BaseconvertersComponent implements OnInit {

  constructor() { }

  form123;
  ngOnInit() {
    
    this.form123 = new FormGroup({
    decimal: new FormControl(),
    octal: new FormControl(),
    binary: new FormControl(),
    hex: new FormControl()
    });
  };
  onSubmit = function(myform){
    alert(myform.firstname+","+myform.lastname+","+myform.languages);
    console.log(myform)
  };
  decimalChaged = function(oldValue, newValue){
    if(newValue != ''){
      this.form123.patchValue({octal: parseInt(newValue,10).toString(8)});
      this.form123.patchValue({binary: parseInt(newValue,10).toString(2)});
      this.form123.patchValue({hex: parseInt(newValue,10).toString(16)});
    }else{
       this.form123.patchValue({octal: ""});
      this.form123.patchValue({binary: ""});
      this.form123.patchValue({hex: ""});
    }
    
  }
}
