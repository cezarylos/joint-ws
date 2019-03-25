'use strict';
var AppModule = AppModule || {};
AppModule.joint = AppModule.joint || {};

AppModule.joint.Paper = function (elementId, graph) {
    var _el = $(' .' + AppModule.variables.app.paperClass);
    var paper = new joint.dia.Paper({
        el: _el,
        width: 1000,
        height: 600,
        model: graph,
        gridSize: 5,
        drawGrid: {
            color: 'red',
            name: 'fixedDot' // dot, fixedDot, mesh, doubleMesh

        },
        perpendicularLinks: true,
        restrictTranslate: true
    });

    // User
    var user = new joint.shapes.standard.Circle();
    user.resize(50, 50);
    user.attr({
        label: {
            text: 'User',
            fill: 'black'
        },
    });

    // WebClient
    var webClient = new joint.shapes.standard.Rectangle({
        size: {
            width: 120,
            height: 60
        }
    });
    webClient.attr({
        label: {
            text: 'Web Client',
            fill: 'black'
        },
    });

    // AWS Container
    var awsContainer = new joint.shapes.standard.Rectangle({
        size: {
            width: 300,
            height: 300
        }
    });
    awsContainer.attr({
        label: {
            text: 'AWS',
            fill: 'black'
        },
    });

    // API Gateway
    var apiGateway = new joint.shapes.standard.Rectangle({
        size: {
            width: 120,
            height: 60
        }
    });
    apiGateway.attr({
        label: {
            text: 'API Gateway',
            fill: 'black'
        },
    });

    // AWS Lambda
    var awsLambda = new joint.shapes.standard.Rectangle({
        size: {
            width: 120,
            height: 60
        }
    });
    awsLambda.attr({
        label: {
            text: 'AWS Lambda',
            fill: 'black'
        },
    });

    // S3 Bucket
    var s3Bucket = new joint.shapes.standard.Rectangle({
        size: {
            width: 120,
            height: 60
        }
    });
    s3Bucket.attr({
        label: {
            text: 'S3',
            fill: 'black'
        },
    });

    var embeddedShapes = [apiGateway, awsLambda, s3Bucket];
    var embeddedShapesIdxs = embeddedShapes.map(shape => shape.id);

    // Embedding shapes
    paper.on({
        'element:pointerup': function (cellView, evt, x, y) {
            if (!~(embeddedShapesIdxs.indexOf(cellView.model.id))) {
                return;
            }
            var collision = graph.findModelsInArea({
                x: x,
                y: y,
                width: awsContainer.attributes.width,
                height: awsContainer.attributes.height
            }).filter(elem => elem.id !== cellView.model.id);
            if (!collision.length) {
                return;
            }
            if (collision[0].id !== awsContainer.id) {
                return;
            }
            awsContainer.embed(cellView.model);
        }
    });


    // var c1 = new joint.shapes.devs.Coupled({
    //     position: {
    //         x: 230,
    //         y: 50
    //     },
    //     size: {
    //         width: 300,
    //         height: 300
    //     }
    // });
    //
    // c1.set('inPorts', ['in']);
    // c1.set('outPorts', ['out 1', 'out 2']);
    //
    // var a1 = new joint.shapes.devs.Atomic({
    //     position: {
    //         x: 360,
    //         y: 260
    //     },
    //     inPorts: ['xy'],
    //     outPorts: ['x', 'y']
    // });
    //
    // var a2 = new joint.shapes.devs.Atomic({
    //     position: {
    //         x: 50,
    //         y: 160
    //     },
    //     outPorts: ['out']
    // });
    //
    // var a3 = new joint.shapes.devs.Atomic({
    //     position: {
    //         x: 650,
    //         y: 50
    //     },
    //     size: {
    //         width: 100,
    //         height: 300
    //     },
    //     inPorts: ['a', 'b']
    // });

    var allShapes = [user, webClient, awsContainer, ...embeddedShapes];

    graph.addCells(allShapes);

    return {
        paper: paper
    };
};
