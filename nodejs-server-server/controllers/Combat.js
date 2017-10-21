'use strict';

var url = require('url');

var Combat = require('./CombatService');

module.exports.addActorsToCombat = function addActorsToCombat (req, res, next) {
  Combat.addActorsToCombat(req.swagger.params, res, next);
};

module.exports.addCombat = function addCombat (req, res, next) {
  Combat.addCombat(req.swagger.params, res, next);
};

module.exports.removeActorsFromCombat = function removeActorsFromCombat (req, res, next) {
  Combat.removeActorsFromCombat(req.swagger.params, res, next);
};
