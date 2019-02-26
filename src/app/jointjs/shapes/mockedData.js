var mockedData = [
  {
    id: 1,
    name: 'Define',
    data: {
      cells: [
        {
          id: '1',
          type: 'app.DynamicBoxDefine',
          options: [
            {
              id: joint.util.uuid(),
              label: 'Option 1',
              color: '#1389ff'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 2',
              color: '#ff293d'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 3',
              color: '#31ff2f'
            }
          ]
        },
        {
          id: '2',
          type: 'app.DynamicBoxDefine',
          options: [
            {
              id: joint.util.uuid(),
              label: 'Option 1',
              color: '#1389ff'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 2',
              color: '#ff293d'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 3',
              color: '#31ff2f'
            }
          ]
        },
        {
          id: '3',
          type: 'app.DynamicBoxDefine',
          options: [
            {
              id: joint.util.uuid(),
              label: 'Option 1',
              color: '#1389ff'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 2',
              color: '#ff293d'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 3',
              color: '#31ff2f'
            }
          ]
        },
        {
          id: '4',
          type: 'app.DynamicBoxDefine',
          options: [
            {
              id: joint.util.uuid(),
              label: 'Option 1',
              color: '#1389ff'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 2',
              color: '#ff293d'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 3',
              color: '#31ff2f'
            }
          ]
        },
        {
          type: 'link',
          source: {
            id: '1'
          },
          target: {
            id: '2'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'link',
          source: {
            id: '1'
          },
          target: {
            id: '3'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'link',
          source: {
            id: '3'
          },
          target: {
            id: '4'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        }
      ]
    }
  },
  {
    id: 2,
    name: 'Class',
    data: {
      cells: [
        {
          id: '1',
          type: 'app.DynamicBoxClass',
          options: [
            {
              id: joint.util.uuid(),
              label: 'Option 1',
              color: '#1389ff'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 2',
              color: '#ff293d'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 3',
              color: '#31ff2f'
            }
          ]
        },
        {
          id: '2',
          type: 'app.DynamicBoxClass',
          options: [
            {
              id: joint.util.uuid(),
              label: 'Option 1',
              color: '#1389ff'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 2',
              color: '#ff293d'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 3',
              color: '#31ff2f'
            }
          ]
        },
        {
          id: '3',
          type: 'app.DynamicBoxClass',
          options: [
            {
              id: joint.util.uuid(),
              label: 'Option 1',
              color: '#1389ff'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 2',
              color: '#ff293d'
            },
            {
              id: joint.util.uuid(),
              label: 'Option 3',
              color: '#31ff2f'
            }
          ]
        },
        {
          type: 'link',
          source: {
            id: '1'
          },
          target: {
            id: '2'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'link',
          source: {
            id: '1'
          },
          target: {
            id: '3'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        }
      ]
    }
  },
  {
    id: 3,
    name: 'Built-In',
    data: {
      cells: [
        {
          id: 'A',
          type: 'dia.Element',
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'text',
              selector: 'label'
            }
          ],
          size: {
            width: 80,
            height: 80
          },
          attrs: {
            body: {
              refWidth: '100%',
              refHeight: '100%',
              fill: 'ivory',
              stroke: 'gray',
              strokeWidth: 2,
              rx: 10,
              ry: 10
            },
            label: {
              text: 'A',
              refX: '50%',
              refY: '50%',
              yAlignment: 'middle',
              xAlignment: 'middle',
              fontSize: 30
            }
          }
        },
        {
          id: 'B',
          type: 'dia.Element',
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'text',
              selector: 'label'
            }
          ],
          size: {
            width: 80,
            height: 80
          },
          attrs: {
            body: {
              refWidth: '100%',
              refHeight: '100%',
              fill: 'ivory',
              stroke: 'gray',
              strokeWidth: 2,
              rx: 10,
              ry: 10
            },
            label: {
              text: 'B',
              refX: '50%',
              refY: '50%',
              yAlignment: 'middle',
              xAlignment: 'middle',
              fontSize: 30
            }
          }
        },
        {
          id: 'C',
          type: 'dia.Element',
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'text',
              selector: 'label'
            }
          ],
          size: {
            width: 80,
            height: 80
          },
          attrs: {
            body: {
              refWidth: '100%',
              refHeight: '100%',
              fill: 'ivory',
              stroke: 'gray',
              strokeWidth: 2,
              rx: 10,
              ry: 10
            },
            label: {
              text: 'C',
              refX: '50%',
              refY: '50%',
              yAlignment: 'middle',
              xAlignment: 'middle',
              fontSize: 30
            }
          }
        },
        {
          id: 'D',
          type: 'dia.Element',
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'text',
              selector: 'label'
            }
          ],
          size: {
            width: 80,
            height: 80
          },
          attrs: {
            body: {
              refWidth: '100%',
              refHeight: '100%',
              fill: 'ivory',
              stroke: 'gray',
              strokeWidth: 2,
              rx: 10,
              ry: 10
            },
            label: {
              text: 'D',
              refX: '50%',
              refY: '50%',
              yAlignment: 'middle',
              xAlignment: 'middle',
              fontSize: 30
            }
          }
        },
        {
          id: 'E',
          type: 'dia.Element',
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'text',
              selector: 'label'
            }
          ],
          size: {
            width: 80,
            height: 80
          },
          attrs: {
            body: {
              refWidth: '100%',
              refHeight: '100%',
              fill: 'ivory',
              stroke: 'gray',
              strokeWidth: 2,
              rx: 10,
              ry: 10
            },
            label: {
              text: 'E',
              refX: '50%',
              refY: '50%',
              yAlignment: 'middle',
              xAlignment: 'middle',
              fontSize: 30
            }
          }
        },
        {
          id: 'F',
          type: 'dia.Element',
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'text',
              selector: 'label'
            }
          ],
          size: {
            width: 80,
            height: 80
          },
          attrs: {
            body: {
              refWidth: '100%',
              refHeight: '100%',
              fill: 'ivory',
              stroke: 'gray',
              strokeWidth: 2,
              rx: 10,
              ry: 10
            },
            label: {
              text: 'F',
              refX: '50%',
              refY: '50%',
              yAlignment: 'middle',
              xAlignment: 'middle',
              fontSize: 30
            }
          }
        },
        {
          id: 'G',
          type: 'dia.Element',
          markup: [
            {
              tagName: 'rect',
              selector: 'body'
            },
            {
              tagName: 'text',
              selector: 'label'
            }
          ],
          size: {
            width: 80,
            height: 80
          },
          attrs: {
            body: {
              refWidth: '100%',
              refHeight: '100%',
              fill: 'ivory',
              stroke: 'gray',
              strokeWidth: 2,
              rx: 10,
              ry: 10
            },
            label: {
              text: 'G',
              refX: '50%',
              refY: '50%',
              yAlignment: 'middle',
              xAlignment: 'middle',
              fontSize: 30
            }
          }
        },
        {
          type: 'org.Arrow',
          source: {
            id: 'A'
          },
          target: {
            id: 'C'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'org.Arrow',
          source: {
            id: 'A'
          },
          target: {
            id: 'B'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'org.Arrow',
          source: {
            id: 'B'
          },
          target: {
            id: 'F'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'org.Arrow',
          source: {
            id: 'B'
          },
          target: {
            id: 'G'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'org.Arrow',
          source: {
            id: 'G'
          },
          target: {
            id: 'D'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        },
        {
          type: 'org.Arrow',
          source: {
            id: 'C'
          },
          target: {
            id: 'E'
          },
          attrs: {
            '.connection': {
              'fill': 'none',
              'stroke-linejoin': 'round',
              'stroke-width': '2',
              'stroke': '#4b4a67'
            }
          }
        }
      ]
    }
  }
];
