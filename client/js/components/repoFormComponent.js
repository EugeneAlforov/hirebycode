(function () {
  angular.module('showroom').component('repoForm', {
    templateUrl: 'client/views/components/repoForm.html',
    bindings: {
      repo: '=',
      submitCallback: '&'
    },
    controller: function ($scope, SkillsService) {
      this.submit = function () {
        this.repo.languages = getEnteredSkills(this.skills);
        this.submitCallback();
      }
      SkillsService.getSkills().then(function (skills) {
        this.skills = formSkillsList(skills, this.repo);
      }.bind(this));
    }
  });
  function getEnteredSkills (skills) {
    return skills.reduce(function (finalList, skill) {
      if (skill.used) {
        finalList.push(skill.name);
      }
      return finalList;
    }, []);
  }
  function formSkillsList (skillsArray, repo) {
    return skillsArray.map(function(skillName) {
      return {
        name: skillName,
        used: repo.languages.indexOf(skillName) > -1
      };
    });
  }
}());

