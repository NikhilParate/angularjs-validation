var app = angular.module('contactFormApp', []);

app.controller('MainCtrl', function ($scope) {
   
    $scope.$watch("contactForm.$valid", function (isValid) {
        $scope.informationStatus = isValid;
    });

   
});
