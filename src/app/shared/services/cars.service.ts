import { Injectable } from '@angular/core';
import Cars from '../mock-data/cars-data';
import { Car } from '../models/Car';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor() {}

  // TODO: methods to return data from json file or create an in memory web api

  getAllCars() {
    return of(Cars);
  }
}
