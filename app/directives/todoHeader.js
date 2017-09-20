app.directive('todoHeader', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    templateUrl: '../views/todo-header.html'
  };
});