(function () {
    'use strict';

    angular
        .module('app')
        .controller('myController', function ($scope,$http,myFactory) {

            $scope.working = true;
            $scope.users = [];

            $scope.getData = function (url) {
                return $http.get(url).then(
                    function success(response) {
                        $scope.worked = true
                    },
                    function failure(reason) {
                        $scope.worked = false
                    }
                );
            }

            $scope.getFromFactory = function (url) {
                myFactory.getData(url).then(
                    function success() {
                        $scope.worked = true
                    }), function failure() {
                        $scope.worked = false
                    }
            }

            $scope.getFromFactoryGOOD = function (url) {
                myFactory.getDataGOOD(url).then(
                    function success() {
                        $scope.worked = true
                    }, function failure() {
                        console.log("here");
                        $scope.worked = false
                    })
            }

            function initialize() {
                var _url = "/common/timeZoneData.json";
                return $http({
                    method: 'GET',
                    url: _url
                }).then(function successCallback(response) {
                    console.log("data loaded");
                }).catch(function () {
                    console.log("Data not loaded");
                })
            }

        })

})();
