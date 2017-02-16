import angular from 'angular';
import { AppComponent } from './app.component';
import { AppService } from './app.service';

angular
  .module('app', [])
  .component('app', AppComponent)
  .service('AppService', AppService);
