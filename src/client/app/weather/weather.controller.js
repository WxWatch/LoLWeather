(function () {
    'use strict';

    angular
        .module('app.weather')
        .controller('WeatherController', WeatherController);

    WeatherController.$inject = ['$q', '$stateParams', 'dataservice', 'weatherservice', 'geoservice', 'logger'];
    /* @ngInject */
    function WeatherController($q, $stateParams, dataservice, weatherservice, geoservice, logger) {
        var vm = this;

        vm.title = 'Weather';
        vm.weather = null;
        vm.query = $stateParams.query;

        function EnableSkycons() {
            var icons = new Skycons(),
                list = [
                    "clear-day", "clear-night", "partly-cloudy-day",
                    "partly-cloudy-night", "cloudy", "rain", "sleet", "snow", "wind",
                    "fog"
                ],
                i;

            vm.dailyWeather.forEach(function(element, index, array) {
                var canvasId = "day" + index;
                icons.add(canvasId, element.icon);
            });
            for (i = list.length; i--;) {
                icons.add(list[i], list[i]);
            }
            console.log(icons);
            icons.play();
        }

        activate();

        function activate() {
            var promises = [FetchWeather()];
            return $q.all(promises).then(function () {
                logger.info('Activated Weather View');
            });
        }

        function FetchWeather() {
            geoservice.getLatLon(vm.query, function (lat, lon, address) {
                vm.address = address;
                weatherservice.getWeather(lat, lon, function (weather) {
                    vm.weather = weather.data;
                    vm.currentWeather = vm.weather.currently;
                    vm.dailyWeather = vm.weather.daily.data.slice(0, 5);

                    vm.dailyWeather.forEach(function (day) {
                        day.time = parseInt(day.time, 10) * 1000;
                    });

                    vm.currentWeather.time = parseInt(vm.currentWeather.time, 10) * 1000;

                    dataservice.getLocationForWeather(vm.currentWeather, function (location) {
                        vm.location = location;

                        EnableSkycons();

                    });
                });
            });

        }
    }
})();
