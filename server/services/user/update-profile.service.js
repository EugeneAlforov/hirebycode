const User = require('../../models/user');
const ObjectId = require('mongodb').ObjectId;

module.exports = function (userId, data) {
  const sQuery = {
    _id: ObjectId(userId)
  }
  const uQuery = {
    contacts: data.contacts,
    firstName: data.firstName,
    lastName: data.lastName,
    location: data.location
  }

  return User.findOneAndUpdate(sQuery, uQuery, { new: true })
    .then((user) => {
      return User.findOneAndUpdate(sQuery, { profileReadyForPublic: checkIsReadyForPublic(user) }, {new: true});
  });
}

function checkIsReadyForPublic (user) {
  const { firstName, lastName, contacts, location } = user;
  return firstName && lastName && contacts && location;
}