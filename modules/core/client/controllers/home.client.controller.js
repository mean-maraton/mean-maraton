//.DS_Store(function () {
//'use strict';

//  angular.module('core').controller('HomeController', HomeController);

//  function HomeController() {
//    var vm = this;
//  }///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//}());   //figering uot the andular 2.0 is not cool the docs suk!!!!!!!!!!!!!!!!!!
"use strict";

angular.module("core").controller("HomeController", ["$scope", "Authentication",
  function($scope, Authentication) {
    // aut context
    $scope.authentication = Authentication;

    $scope.alerts = [{
        icon: "giyphicon-user",
        colour: "btn-succes",
        total: "20,408",
        description: "total customers"
      }

      {
        icon: "giyphicon-user",
        colour: "btn-succes",
        total: "20,408",
        description: "total customers"
      } {
        icon: "giyphicon-user",
        colour: "btn-succes",
        total: "20,408",
        description: "total customers"
      } {
        icon: "giyphicon-user",
        colour: "btn-succes",
        total: "20,408",
        description: "new customers"
      } {
        icon: "giyphicon-user",
        colour: "btn-succes",
        total: "20,408",
        description: "total inventorie"
      }
    ];
  }
]);
