
***** Commands *****
npm install npm@latest -g
ng add @angular/material
ng add @ng-bootstrap/ng-bootstrap
npm install -g @angular/cli
ng v
npm v
rm -r node_modules
npm i
ng serve -o
ng serve --port 0
ng new sassy-project --style=scss
ng config schematics.@schematics/angular:component.styleext scss
ng build //create deployment artifacts to the dist folder
Create three components:
  ng g c navigation
  ng g c first
  ng g c second

***** Hints *****
in PolyFils.ts
change:
import 'core-js/es7/reflect';
to:
import 'core-js/es/reflect';