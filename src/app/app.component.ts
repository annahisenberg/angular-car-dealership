import { Component } from '@angular/core';
import { Car } from './shared/models/Car';
import { CarsService } from './shared/services/cars.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars:Car[];
  title = 'car-dealership';
  oneCar:Car;

  constructor(private carsService:CarsService) {}

  searchCars(car:Car) {
    this.carsService.getAllCars().subscribe(resp => {
      this.cars = resp;
      this.cars.forEach(c => {
        delete c._id;
        if (_.isEqual(c, car)) {
          this.oneCar = c;
        } else {
          console.log('not equal');
        }
      })
    })
  }
}
