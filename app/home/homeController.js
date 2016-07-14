/**
 * Created by Pradhany on 6/30/2016.
 */

app.controller('homeController',
    function homeController($scope, homeServices) {
        homeServices.getHomeTypes().then(function(data) {
            $scope.homeTypes = data;
        });

        homeServices.getBuildingWidth().then(function(data) {
            $scope.buildingWidth = data;
        });

        homeServices.getProvince().then(function(data) {
            $scope.provinces = data;
        });

    });