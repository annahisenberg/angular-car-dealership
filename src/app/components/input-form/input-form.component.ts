import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-input-form',
  templateUrl: './input-form.component.html',
  styleUrls: ['./input-form.component.css']
})
export class InputFormComponent implements OnInit {
  @Output() searchCars: EventEmitter<any> = new EventEmitter();

  make:string;
  year:number;
  color:string;
  sunRoof = false;
  fourWheel = false;
  lowMiles = false;
  powerWindows = false;
  navigation = false;
  heatedSeats = false;
  price:number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const selectedCar = {
      color: this.color,
      hasHeatedSeats: this.heatedSeats,
      hasLowMiles: this.lowMiles,
      hasNavigation: this.navigation,
      hasPowerWindows: this.powerWindows,
      hasSunroof: this.sunRoof,
      isFourWheelDrive: this.fourWheel,
      make: this.make,
      price: Number(this.price),
      year: Number(this.year)
    }
    console.log('form submitted with:', selectedCar);
    this.searchCars.emit(selectedCar);
  } 
}
