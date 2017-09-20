app.controller('todoHomeCtrl', ['$scope', '$log', '$timeout', '$localForage', 'ngNotify',
  function todoCtrl($scope, $log, $timeout, $localForage, ngNotify) {
    var todo = document.querySelector('.add-todo');

    $scope.todos = [];
    $scope.title = '';
    $scope.enabled = false;

    $scope.$watch('title', function () {
      $log.log($scope.title);
    });

    $scope.esc = function () {
      $scope.enabled = false;
      angular.element(todo).removeClass('slideInDown').addClass('animated').addClass('slideOutUp');
    };

    $scope.showForm = function () {
      $scope.enabled = true;
      angular.element(todo).removeClass('slideOutUp').addClass('animated').addClass('slideInDown');
    };

    $scope.submit = function () {
      if ($scope.title !== '') {
        if ($scope.todos === null) {
          $scope.todos = [];
        }
        $timeout(function () {
          $scope.todos.push($scope.title);
          $localForage.setItem('todo-lists', $scope.todos);
          $scope.title = '';
          $scope.enabled = false;
        }, 1000)
        ngNotify.set('A new todo list has been created!', 'success');
        angular.element(todo).removeClass('slideInDown').addClass('animated').addClass('slideOutUp');
      }
    };

    $localForage.getItem('todo-lists').then(function (data) {
      $scope.todos = data;
    });
  }
]);