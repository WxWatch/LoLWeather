(function () {
    'use strict';

    angular
        .module('app.home')
        .controller('HomeController', HomeController);

    HomeController.$inject = ['$q', 'logger'];
    /* @ngInject */
    function HomeController($q, logger) {
        var vm = this;

        vm.title = 'Home';

        activate();

        function activate() {
            var promises = [];
            return $q.all(promises).then(function () {
                logger.info('Activated Home View');
            });
        }
    }
})();
