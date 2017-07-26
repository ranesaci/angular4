import { Component, OnInit } from '@angular/core';
import {MydataService} from '../mydata.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor(private newService:MydataService) { 
  
  }
  dataFromService:any;
  ngOnInit() {
    console.log(this.newService.success());
    this.newService.employee.name="rane";
    console.log(this.newService.employee.name);
    this.dataFromService = this.newService.fetchData();
    console.log(this.dataFromService)
  }

}
