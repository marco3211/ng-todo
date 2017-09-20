app.directive('todoApp', function() {
  return {
    restrict: 'E',
    transclude: true,
    replace: true,
    templateUrl: '../views/todo-app.html'
  };
});