'use strict';
var AppModule = AppModule || {};
AppModule.joint = AppModule.joint || {};

AppModule.joint.Paper = function (elementId, graph) {
	var _el = $(' .' + AppModule.variables.app.paperClass);
	var paper = new joint.dia.Paper({
		el: _el,
		width: 1600,
		height: 800,
		model: graph,
		gridSize: 5,
		drawGrid: {
			color: 'red',
			name: 'fixedDot' // dot, fixedDot, mesh, doubleMesh

		},
		linkPinning: false,
		markAvailable: true,
		snapLinks: {
			radius: 20
		},
		highlighting: {
			magnetAvailability: {
				name: 'stroke',
				options: {
					attrs: {
						'stroke-width': 3,
						stroke: '#cf36e7'
					}
				}
			}
		},
		validateConnection: function (cellViewS, magnetS, cellViewT, magnetT) {

			const validateSource = function (element) {
				return cellViewS.model.id === element.id
			};

			const validateTarget = function (element) {
				return cellViewT.model.id === element.id
			};

			const validateMagnetS = function (targetPortGroup) {
				if (!magnetS) {
					return;
				}
				return magnetS.getAttribute('port-group') === targetPortGroup;
			};

			const validateMagnetT = function (targetPortGroup) {
				if (!magnetT) {
					return;
				}
				return magnetT.getAttribute('port-group') === targetPortGroup;
			};

			const connectionValidation = function (elemS, elemT, portGroupS, portGroupT) {
				const linkAlreadyExists = graph.getLinks().find(link => {
					return link.attributes.source.id === elemS.id && link.attributes.target.id === elemT.id;
				});
				return validateSource(elemS) && validateTarget(elemT) && validateMagnetS(portGroupS) &&
						validateMagnetT(portGroupT) && !linkAlreadyExists
			};

			// User -> WebClient
			if (validateSource(user)) {
				return connectionValidation(user, webClient, 'out', 'in-user');
			}

			// WebClient -> AWS Container;
			if (validateSource(webClient)) {
				return connectionValidation(webClient, awsContainer, 'out', 'in');
			}

			// AWS Container -> API Gateway || AWS Container -> WebClient;
			if (validateSource(awsContainer)) {
				return connectionValidation(awsContainer, apiGateway, 'in', 'in') ||
						connectionValidation(awsContainer, webClient, 'out', 'in-aws-cont');
			}

			// API Gateway -> AWS Lambda;
			if (validateSource(apiGateway)) {
				return connectionValidation(apiGateway, awsLambda, 'out', 'in-api-gateway');
			}

			// AWS Lambda -> S3 || AWS Lambda -> AWS Container;
			if (validateSource(awsLambda)) {
				return connectionValidation(awsLambda, s3Bucket, 'out-s3', 'in') ||
						connectionValidation(awsLambda, awsContainer, 'out-aws-cont', 'out');
			}

			// S3 -> AWS Lambda;
			if (validateSource(s3Bucket)) {
				return connectionValidation(s3Bucket, awsLambda, 'out', 'in-s3');
			}
		}
	});

	// User
	var user = new joint.shapes.standard.Circle({
		size: {
			height: 50,
			width: 50
		},
		attrs: {
			label: {
				text: 'User',
				fill: 'black'
			}
		},
		ports: {
			groups: {
				'out': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'right'
					}
				}
			},
			items: [
				{group: 'out'}
			]
		},
	}, {
		portLabelMarkup: [
			{
				tagName: 'text',
				selector: 'label'
			}
		]
	});

	// WebClient
	var webClient = new joint.shapes.standard.Rectangle({
		size: {
			width: 120,
			height: 60
		},
		attrs: {
			label: {
				text: 'Web Client',
				fill: 'black'
			}
		},
		ports: {
			groups: {
				'in-user': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'left'
					},
					label: {
						position: {
							name: 'left'
						}
					}
				},
				'in-aws-cont': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'top'
					},
					label: {
						position: {
							name: 'top'
						}
					}
				},
				'out': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'right'
					},
					label: {
						position: {
							name: 'right'
						}
					}
				}
			},
			items: [
				{group: 'in-user'},
				{group: 'in-aws-cont'},
				{group: 'out'}
			]
		}
	});

	// AWS Container
	var awsContainer = new joint.shapes.standard.Rectangle({
		size: {
			height: 300,
			width: 500
		},
		attrs: {
			label: {
				text: 'AWS',
				fill: 'black'
			}
		},
		ports: {
			groups: {
				'in': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 16
							}
						}
					],
					attrs: {
						text: {text: 'in'},
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'left',
						args: {
							y: 200
						}
					},
					label: {
						position: {
							name: 'left',
							args: {
								x: 8
							}
						},
					}
				},
				'out': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 16
							}
						}
					],
					attrs: {
						text: {text: 'out'},
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'left',
						args: {
							x: 0,
							y: 100
						}
					},
					label: {
						position: {
							name: 'left',
							args: {
								x: 8
							}
						}
					}
				}
			},
			items: [
				{group: 'in'},
				{group: 'out'}
			]
		},
	}, {
		portLabelMarkup: [
			{
				tagName: 'text',
				selector: 'label'
			}
		]
	});

	// API Gateway
	var apiGateway = new joint.shapes.standard.Rectangle({
		size: {
			width: 120,
			height: 60
		},
		attrs: {
			label: {
				text: 'API Gateway',
				fill: 'black'
			}
		},
		ports: {
			groups: {
				'in': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'left'
					}
				},
				'out': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'right'
					}
				}
			},
			items: [
				{group: 'in'},
				{group: 'out'}
			]
		},
	});

	// AWS Lambda
	var awsLambda = new joint.shapes.standard.Rectangle({
		size: {
			width: 120,
			height: 60
		},
		attrs: {
			label: {
				text: 'AWS Lambda',
				fill: 'black'
			}
		},
		ports: {
			groups: {
				'in-api-gateway': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'left'
					},
					label: {
						position: {
							name: 'left'
						}
					}
				},
				'in-s3': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'right'
					}
				},
				'out-aws-cont': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'top'
					},
					label: {
						position: {
							name: 'top'
						}
					}
				},
				'out-s3': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'right'
					},
					label: {
						position: {
							name: 'right'
						}
					}
				}
			},
			items: [
				{group: 'in-api-gateway'},
				{group: 'in-s3'},
				{group: 'out-s3'},
				{group: 'out-aws-cont'}
			]
		}
	});

	// S3 Bucket
	var s3Bucket = new joint.shapes.standard.Rectangle({
		size: {
			width: 120,
			height: 60
		},
		attrs: {
			label: {
				text: 'S3',
				fill: 'black'
			}
		},
		ports: {
			groups: {
				'in': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'left'
					}
				},
				'out': {
					markup: [
						{
							tagName: 'circle',
							selector: 'portBody',
							attributes: {
								'r': 8
							}
						}
					],
					attrs: {
						portBody: {
							magnet: true,
							fill: '#ffffff',
							stroke: '#000000',
							strokeWidth: 2
						},
						portLabel: {
							fontSize: 11,
							fill: '#000000',
							fontWeight: 800
						}
					},
					position: {
						name: 'left'
					}
				}
			},
			items: [
				{group: 'in'},
				{group: 'out'}
			]
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
				return awsContainer.unembed(cellView.model);
			}
			if (collision[0].id !== awsContainer.id) {
				return;
			}
			awsContainer.embed(cellView.model);
		}
	});

	var allShapes = [user, webClient, awsContainer, ...embeddedShapes];

	graph.addCells(allShapes);

	return {
		paper: paper
	};
};
