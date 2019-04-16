# Car Dealership

## Project Details

#### User Stories

Use these stories to guide your development process:

- As a customer, I need to see a list of cars and narrow down my search using filters.

- As a customer, I want my car to have a sun roof, 4 wheel drive, and power windows.

- As a Frontend Engineer, I need to leverage Angular to build a single page application.

- As a Frontend Engineer, I need to organize the project in a manner that emphasizes separation of concerns.

- ... Feel free to add user stories as you see fit!

#### Description

Create a tool with filtering options that returns a list of automobiles fulfilling the customer’s request. The customer input form should include a way for customers to enter their criteria and whether they want all or some criteria to be matched.

The returned result-set should include the make, year, and which properties are fulfilled.

Car Options:

```
Color (Red, White, Gray, Silver, Black)
Automatic transmission
sun roof
4 wheel drive
low miles
power windows
navigation
heated seats

Optional Challenges:

Make mileage an input that sets a threshold.
```

You can find mock data located at [car-dealership/src/app/shared/mock-data/cars-data.ts](/src/app/shared/mock-data/cars-data.ts).

It is acceptable to use the Angular CLI tool to set this project up. We also recommend using UI components libraries such as [Angular Material](https://material.angular.io/guide/getting-started). We are looking for a frontend solution that consumes your API service and displays the information in a friendly manner.

It will be safe to assume that any "storage" required by the application can/should/will be done using Web APIs; you may mock the storage for those as you need, but the application must behave exactly the same if/when a backend is wired up to it. If you prefer to use a real backend, you may, but we urge you not to spend a great deal of time on that -- we are interested (and will be evaluating you) solely on your frontend skills.

---

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

---
