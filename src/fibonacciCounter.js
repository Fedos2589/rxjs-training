import { interval } from 'rxjs';
import { map, scan } from 'rxjs/operators';

export const stream$ = interval(1000)
  .pipe(
    scan((acc) => {
      const firstElement = acc[acc.length - 2];
      const secondElement = acc[acc.length - 1];
      return [firstElement, secondElement, firstElement + secondElement]
    }, [1, 2]),
    map(array => array[0])
  );
