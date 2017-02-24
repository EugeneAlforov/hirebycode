FiltersService.$inject = ['$http', '$q', 'SkillsService', 'TrainingCentersService', 'LocationsService'];
app.service('FiltersService', FiltersService);

function FiltersService ($http, $q, skillsService, trainingCentersService, locationService) {
  var fetched;
  var filtersList ={};
  var filters =  {
    skill: {},
    school: null,
    location: null,
    flattenFilters: []
  };

  this.loadFiltersLists = function () {
    if (fetched) {
      return $q.resolve(filtersList);
    } else {
      return $q.all([this.loadSchoolsList(), this.loadSkillsList(), this.loadLocationsList()])
      .then(function () {
        fetched = true;
        return filtersList;
      });
    }
  };
  this.loadSkillsList = function () {
    return skillsService.getSkills().then(function (skillsList) {
      filtersList.skills = skillsList;
      return skillsList;
    });
  };
  this.loadSchoolsList = function () {
    return trainingCentersService.getAll().then(function (trainingCenters) {
      filtersList.schools = trainingCenters;
      return trainingCenters;
    });
  };
  this.loadLocationsList = function () {
    return locationService.getLocations().then(function (locations) {
      filtersList.locations = locations;
      return locations;
    });
  };
  this.createFiltersFromState = function (stateParams) {
    this.createSkillFiltersFromState(stateParams);
    this.createSchoolFiltersFromState(stateParams);

    return $q.resolve(filters);
  };
  this.createSkillFiltersFromState = function (stateParams) {
    if (stateParams.skillFilter) {
      stateParams.skillFilter.split(',').reduce(function (filters, skillId) {
        var skillInfo = filtersList.skills.find(function(currentSkill) {
          return currentSkill._id === skillId;
        });
        filters.skill[skillId] = skillInfo;
        filters.flattenFilters.push({
          _id: skillInfo._id,
          type: 'skill',
          text: skillInfo.name
        });
        return filters;
      }, filters);
    }
  };

  this.createSchoolFiltersFromState = function (stateParams) {
    var schoolId = stateParams.schoolFilter;
    var schoolInfo;

    if (!schoolId) {
      return;
    };

    schoolInfo = filtersList.schools.find(function(currentSchool) {
      return currentSchool._id === schoolId;
    });

    filters.school = schoolInfo;
    filters.flattenFilters.push({
      _id: schoolInfo._id,
      type: 'school',
      text: schoolInfo.name
    });
  }

  this.addSkillToFilters = function (skill) {
    if (filters.skill[skill._id]) {
      return $q.resolve(filters);
    }
    filters.skill[skill._id] = skill;
    filters.flattenFilters.push({
      text: skill.name,
      _id: skill._id,
      type: 'skill'
    });
    return $q.resolve(filters);
  };

  this.addSchoolToFilters = function (school) {
    this.clearSchoolFilter();
    filters.school = school;

    filters.flattenFilters.push({
      text: school.name,
      _id: school._id,
      type: 'school'
    });
    return $q.resolve(filters);
  };

  this.addLocationToFilters = function (location) {
    this.clearLocationFilter();
    filters.location = location;

    filters.flattenFilters.push({
      text: location.city + ', ' + location.country,
      _id: location._id,
      type: 'location'
    });
    return $q.resolve(filters);
  };

  this.removeFilter = function(filter) {
    switch (filter.type) {
      case 'skill':
        delete filters.skill[filter._id];
        var index = filters.flattenFilters.indexOf(filter);
        if (index > -1) {
          filters.flattenFilters.splice(index, 1);
        }
        break;
      case 'school':
        this.clearSchoolFilter();
        break;
      case 'location':
        this.clearLocationFilter();
    }

    return $q.resolve(filters);
  };

  this.clearSchoolFilter = function () {
    filters.school = null;
    filters.flattenFilters= filters.flattenFilters.filter(function (filter) {
      return filter.type !== 'school';
    });
  }

  this.clearLocationFilter = function () {
    filters.location = null;
    filters.flattenFilters= filters.flattenFilters.filter(function (filter) {
      return filter.type !== 'location';
    });
  }
}