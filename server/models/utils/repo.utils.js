const User = require('../user.js');
const utils = {
  addTrainingCenterInfo: function (repo) {
    if (repo.trainingCenter) {
      return User.getTrainingCenterInfo(repo.trainingCenter).then(function (info) {
        repo.trainingCenterInfo = info;
        return repo;
      }).catch(function () {
        return repo;
      });
    } else {
      return repo;
    }
  },
  addAuthorInfo: function (repo) {
    return User.getDeveloperById(repo.developer).then(function(developer) {
      repo.authorInfo = {
        firstName: developer.firstName,
        lastName: developer.lastName
      }
      return repo;
    });
  }
}

module.exports = utils;
