angular.module('ngBlog')
        .directive('navbar', function(){
  return{
    restrict: 'E',
    scope: {
      navbar: '='
    },
    templateUrl:'/html/directives/navbar.html'
  };
});
