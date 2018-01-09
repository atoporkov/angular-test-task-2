export function routes($stateProvider){
    $stateProvider
      .state('home', {
        url: '/',
        template: require('./home.template.html'),
        controller: 'Home',
        controllerAs: '$ctrl'
      });
  }

  routes.$inject = ['$stateProvider'];
