import { endWith, fromEvent, interval, takeUntil } from 'rxjs';

const click$ = fromEvent(document.getElementById('reset'), 'click')

export const stream$ = interval(1000)
  .pipe(
    takeUntil(click$),
    endWith(0)
  )
  .subscribe({
    next: console.log,
  })
