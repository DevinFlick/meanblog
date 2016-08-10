(function() {
  angular.module('ngBlog').controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'CommentService'];

  function SimpleController($scope, UserService, CommentService){
    $scope.message = 'Hey angular works';

    UserService.getAllUsers()
                .then(function(response){
                  console.log(response);
                });
    var userObj = {
      firstName: 'isJon',
      lastName: 'Lil',
      age: 41,
      email: "jonsssis@lil.com"
    };
    UserService.createUser(userObj)
                .then(function(response){
                  console.log(response);
                });
    var userId = "57aa5c4aedc0cf1100d89406";
    UserService.getOneUser(userId)
                .then(function(response){
                  console.log(response);
                });
    var updateInfo = {
      firstName: 'isnotJon',
      lastName: 'Lil',
      age: 41,
      email: "jonsisnot@lil.com"
    };
    UserService.updateUser(userId, updateInfo)
                .then(function(response){
                  console.log(response);
                });
    UserService.deleteUser(userId)
                .then(function(response){
                  console.log(response);
                });
    CommentService.getAllComments()
                  .then(function(response){
                    console.log(response);
                  });
    var postId = "57a3c636dd2539ea73cfb549";
    CommentService.getCommentsFromOnePost(postId)
                  .then(function(response){
                    console.log(response);
                  });
    var commentObj = {
    author: "Devin",
    body: "Likes Pub Subs",
    post: "57a3c636dd2539ea73cfb549",
  };
  CommentService.createComment(commentObj)
                .then(function(response){
                  console.log(response);
                });
  var commentId = "";
  var updateCommentInfo = {
    author: "Flick",
    body: "Does he like pub subs",
    post: "57a3c636dd2539ea73cfb549",
  };
  CommentService.updateComment(commentId, updateCommentInfo)
                .then(function(response){
                  console.log(response);
                });
  CommentService.deleteComment(commentId)
                .then(function(response){
                  console.log(response);
                });
  };
}());
