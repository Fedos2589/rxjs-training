import { interval } from 'rxjs'
import { take, tap, filter, map } from 'rxjs/operators'

export const stream$ = interval(1000)
  .pipe(
    //tap(value => console.log('Tap: ', value)),
    take(15),
    filter(value => value > 3),
    map(value => value + 1)
  )
