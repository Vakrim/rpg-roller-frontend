'use strict';

exports.addActorsToCombat = function(args, res, next) {
  /**
   * Add actors to combat
   * 
   *
   * actorIds AddActorsToCombatParameters list of actor ids to be added
   * combatId String combat id
   * returns CombatPresenter
   **/
  var examples = {};
  examples['application/json'] = {
  "actors" : [ {
    "currentHealth" : 0,
    "actor" : {
      "name" : "aeiou",
      "hp" : 1,
      "id" : "aeiou",
      "statistics" : {
        "willPower" : 4,
        "weaponSkill" : 5,
        "strength" : 2,
        "toughness" : 7,
        "agility" : 9,
        "fellowship" : 7,
        "ballisticSkill" : 5,
        "intelligence" : 3,
        "perception" : 2,
        "influence" : 1
      }
    },
    "name" : "aeiou",
    "initiaive" : 6.02745618307040320615897144307382404804229736328125,
    "id" : "aeiou"
  } ],
  "id" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.addCombat = function(args, res, next) {
  /**
   * Create new combat
   * 
   *
   * combat CreateCombatParameters combat parameters
   * returns CombatPresenter
   **/
  var examples = {};
  examples['application/json'] = {
  "actors" : [ {
    "currentHealth" : 0,
    "actor" : {
      "name" : "aeiou",
      "hp" : 1,
      "id" : "aeiou",
      "statistics" : {
        "willPower" : 4,
        "weaponSkill" : 5,
        "strength" : 2,
        "toughness" : 7,
        "agility" : 9,
        "fellowship" : 7,
        "ballisticSkill" : 5,
        "intelligence" : 3,
        "perception" : 2,
        "influence" : 1
      }
    },
    "name" : "aeiou",
    "initiaive" : 6.02745618307040320615897144307382404804229736328125,
    "id" : "aeiou"
  } ],
  "id" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

exports.removeActorsFromCombat = function(args, res, next) {
  /**
   * Remove actors from combat
   * 
   *
   * combat RemoveActorsFromCombatParameters list of actor ids to be removed
   * combatId String combat id
   * returns CombatPresenter
   **/
  var examples = {};
  examples['application/json'] = {
  "actors" : [ {
    "currentHealth" : 0,
    "actor" : {
      "name" : "aeiou",
      "hp" : 1,
      "id" : "aeiou",
      "statistics" : {
        "willPower" : 4,
        "weaponSkill" : 5,
        "strength" : 2,
        "toughness" : 7,
        "agility" : 9,
        "fellowship" : 7,
        "ballisticSkill" : 5,
        "intelligence" : 3,
        "perception" : 2,
        "influence" : 1
      }
    },
    "name" : "aeiou",
    "initiaive" : 6.02745618307040320615897144307382404804229736328125,
    "id" : "aeiou"
  } ],
  "id" : "aeiou"
};
  if (Object.keys(examples).length > 0) {
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(examples[Object.keys(examples)[0]] || {}, null, 2));
  } else {
    res.end();
  }
}

