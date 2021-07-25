# TL3

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.4.

## Development server

Run `npm run start` for a dev server. Navigate to `http://localhost:4200/` for the client and `http://localhost:3000` for the server. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Components

- Terminologie-Objekt
- Kapitel
- Übersichtsseite
- Erstellungsseite
- Änderungsseite
- Header (Logo + Navigation)
-

## Remarks

We decided to split up the create and the edit component (although it means twice the maintenance work). We were not able to handle the enum dropdown: on the one hand, on creating, the dropdown uses strings as values. On the other hand, on editing, two way binding using ngModel can handle enums correctly. The consequence was that both ways could not be consolidated in one component.
