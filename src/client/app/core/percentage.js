(function () {
    'use strict';

    angular.module('app.core')
        .filter('percentage', ['$filter', function ($filter) {
            return function (input, decimals) {
                return $filter('number')(input * 100, decimals);
            };
        }]);
})();
