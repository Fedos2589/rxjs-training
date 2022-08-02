import { fromEvent, Subject } from 'rxjs';
import { map, reduce } from 'rxjs/operators';

const subject = new Subject().pipe(
  reduce((acc, cur) => acc[cur] ? ({...acc, [cur]: acc[cur] + 1}) : ({...acc, [cur]: 1}),{})
);

fromEvent(document, 'keyup')
  .pipe(
    map(event => event.key),
  )
  .subscribe((value) => value === 'Escape' ? subject.complete(value) : subject.next(value))

subject.subscribe({
  next: console.log,
  complete: console.log
})
