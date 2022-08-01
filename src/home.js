import { fromEvent } from 'rxjs';
import { filter, map } from 'rxjs/operators';

const getOffset = (event) => ({
  x: event.offsetX === undefined ? event.layerX : event.offsetX,
  y: event.offsetY === undefined ? event.layerY : event.offsetY
})

const home = {
  x: [50, 150],
  y: [350, 450]
}

export const stream$ = fromEvent(document, 'mousemove').pipe(
  map(getOffset),
  filter(point => point.x >= home.x[0] && point.x <= home.x[1] && point.y >= home.y[0] && point.y <= home.y[1]),
)