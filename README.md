# Worldpay

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `npm test` to execute the unit tests via [Jest](https://jestjs.io/index.html).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Testing

I've tried to demonstrate tests at each level although there are certainly more tests I could add to test error conditions in certain places for example.  However I have written unit tests for all aspects of the NgRx store and view components.  I've also written e2e tests, altough I admit I could add more but I wanted too demonstrate to you that I was familiar with Protractor testing.  More tests could be written but I'm afraid time was against me.

## PCI compliance
Any component built for PCI compliance would require that card details are held in a highly secure way and only passed accross the wire over a secure SSL connection.

I've assumed that the user using the application has already has passed any required security challenge requirements and that a secure SSL connection has been established.