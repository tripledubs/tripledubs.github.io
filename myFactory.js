(function () {
    'use strict';

    angular
        .module('app')
        .factory('myFactory', function($http) {
            var service = {
                // Bad
                getData: function (url) {
                    return $http.get(url).then(
                        function success(response) {
                            console.log(response.data)
                            return response.data
                        },
                        function failure(reason) {
                            return reason
                        }
                    )
                },
                // good
                getDataGOOD: function (url) {
                    return $http.get(url).then(
                        function success(response) {
                            console.log(response.data)
                            return response.data
                        }
                    )
                }

            } // end SErvice

            return service;

        })
})();