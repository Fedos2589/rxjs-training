import { interval } from 'rxjs';
import { groupBy, take, map } from 'rxjs/operators';

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export const stream$ = interval(1000).pipe(
	map(value => value + 1),
  take(9),
  groupBy(
    value => value % 9,
    value => arr.map(v => `${value} * ${v} = ${v * value}`).join(', '),
 	),
)
