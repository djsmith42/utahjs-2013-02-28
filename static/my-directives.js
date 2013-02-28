angular.module("MyDirectives", []).
directive("myPersonWidget", function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/partials/my-person-widget.html',
        scope: {
            person: '=',
            clicked: '='
        }
    }
});
