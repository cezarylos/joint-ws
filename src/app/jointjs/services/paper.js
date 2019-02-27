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
        var clickPoint = paper.clientToLocalPoint(e.clientX, e.clientY);
        circle.attributes.position.x = clickPoint.x - circle.attributes.size.width / 2;
        circle.attributes.position.y = clickPoint.y - circle.attributes.size.height / 2;
        circle.addTo(graph);
    });

    paper.on('cell:mouseover', function (cellView) {
        cellView.highlight();
    });

    paper.on('cell:mouseout', function (cellView) {
        cellView.unhighlight();
    });

    paper.on({
        position: null,
        'element:pointerdown': function (cellView) {
            this.position = cellView.model.position();
        },
        'element:pointerup': function (cellView, evt, x, y) {
            var point = new g.Point(x, y);
            var collision = graph.findModelsFromPoint(point).filter(elem => elem.id !== cellView.model.id);
            if (!collision.length) {
                return;
            }
            cellView.model.set('position', {x: this.position.x, y: this.position.y});
            alert('GUWNO W RYJU');
        }
    });

    // paper.drawBackground({color: 'white'});
    // paper.drawGrid({color: 'red'});
    // paper.setGridSize(20);
    return {
        paper: paper
    };
};
