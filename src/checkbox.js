import { fromEvent, interval } from 'rxjs';
import { scan, flatMapLatest, tap, map, takeUntil, switchMap } from 'rxjs/operators';
import { counterStream$ } from './counter';
import { fibonacciStream$ } from './fibonacciCounter';

fromEvent(document.getElementById('checkbox'), 'change')
  .pipe(
    map(e => e.target.checked),
    switchMap((checked) =>  checked ? counterStream$ : fibonacciStream$),
  )
  .subscribe(console.log)
