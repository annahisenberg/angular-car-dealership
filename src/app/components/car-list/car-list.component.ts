import { Component, OnInit } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {

  constructor(private carsService:CarsService) { }

  ngOnInit() {

  }

}
