import { interval } from 'rxjs';
import { scan, take } from 'rxjs/operators';

const stream$ = interval(1000)
  .pipe(
    scan((acc, cur) => [...acc, acc[acc.length - 1] + acc[acc.length - 2]], [1, 2]),
    take(10)
  );


stream$.subscribe({
  next: array => console.log(array[array.length - 3]),
  complete: () => console.log('Complete')
})