# WEBT- Teilleistung 3

Start: npm start
Browser: Chrome 91.0.4472.77
         Vivaldi 3.8.2259.42

## Autoren
Natasha Jung
Marius Raht
Zdravka Todorova

## Remarks
We decided to split up the create and the edit component (although it means twice the maintenance work). We were not able to handle the enum dropdown: on the one hand, on creating, the dropdown uses strings as values. On the other hand, on editing, two way binding using ngModel can handle enums correctly. The consequence was that both ways could not be consolidated in one component.
