(function() {
  angular.module('ngBlog')
          .config(RouteConfig);

  RouteConfig.$inject = ['$routeProvider', '$locationProvider'];

  function RouteConfig($routeProvider, $locationProvider){
    $routeProvider
    .when('/',{
      templateUrl: "/html/views/home.html",
      controller: 'HomeController'
    })
    .when('/contact', {
      templateUrl:
    })
  }
}());
