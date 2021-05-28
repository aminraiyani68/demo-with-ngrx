# UiTestAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.


## 1. Any style guides you used for your coding
- If we make our own graphics than we will create style guides and that one we used in our angular project

## 2. Any CSS coding standards
- We are using 7-1 google pattern for scss
- It means 7 folders and in those 7 folders we are adding some common files
  For example 
  1. abstracts 
  2. mixins
  3. vendors
  4. components

- In scss we are using block, element, modifier pattern 
  For example: 
  class is block
  new and new1 is modifier
  --red is modifier

  class{
      &__new{

      }

      &__new1{
          &--red{

          }
      }
  }

- For every colors using variables so anytime we can change color for those variables it will reflect in whole system.

- In SCSS using for loops and mixin we make very fimillar code.


## 3. Installation instructions

- For angular project we follow below steps:
https://angular.io/cli/new

- For angular material we follow below steps:
https://material.angular.io/guide/getting-started

- In SCSS 7-1 pattern, index.scss main file which we call in styles.scss

## 4. Description of how the application work


## 5. If you ran out of time what else you would have done.