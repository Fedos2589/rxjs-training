import { filter, fromEvent, map, merge, startWith, withLatestFrom } from 'rxjs';
import { stream$ as counter$ } from './counter';
import { stream$ as fibonaciCounter$ } from './fibonacciCounter';

const change$ = fromEvent(document.getElementById('checkbox'), 'change')
  .pipe(
    map(event => event.target.checked),
    startWith(false)
  )

const counterWithChange$ = counter$.pipe(
  withLatestFrom(change$),
  filter(([_, checked]) => !checked),
  map(([value]) => value)
)

const fibWithChange$ = fibonaciCounter$.pipe(
  withLatestFrom(change$),
  filter(([_, checked]) => !!checked),
  map(([value]) => value)
)

export const stream$ = merge(
  counterWithChange$,
  fibWithChange$
)

