import angular from 'angular';

import { APP_CONFIG } from '../config/app.config';

export default class fxService {
    constructor($http){
        this.$http = $http;
    }

    getFxPanelData() {
        return this.$http.get(APP_CONFIG['api']['host'] + ':' + APP_CONFIG['api']['port'] + '/fxPanelData');
    }

    getBuyPrice(currPrice) {
        let newPrice;

        let growthIndicator = Math.random() < 0.5 ? -1 : 1;

        if(growthIndicator == 1){
            newPrice = currPrice + currPrice * 0.1;
        }else{
            newPrice = currPrice - currPrice * 0.1;
        }

        return parseFloat(newPrice).toFixed(5);
    }
}

fxService.inject = ['$http'];
