import { distinctUntilChanged, filter, fromEvent, map } from 'rxjs';

const translate = {
  'russian': 'описание этого задания было бы неплохо уточнить',
  'english': 'the description of this task would be nice to clarify',
  'italian': 'la descrizione di questo compito sarebbe utile da chiarire',
  'georgian': 'ამ ამოცანის აღწერა კარგი იქნებოდა გარკვევა',
}

fromEvent(document.getElementById('icons'), 'mouseover').pipe(
  filter(event => Object.keys(translate).includes(event.target.id)),
  map(event => translate[event.target.id]),
  distinctUntilChanged(),
)
.subscribe((value) => document.getElementById('result').textContent = value)
