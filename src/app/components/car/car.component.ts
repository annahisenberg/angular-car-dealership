import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../../shared/models/Car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() car: Car;
   
  constructor() { }

  ngOnInit() {
  }

}
