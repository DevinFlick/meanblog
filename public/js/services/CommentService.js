(function() {
  angular.module('ngBlog')
          .factory('CommentService', CommentService);
  CommentService.$inject = ['$http'];

  function CommentService($http){
    var baseURL = 'https://calm-atoll-49293.herokuapp.com/comments/';

    var service = {
      getAllComments: getAllComments,
      getCommentsFromOnePost: getCommentsFromOnePost,
      createComment: createComment,
      updateComment: updateComment,
      deleteComment: deleteComment,
    };
    return service;

    function getAllComments(){
      return $http.get(baseURL);
    };
    function getCommentsFromOnePost(postId){
      return $http.get(baseURL + postId);
    };
    function createComment(commentObj){
      return $http.post(baseURL, commentObj);
    };
    function updateComment(commentId, commentUpdateInfo){
      return $http.put(baseURL + commentId, commentUpdateInfo);
    };
    function deleteComment(commentId){
      return $http.delete(baseURL + commentId);
    };
  };
}());
