app.config(function($routeProvider, $locationProvider) {
  $routeProvider
    .when('/', {
      templateUrl: './views/todo-home.html',
      controller: 'todoHomeCtrl'
    })
    .when('/todo/:id', {
      templateUrl: '/views/todo-app.html',
      controller: 'todoCtrl'
    });

    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false
    });
});