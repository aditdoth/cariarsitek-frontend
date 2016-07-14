/**
 * Created by Pradhany on 6/29/2016.
 */
var app = angular.module('app', ['ngRoute', 'angucomplete', 'ngAnimate', 'ui.bootstrap', 'angularCSS']);

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
        controller: 'loginPageController',
        templateUrl : "login/login.html"
      })
      .otherwise({
        redirectTo : "/"
      })
});
