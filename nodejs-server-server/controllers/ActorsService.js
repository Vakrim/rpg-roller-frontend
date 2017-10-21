'use strict';

exports.addActor = function(args, res, next) {
  /**
   * Add actor
   * 
   *
   * actor CombatActorPresenter actor to be added
   * returns CombatActorPresenter
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "hp" : 0,
  "id" : "aeiou",
  "statistics" : {
    "willPower" : 3,
    "weaponSkill" : 6,
    "strength" : 5,
    "toughness" : 5,
    "agility" : 2,
    "fellowship" : 2,
    "ballisticSkill" : 1,
    "intelligence" : 7,
    "perception" : 9,
    "influence" : 4
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.getActorList = function(args, res, next) {
  /**
   * Get list of possible  comat actors
   * 
   *
   * returns List
   **/
  var examples = {};
  examples['application/json'] = [ {
  "name" : "aeiou",
  "hp" : 0,
  "id" : "aeiou",
  "statistics" : {
    "willPower" : 3,
    "weaponSkill" : 6,
    "strength" : 5,
    "toughness" : 5,
    "agility" : 2,
    "fellowship" : 2,
    "ballisticSkill" : 1,
    "intelligence" : 7,
    "perception" : 9,
    "influence" : 4
  }
} ];
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.showActor = function(args, res, next) {
  /**
   * Get one specific actor
   * 
   *
   * id String actor id
   * returns CombatActorPresenter
   **/
  var examples = {};
  examples['application/json'] = {
  "name" : "aeiou",
  "hp" : 0,
  "id" : "aeiou",
  "statistics" : {
    "willPower" : 3,
    "weaponSkill" : 6,
    "strength" : 5,
    "toughness" : 5,
    "agility" : 2,
    "fellowship" : 2,
    "ballisticSkill" : 1,
    "intelligence" : 7,
    "perception" : 9,
    "influence" : 4
  }
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

