/// <reference path="beer/beer.ts" />

class App {
    public Module: angular.IModule;

    constructor() {
        this.Module = angular.module("App", ["App.Beer"]);
       // this.Module.config(['$routeProvider', this.config]);
    }


    config($routeProvider: angular.route.IRouteProvider): void {
        $routeProvider.
            when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).
            when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).
            otherwise({
            redirectTo: '/phones'
        });
    }
}

var AppModule = new App().Module;