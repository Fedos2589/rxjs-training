import { interval } from 'rxjs'
import { take, tap, filter } from 'rxjs/operators'

export const counterStream$ = interval(1000)
  .pipe(
    //tap(value => console.log('Tap: ', value)),
    take(15),
    filter(value => value > 3)
  )

// counterStream$.subscribe({
//   next: console.log,
//   complete: () => console.log('Complete')
// })