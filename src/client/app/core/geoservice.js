(function () {
    'use strict';

    angular
        .module('app.core')
        .factory('geoservice', geoservice);

    geoservice.$inject = ['$http', '$q', 'exception', 'logger'];
    /* @ngInject */
    function geoservice($http, $q, exception, logger) {
        var service = {
            getLatLon: getLatLon,
        };

        return service;

        function getLatLon(search, callback) {
            var geocoder = new google.maps.Geocoder();
            geocoder.geocode( { 'address': search}, function(results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    var lat = results[0].geometry.location.lat();
                    var lng = results[0].geometry.location.lng();
                    callback(lat, lng);
                } else {
                    alert("Geocode was not successful for the following reason: " + status);
                }
            });
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
