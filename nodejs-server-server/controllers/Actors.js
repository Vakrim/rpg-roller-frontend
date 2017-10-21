'use strict';

var url = require('url');

var Actors = require('./ActorsService');

module.exports.addActor = function addActor (req, res, next) {
  Actors.addActor(req.swagger.params, res, next);
};

module.exports.getActorList = function getActorList (req, res, next) {
  Actors.getActorList(req.swagger.params, res, next);
};

module.exports.showActor = function showActor (req, res, next) {
  Actors.showActor(req.swagger.params, res, next);
};
