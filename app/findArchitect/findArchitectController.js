/**
 * Created by Pradhany on 8/2/2016.
 */

app.controller("findArchitectController",
    function findArchitectController(homeServices, $scope, $location) {

        console.log("findArchitectController initiated");
        homeServices.getHomeTypes().then(function(data) {
            $scope.homeTypes = data;
        });

        homeServices.getProvince().then(function(data) {
            $scope.provinces = data;
        });

        $scope.showProfileArchitect = function() {
            $location.path("/profileArchitect");
        };

});