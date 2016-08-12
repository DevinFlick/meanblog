(function() {
  angular.module('ngBlog')
          .controller('ActiveViewController', ActiveViewController);
  ActiveViewController.$inject = ['$scope', '$location'];

  function ActiveViewController($scope, $location){
    $scope.isActive = function(viewLocation){
      return viewLocation === $location.path();
    };
  };
}());
