(function() {
  angular.module('ngBlog')
          .factory('UserService', UserService);
  UserService.$inject = ['$http'];

  function UserService($http){
    var baseURL = 'https://calm-atoll-49293.herokuapp.com/users/';

    var service = {
      getAllUsers: getAllUsers, //probably get rid of this route
      createUser: createUser,
      getOneUser: getOneUser,
      updateUser: updateUser,
      deleteUser: deleteUser,
    };
    return service;

  function getAllUsers(){
    return $http.get(baseURL);
  };
  function createUser(userObj){
    return $http.post(baseURL, userObj);
  };
  function getOneUser(userId){
    return $http.get(baseURL + userId);
  };
  function updateUser(userId, updateInfo){
    return $http.put(baseURL + userId, updateInfo);
  };
  function deleteUser(userId){
    return $http.delete(baseURL + userId);
  };
};
}());
