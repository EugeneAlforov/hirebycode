(function () {
  angular.module('showroom').service('UserService', UserService);

  UserService.$inject = ['$http', '$q', 'Upload', 'UserLocalService'];
  function UserService ($http, $q, upload, userLocal) {
    var userData;
    var developerFetched = false;
    var trainingCenterFetched = false;

    this.fetchTrainingCenterDetails = function () {
      if (trainingCenterFetched) {
        return $q(function (resolve) {
          resolve(userData);
        });
      } else {
        return $http.get('/api/user/training-center/details').then(function(response) {
          userData = response.data;
          trainingCenterFetched = true;
          return userData;
       });
      }
    }
    this.fetchDeveloperDetails = function () {
      if (developerFetched) {
        return $q(function (resolve) {
          resolve(userData);
        });
      } else {
        return $http.get('/api/user/developer/details').then(function(response) {
          userData = response.data;
          developerFetched = true;
          return userData;
        });
      }
    }
    this.updateDeveloperDetails = function (data) {
      return $http.put('/api/user/developer/details', data);
    }
    this.updateTrainingCenterDetails = function (data, logo) {
      if (logo) {
        data.logo = logo; 
      }
      return upload.upload({
        url: 'api/user/training-center/details',
        method: 'PUT',
        data: data
      }).then(function(response) {
        userLocal.setUser(response.data);
        return response.data;
      }, function (error) {
        console.log(error);
      });
    }
    this.getContactsById = function (userId) {
      return $http.get('/api/user/contacts/' + userId).then(function(response) {
          return response.data;
      });
    }
  }
})();