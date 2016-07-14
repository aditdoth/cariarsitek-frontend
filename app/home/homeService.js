/**
 * Created by Pradhany on 6/30/2016.
 */

app.factory('homeServices', function($http) {

    return  {
        getHomeTypes : function() {
            return $http.get('http://localhost:3000/ToucpointServices/getHouseTypes').then(function(response) {
                return response.data;
            })
        },

        getBuildingWidth : function() {
            return $http.get('http://localhost:3000/ToucpointServices/getBuildingWidth').then(function(response) {
                return response.data;
            })
        },

        getProvince : function() {
            return $http.get("http://localhost:3000/ToucpointServices/getProvinces").then(function(response){
                return response.data;
            })
        }
    };
});