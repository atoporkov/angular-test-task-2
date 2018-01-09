import angular from 'angular';
import uirouter from '@uirouter/angularjs';

import { routes } from './home.config';

import Home from './home.controller';
import fxService from '../../services/fx.service';

export default angular
  .module('app.home', [uirouter])
  .config(routes)
  .controller('Home', Home)
  .service('fxService', fxService)
  .name;
