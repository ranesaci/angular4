import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class MydataService {

  constructor(private http: Http) { };
  
  fetchData(){
    return this.http.get('https://jsonplaceholder.typicode.com/users').map(
    (response)=> response.json()).subscribe(
    (data) => console.log(data)
    )
  }
  
  success(){
    return "success as return value!!";
  }
  
  employee = {
    id: '101',
    name: 'Sachin'
  };

}
