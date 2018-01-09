import angular from 'angular';

import fxPanel from './fxPanel.controller';

export default {
  bindings: {
    data: '<',
  },
  controller: fxPanel,
  controllerAs: "$ctrl",
  template: require('./fxPanel.template.html')
}
