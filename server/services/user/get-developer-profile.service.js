const User = require('../../models/user');
const ObjectId = require('mongodb').ObjectId;

module.exports = function getDeveloperProfile ({ userId, withContacts }) {
  const sQuery = { _id: ObjectId(userId) };
  let projection = 'firstName lastName hidden placeId skills profileReadyForPublic avatar trainingCenters';
  if (withContacts) {
    projection += ' contacts'
  }
  return User.findOne(sQuery, projection)
    .populate('skills')
    .populate('trainingCenters')
    .then((user) => {

    return user.toObject();
  });
}