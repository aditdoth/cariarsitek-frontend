/**
 * Created by Pradhany on 6/29/2016.
 */
var app = angular.module('app', ['ngRoute', 'angucomplete', 'ngAnimate',
    'ui.bootstrap', 'angularCSS']);

app.config(function($routeProvider) {
  $routeProvider
      .when("/", {
        controller: 'homeController',
        templateUrl : "home/home.html"
      })
      .when("/register", {
        controller: 'registerPageController',
        templateUrl : "register/register.html"
      })
      .when("/login", {
        controller: 'loginController',
        templateUrl : "login/login.html"
      })
      .when("/submitProject", {
          controller: 'submitProjectPageController',
          templateUrl : "submitProject/submitProject.html"
      })
      .when("/findArchitect", {
          controller: 'findArchitectController',
          templateUrl : "findArchitect/findArchitect.html"
      })
      .when("/profileArchitect", {
          controller: 'profileArchitectController',
          templateUrl : "profileArchitect/profileArchitect.html"
      })
      .otherwise({
        redirectTo : "/"
      })
});
