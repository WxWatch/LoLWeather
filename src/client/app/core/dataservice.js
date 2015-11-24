(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function dataservice($http, $q, exception, logger) {
        var service = {
            getLocationForWeather: getLocationForWeather,
        };

        return service;

        function getLocations() {
            return $http.get('api/locations')
                .then(success)
                .catch(fail);

            function success(response) {
                return response.data;
            }

            function fail(e) {
                return exception.catcher("Unable to get api/locations");
            }
        }

        function getLocationForWeather(weather, callback) {
            getLocations().then(function (locations) {
                var location = null;

                var temperature = weather.temperature;
                var precipIntensity = weather.precipIntensity;
                var precipType = weather.precipType;
                var windSpeed = weather.windSpeed;
                var cloudCover = weather.cloudCover;

                var prevMatches = 0;
                var currentMatches = 0;

                locations.forEach(function(loc) {
                    if (temperature > loc.temp_lower && temperature < loc.temp_upper) {
                        currentMatches++;
                    }

                    if (precipIntensity > loc.precip_lower && precipIntensity < loc.precip_upper) {
                        currentMatches++;

                        if (precipType === loc.precip_type) {
                            currentMatches++;
                        }
                    }

                    if (windSpeed > loc.wind_lower && windSpeed < loc.wind_upper) {
                        currentMatches++;
                    }

                    if (cloudCover > loc.cloud_lower && cloudCover < loc.cloud_lower) {
                        currentMatches++;
                    }

                    if (currentMatches > prevMatches) {
                        location = loc;
                        prevMatches = currentMatches;
                    }

                    currentMatches = 0;

                });

                callback(location);
            });
        }
    }
})();
