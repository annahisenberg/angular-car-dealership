import { Component, OnInit, Input } from '@angular/core';
import { CarsService } from '../../shared/services/cars.service';
import { Car } from '../../shared/models/Car'

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.css']
})
export class CarListComponent implements OnInit {
  @Input() oneCar: Car;
  
  cars:Car[];

  constructor(private carsService:CarsService) { }

  ngOnInit() {
    this.carsService.getAllCars().subscribe(resp => {
      console.log(resp)
      this.cars = resp;
    })
  }

}
