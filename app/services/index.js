import angular from 'angular';

import fxService from './fx.service';

export default angular
    .module('app.services', [])
    .service('fxService', fxService)
    .name;
