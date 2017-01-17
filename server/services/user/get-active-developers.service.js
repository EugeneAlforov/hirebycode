const User = require('../../models/user');

module.exports = function getActiveDevelopers () {
  const sQuery = {
    type: 'developer',
    'repos.0': {$exists: true}
  };
  return User.find(sQuery).then((developers) => {
    return developers;
  });
}