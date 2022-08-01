// import { stream$ } from './counter';
// import { stream$ } from './fibonacciCounter';
// import { stream$ } from  './checkbox';
// import { stream$ } from  './ajax';
import { stream$ } from  './multiplicationTable';


export const subscription = stream$.subscribe({
  next: console.log,
  complete: () => console.log('Complete')
})

document.getElementById('clear').addEventListener('click', () => subscription.unsubscribe())