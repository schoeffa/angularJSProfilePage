"use strict";

angular.module("App", ["ngRoute"])
    .config(["$routeProvider", ($routeProvider) => {
    $routeProvider
    .when("/view", {
        template: "<view></view>"
    })
    .when("/edit", {
        template: "<edit></edit>"
    })
    .otherwise({
        template: "<view></view>"
    })
}]);