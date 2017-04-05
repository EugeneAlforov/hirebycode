(function () {
  angular.module('showroom').component('developerInfo', {
    templateUrl: 'client/views/components/developer/developerInfo.html',
    bindings: {
      user: '<'
    },
    controller: DeveloperInfoController
  });

  DeveloperInfoController.$inject = ['UserService'];

  function DeveloperInfoController (userService) {
    var vm = this;
    vm.$onInit = function () {
      vm.avatarState = 'idle';
      userService.fetchDeveloperDetails().then(function (info) {
        vm.info = info;
        vm.accountShown = !info.hidden;
      });
    }
    vm.$onChanges = function (changes) {
    }
    vm.hideAccount = function () {
      userService.updateDeveloperAccountStatus({hidden: true}).then(function(newInfo) {
        vm.info.hidden = true;
      });
    }
    vm.showAccount = function () {
      userService.updateDeveloperAccountStatus({hidden: false}).then(function(newInfo) {
        vm.info.hidden = false;
      });
    }
    vm.updateAvatar = function (avatar) {
      vm.avatarState = 'loading';
      userService.updateDeveloperAvatar(avatar).then(function(info) {
        vm.avatarState = 'success';
        vm.info.avatar += '?' + new Date().getTime();
      }).catch(function (error) {
        vm.avatarState = 'error';
      });
    }
    vm.handleStatusChange = function () {
      userService.updateDeveloperAccountStatus({hidden: !vm.accountShown});
    }
  }
})();