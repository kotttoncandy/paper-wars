import kaboom from "kaboom";
import events from 'events';
var eventEmitter = new events.EventEmitter();
kaboom({
    width: 1920,
    height: 850,
})

var drawingsx = []
var new_drawingsx = []
var drawingsy = []
var new_drawingsy = []
onMouseDown(() => {
    const drawing = add([
        rect(50,50),
        area(),
        pos(mousePos()),
        origin("center")
    ])
    drawingsx.push(drawing.pos.x)
    new_drawingsx = [...new Set(drawingsx)];

})