import { interval } from 'rxjs'
import { take, tap } from 'rxjs/operators'

const stream$ = interval(1000)
  .pipe(
    tap(value => console.log('Tap: ', value)),
    take(15),
  )


stream$.subscribe({
  next: value => {
    value > 3 ? console.log('Next: ', value) : ''
  },
  complete: () => console.log('Complete')
})