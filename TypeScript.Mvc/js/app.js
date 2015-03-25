var Home;
(function (Home) {
    var Controller = (function () {
        function Controller($scope, $http) {
            this.$scope = $scope;
            this.$http = $http;
            this.clicks = 0;
            this.$scope.events = this;
            this.$scope.message = "Inicio";
        }
        Controller.prototype.changeMessage = function () {
            this.clicks++;
            this.$scope.message = this.clicks + " clicks";
        };
        Controller.Name = "HomeController";
        return Controller;
    })();
    Home.Controller = Controller;
})(Home || (Home = {}));
/// <reference path="controllers/home.ts" />
angular.module("App.Beer", []).controller("App.Beer.HomeController", ['$scope', Home.Controller]);
///// <reference path="../main.ts" />
//module MessageDirective
//{
//    export class Directive implements angular.IDirective
//    {
//        link: angular.IDirectiveLinkFn;
//        constructor() {
//            this.link =  () => {
//            }
//        }
//    }
//}  
/// <reference path="beer/beer.ts" />
var App = (function () {
    function App() {
        this.Module = angular.module("App", ["App.Beer"]);
        // this.Module.config(['$routeProvider', this.config]);
    }
    App.prototype.config = function ($routeProvider) {
        $routeProvider.when('/phones', {
            templateUrl: 'partials/phone-list.html',
            controller: 'PhoneListCtrl'
        }).when('/phones/:phoneId', {
            templateUrl: 'partials/phone-detail.html',
            controller: 'PhoneDetailCtrl'
        }).otherwise({
            redirectTo: '/phones'
        });
    };
    return App;
})();
var AppModule = new App().Module;
//# sourceMappingURL=app.js.map