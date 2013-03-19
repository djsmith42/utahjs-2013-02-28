function PersonDemoController($scope, $http) {
    $scope.userFirstName = "Fred";
    $http.get("/api/people").success(function(people) {
        $scope.people = people;
    });

    $scope.somePerson = {
        name: "Fred Maverick",
        age: 55,
        weight: 197
    }

    $scope.personClicked = function(person) {
        alert("A person got clicked: " + person.name);
    }
}



function EatClickController($scope) {
    $scope.linkClicked = function() {
        alert("The link got clicked");
    }
}




function ProgressBarDemoController($scope, $timeout) {
    $scope.totalPuppies   = 20;
    $scope.puppiesCuddled =  0;

    $scope.totalSpoons  = 1000;
    $scope.spoonsWashed =    0;

    _incrementPuppiesCuddled();
    _incrementSpoonsWashed();

    function _incrementPuppiesCuddled() {
        $scope.puppiesCuddled++;
        if ($scope.puppiesCuddled > $scope.totalPuppies) {
            $scope.puppiesCuddled = 0;
        }
        $timeout(_incrementPuppiesCuddled, 1000);
    }

    function _incrementSpoonsWashed() {
        $scope.spoonsWashed++;
        if ($scope.spoonsWashed > $scope.totalSpoons) {
            $scope.spoonsWashed = 0;
        }
        $timeout(_incrementSpoonsWashed, 100);
    }
}
