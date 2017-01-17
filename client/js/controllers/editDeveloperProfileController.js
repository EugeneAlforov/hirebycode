(function () {
  angular.module('showroom').controller('editDeveloperProfileController', EditDeveloperProfileController);

  EditDeveloperProfileController.$inject = ['$scope', 'UserService'];

  function EditDeveloperProfileController ($scope, userService) {
    userService.fetchDeveloperDetails().then(function (info) {
      $scope.info = info;
    });
    $scope.submit = function () {
      userService.updateDeveloperDetails($scope.info, $scope.newAvatar);
    }
    $scope.clearAvatar = function () {
      $scope.newAvatar = null;
    }
  }
})();