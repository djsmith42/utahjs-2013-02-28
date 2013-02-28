function HomePageController($scope, $http) {
    $scope.userFirstName = "Fred";
    $http.get("/api/people").success(function(people) {
        $scope.people = people;
    });

    $scope.somePerson = {
        name: "Fred Maverick",
        age: 55,
        weight: 197
    }
}
