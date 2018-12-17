import map from 'ramda/src/map';
import gte from 'ramda/src/gte';

const sumTime = ({ days, hours, mins, secs }, current) => {
  let [h, m, s] = map(Number, current);

  if (current.length === 2) {
    s = m;
    m = h;
    h = 0;
  }

  hours = hours + h;
  mins = mins + m;
  secs = secs + s;

  if (gte(secs, 60)) {
    secs = secs % 60;
    mins = mins + 1;
  }

  if (gte(mins, 60)) {
    mins = mins % 60;
    hours = hours + 1;
  }

  if (gte(hours, 24)) {
    hours = hours % 24;
    days = days + 1;
  }

  return {
    days,
    hours,
    mins,
    secs,
  };
};

export default sumTime;
