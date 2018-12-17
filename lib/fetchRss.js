import processXml from './processXml';
import { prop } from 'ramda';
import axios from 'axios';

function fetchRss() {
  return axios.get('http://feed.syntax.fm/rss')
    .then(prop('data'))
    .then(processXml);
}

export default fetchRss;
