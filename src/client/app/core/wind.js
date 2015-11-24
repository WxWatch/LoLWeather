(function () {
    'use strict';

    angular.module('app.core')
        .filter('wind', ['$filter', function ($filter) {
            return function (input) {
                var directions = [ 'N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW', 'N' ];
                var index = Math.round(((input % 360) / 45))
                return directions[index];
            };
        }]);
})();
