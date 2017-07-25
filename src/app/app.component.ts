import { Component, Input, OnChanges, SimpleChange, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  title = 'AppComponent title value**!!';
  employee = {
    id: '101',
    name: 'Sachin'
  };

  trueFalseVar= false;
  name= 'sachin'  ;
  list = ['Sachin', 'Rane', 'xyz','1111','2222222222'];
  addItem = '';
  pushItemInList = function(){
       if (this.addItem != null) {
          this.list.push(this.addItem);
         this.addItem = '';

       }
  };
  removeItemInList = function(index){
    this.list.splice(index,1);
  };
  
  birthday = new Date(1987,6,1);
  pipearray = [2,5,2,8,4,66,33];
  onSubmit = function(userForm){
    alert(userForm.firstname+","+userForm.lastname+","+userForm.languages);
    console.log(userForm)
  }
  form;
  ngOnInit(){
    this.form = new FormGroup({
    firstname1: new FormControl("Sac"),
    lastname1: new FormControl(),
    languages1: new FormControl() 
    });
    
  };
  
  myformModel;
  ngOnInitForModelDriven(){
    this.myformModel = new FormGroup({
    firstname: new FormControl("Sachin"),
    lastname: new FormControl(""),
    languages: new FormControl("") 
    });
    
  };
  
  converterForm;

}
