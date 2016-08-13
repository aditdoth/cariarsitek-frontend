/**
 * Created by Pradhany on 6/30/2016.
 */

app.controller('homeController',
    function homeController($scope, homeServices, $location) {
        console.log("homeController initiated");

        homeServices.getHomeTypes().then(function(data) {
            $scope.homeTypes = data;
        });

        homeServices.getBuildingWidth().then(function(data) {
            $scope.buildingWidth = data;
        });

        homeServices.getProvince().then(function(data) {
            $scope.provinces = data;
        });

        $scope.submitDraftProject = function() {
            $location.path('/submitProject');
        };

        $scope.findArchitect = function() {
            $location.path('/findArchitect');
        };

    });