import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
  }

}
