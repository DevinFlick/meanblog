(function() {
  angular.module('ngBlog')
          .factory('PostService', PostService);
  PostService.$inject = ['$http'];

  function PostService($http){
    var baseURL ='https://calm-atoll-49293.herokuapp.com/posts/';

    var service = {
      getAllPosts: getAllPosts,
      getOnePost: getOnePost,
      createPost: createPost,
      updatePost: updatePost,
      deletePost: deletePost,
    };
    return service;

    function getAllPosts(){
      return $http.get(baseURL);
    };
    function getOnePost(postId){
      return $http.get(baseURL + postId);
    };
    function createPost(postObj){
      return $http.post(baseURL, postObj);
    };
    function updatePost(postId, postUpdateInfo){
      return $http.put(baseURL + postId, postUpdateInfo);
    };
    function deletePost(postId){
      return $http.delete(baseURL + postId);
    };
  };
}());
