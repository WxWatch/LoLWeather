(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('weatherservice', weatherservice);

    weatherservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function weatherservice($http, $q, exception, logger) {
        var service = {
            getWeather: getWeather,
        };

        return service;

        function getWeather(latitude, longitude, callback) {
            $http.get('/api/weather/' + latitude + '/' + longitude)
                .then(callback)
                .catch(fail);

            function fail(error) {
                exception.catcher('XHR Failed for getWeather')(error);
            }
        }

        function getMessageCount() { return $q.when(72); }

        function getPeople() {
            return $http.get('/api/people')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher('XHR Failed for getPeople')(e);
            }
        }
    }
})();
