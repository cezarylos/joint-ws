'use strict';
var AppModule = window.AppModule || {};

AppModule.AppView = function (elementId) {
  var _AppView = joint.mvc.View.extend({
    el: elementId,

    init: function () {
      joint.setTheme('material');

      this.initializeGraph();
      this.initializePaper();
      this.initializeLayout();
    },

    initializeGraph: function () {
      this.graphService = new AppModule.joint.Graph();
    },

    initializePaper: function () {
      this.paperService = new AppModule.joint.Paper(elementId, this.graphService.graph);
    },

    initializeLayout: function () {
      joint.layout.DirectedGraph.layout(this.graphService.graph.getCells(), {
        nodeSep: 20,
        edgeSep: 20,
        rankDir: 'TB'
      });

      var getContentArea = this.paperService.paper.getContentArea();
      var getArea = this.paperService.paper.getArea();
      var tx = (getArea.width - getContentArea.width) / 2;
      var ty = (getArea.height - getContentArea.height) / 2;
      this.paperService.paper.translate(tx, ty);
    }

  });

  return new _AppView();
};
