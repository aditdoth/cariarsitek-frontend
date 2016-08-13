/**
 * Created by Pradhany on 7/16/2016.
 */

app.controller('datepickerController',
    function datepickerController($scope) {
        console.log("datepickerController initiated");

        $scope.datepickerOptions = {
            format: 'yyyy-mm-dd',
            language: 'fr',
            startDate: "2012-10-01",
            endDate: "2012-10-31",
            autoclose: true,
            weekStart: 0
        }
    });