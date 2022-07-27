import { interval } from 'rxjs';
import { scan, take, map } from 'rxjs/operators';

export const fibonacciStream$ = interval(1000)
  .pipe(
    scan((acc, cur) => [...acc, acc[acc.length - 1] + acc[acc.length - 2]], [1, 2]),
    take(10),
    map(array => array[array.length - 3])
  );

// fibonacciStream$.subscribe({
//   next: console.log,
//   complete: () => console.log('Complete')
// })