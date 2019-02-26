'use strict';
var AppModule = AppModule || {};
AppModule.joint = AppModule.joint || {};

AppModule.joint.Graph = function () {
  var graph = new joint.dia.Graph();

  return {
    graph: graph
  };
};
