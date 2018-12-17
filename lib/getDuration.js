import { compose, map, filter, path, prop, flatten, split, head, complement, isNil, reduce } from 'ramda';
import sumTime from './sumTime';

const initialValue = {
  days: 0, hours: 0, mins: 0, secs: 0,
};

const getDuration = compose(
  reduce(sumTime, initialValue),
  map(split(':')),
  filter(complement(isNil)),
  flatten,
  map(path(['itunes:duration'])),
  prop('item'),
  head,
  path(['rss', 'channel']),
);

export default getDuration;
