angular.module("MyDirectives", []).
directive("myPersonWidget", function() {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: '/partials/my-person-widget.html',
        scope: {
            person: '=',
            clicked: '='
        },
        controller: function($scope) {
            $scope.shouldShowButton = function() {
                return $scope.person.age > 16;
            }
        }
    }
}).
directive("eatClick", function() {
    return {
        link: function(scope, element, attrs) {
            element.click(function(event) {
                console.log("Eating the click");
                event.preventDefault();
            });
        }
    }
}).
directive('throbbingText', function() {
    return {
        link: function(scope, element, attrs) {
            var FadeMillis = 900;
            var IntervalMillis = 100;
            var _isFaded = false;
            _doFade();
            function _doFade() {
                if (element.is(':visible')) {
                    var fadeTo = _isFaded ? 0.9 : 0.4;
                    element.fadeTo(FadeMillis, fadeTo, function() {
                        _isFaded = !_isFaded;
                    });
                }
                // Don't use $timeout because it causes all $scopes to re-$digest
                setTimeout(_doFade, FadeMillis + IntervalMillis);
            }
        }
    }
}).
directive('progressBar', function() {
    return {
        restrict: 'E',
        transclude: true,
        replace: true,
        scope: {
            done  : '=', // number of "done" steps
            total : '='  // total number of steps
        },
        template: '<div class="progress progress-success"><span class="bar"></span></div>',
        controller: function($scope, $element) {
            var bar = $element.find(".bar");
            function _update() {
                if ($scope.total > 0) {
                    var percent = 100.0 * $scope.done / $scope.total;
                } else {
                    var percent = 0;
                }
                bar.width(percent + "%");
            }
            $scope.$watch("done",  _update);
            $scope.$watch("total", _update);
        }
    }
})
