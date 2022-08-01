import { filter, from, map, switchMap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const user = {
  "email": "admin@noveogroup.com",
  "password": "password"
}

const url = `http://rest-api.noveogroup.com/api/v1`;

export const stream$ = ajax({
  method: 'POST',
  url: `${url}/login`,
  body: user,
  headers: {
    'X-Application-Key': 'Ht6i1cnk7rikxAZtYX8WbD0YvqUe1aG5dbgzJyjp',
  }
}).pipe(
  map(response => response.response.data.token),
  switchMap(token => ajax({
      url: `${url}/posts`,
      headers: {
        'X-Application-Key': 'Ht6i1cnk7rikxAZtYX8WbD0YvqUe1aG5dbgzJyjp',
        'Authorization': `Bearer ${token}`
      }
    }).pipe(
      map(response => response.response.data.posts.filter(post => post.total_likes).map(post => post.title)),
    )
  )
)
