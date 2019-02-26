'use strict';
var AppModule = AppModule || {};
AppModule.joint = AppModule.joint || {};

AppModule.joint.Paper = function (elementId, graph) {
  var _el = $(' .' + AppModule.variables.app.paperClass);
  var paper = new joint.dia.Paper({
    el: _el,
    width: 1000,
    height: 200,
    model: graph,
    gridSize: 5,
    drawGrid: {
      color: 'red',
      name: 'fixedDot' // dot, fixedDot, mesh, doubleMesh

    },
    perpendicularLinks: true,
    restrictTranslate: true
  });

  // Pokazac ze to moga byc obiekty
  paper.on('blank:contextmenu', function (e) {
    var circle = new joint.shapes.standard.Circle();
    circle.resize(100, 40);
    circle.attr({
      body: {
        fill: 'blue'
      },
      label: {
        text: 'Hello',
        fill: 'white'
      },
    });
    var clickPoint = paper.clientToLocalPoint(e.clientX , e.clientY);
    circle.attributes.position.x = clickPoint.x - circle.attributes.size.width / 2;
    circle.attributes.position.y = clickPoint.y - circle.attributes.size.height / 2;
    validateCirclePosition(circle);
    circle.addTo(graph);
  });

  paper.on('cell:mouseover', function(cellView) {
    cellView.highlight();
  });

  paper.on('cell:mouseout', function(cellView) {
    cellView.unhighlight();
  });

  var validateCirclePosition = function(circle) {
    var allElementsPositions = graph.getCells().map(child => child.attributes.position);
    var elementCollision = allElementsPositions.find(element => {
      var circleX = circle.attributes.position.x;
      var circleXSize = circle.attributes.size.width / 2;
      var circleY = circle.attributes.position.y;
      var circleYSize = circle.attributes.size.height / 2;
      var collisionInX = circleX - circleXSize < element.x && circleX + circleXSize > element.x;
      var collisionInY = circleY - circleYSize < element.y && circleY + circleYSize > element.y;
      return  collisionInX && collisionInY;
    });
    if (elementCollision) {
      console.log(123);
    }
  };

  paper.on('cell:pointerup', function (cellView, evt, x, y) {
    var allElementsPositions = graph.getCells().map(child => child.attributes.position);
    var collision = allElementsPositions.find(el => el.x === x && el.y === y);
    console.log(allElementsPositions, x, y);
  });

  // paper.drawBackground({color: 'white'});
  // paper.drawGrid({color: 'red'});
  // paper.setGridSize(20);
  return {
    paper: paper
  };
};
