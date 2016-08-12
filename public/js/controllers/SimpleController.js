(function() {
  angular.module('ngBlog').controller('SimpleController', SimpleController);

  SimpleController.$inject = ['$scope', 'UserService', 'CommentService', 'PostService',];

  function SimpleController($scope, UserService, CommentService, PostService){
    $scope.message = 'Hey angular works';
    var userObj = {
      firstName: 'isJon',
      lastName: 'Lil',
      age: 41,
      email: "jonsssis@lil.com"
    };
    var userId = "57aa5c4aedc0cf1100d89406";
    var updateInfo = {
      firstName: 'isnotJon',
      lastName: 'Lil',
      age: 41,
      email: "jonsisnot@lil.com"
    };
    var postId = "57a3c636dd2539ea73cfb549";
    var commentObj = {
    author: "57a92af60bdf701100b451bf",
    body: "Likes Pub Subs",
    post: "57a3c636dd2539ea73cfb549",
    };
  var commentId = "57abbbeecda1221100f4b4a5";
  var commentUpdateInfo = {
    author: "57a92af60bdf701100b451bf",
    body: "Does he like pub subs",
    post: "57a3c636dd2539ea73cfb549",
  };
  var postObj = {
    title: "Test post",
    body: "This is a test.",
    author: "57a92af60bdf701100b451bf",
  };
  var postIdU = "57abbc63cda1221100f4b4a9";
  var postIdD = "57a3c62cdd2539ea73cfb546";
  var postUpdateInfo = {
    title: "Test Post?",
    body: "is this a test?",
    author: "57a92c350bdf701100b451cc"
  };
  // UserService.getAllUsers()
  //             .then(function(response){
  //               console.log(response);
  //             });
  // UserService.createUser(userObj)
  //             .then(function(response){
  //               console.log(response);
  //             });
  // UserService.getOneUser(userId)
  //             .then(function(response){
  //               console.log(response);
  //             });
  // UserService.updateUser(userId, updateInfo)
  //             .then(function(response){
  //               console.log(response);
  //             });
  // UserService.deleteUser(userId)
  //             .then(function(response){
  //               console.log(response);
  //             });
  // CommentService.getAllComments()
  //               .then(function(response){
  //                 console.log(response);
  //               });
  // CommentService.getCommentsFromOnePost(postId)
  //               .then(function(response){
  //                 console.log(response);
  //               });
  // CommentService.createComment(commentObj) //needs work
  //               .then(function(response){
  //                 console.log(response);
  //               });
  // CommentService.updateComment(commentId, commentUpdateInfo)
  //               .then(function(response){
  //                 console.log(response);
  //               });
  // CommentService.deleteComment(commentId)
  //               .then(function(response){
  //                 console.log(response);
  //               });
  //
  // PostService.getAllPosts()
  //             .then(function(response){
  //               console.log(response);
  //             });
  // PostService.getOnePost(postId)
  //             .then(function(response){
  //               console.log(response);
  //             });
  // PostService.createPost(postObj) //needs work
  //             .then(function(response){
  //               console.log(response);
  //             });
  // PostService.updatePost(postIdU, postUpdateInfo)
  //             .then(function(response){
  //               console.log(response);
  //             });
  // PostService.deletePost(postIdD)
  //             .then(function(response){
  //               console.log(response);
  //             });
  };
}());
