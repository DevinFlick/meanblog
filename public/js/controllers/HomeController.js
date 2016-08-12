(function() {
  angular.module('ngBlog')
          .controller('HomeController', HomeController);

  HomeController.$inject = ['$scope'];

  function HomeController($scope){
    $scope.message = "HomeController Scope Message";
  };
}());
