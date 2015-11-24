(function() {
    'use strict';

    angular
        .module('app.weather')
        .run(appRun);

    appRun.$inject = ['routerHelper'];
    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    function getStates() {
        return [
            {
                state: 'weather',
                config: {
                    url: '/weather?query',
                    templateUrl: 'app/weather/weather.html',
                    controller: 'WeatherController',
                    controllerAs: 'vm',
                    title: 'weather',
                    settings: {
                        nav: 1,
                        content: '<i class="fa fa-dashboard"></i> Weather'
                    }
                }
            }
        ];
    }
})();
