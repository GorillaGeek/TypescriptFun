module Home {
    interface Scope {
        events: Object;
        message: string;
    }

    export class Controller {
        public static Name: string = "HomeController";

        private clicks: number = 0;

        constructor(private $scope: Scope, private $http: angular.IHttpService) {
            this.$scope.events = this;
            this.$scope.message = "Inicio";
        }

        changeMessage(): void {
            this.clicks++;
            this.$scope.message = this.clicks + " clicks";
        }
    }
}