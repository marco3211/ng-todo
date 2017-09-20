app.controller('todoCtrl', ['$scope', '$log', '$routeParams', '$location', '$localForage', 
  function todoCtrl($scope, $log, $routeParams, $location, $localForage) {
  $scope.lists = [];
  $scope.title = 'Todo App';
  $scope.todo = '';
  $scope.param = $routeParams.id;

  $log.log($scope.param);

  $scope.$watch('todo', function() {
    $log.log($scope.todo);
  });

  $scope.submit = function() {
    if ($scope.todo !== '') {
      if ($scope.lists === null) { $scope.lists = []; }
      $scope.lists.push($scope.todo);
      $localForage.setItem($scope.param + '-lists', $scope.lists);
      $scope.todo = '';
    }
  };

  $localForage.getItem($scope.param + '-lists').then(function(data) {
    $scope.lists = data;
  });
}]);