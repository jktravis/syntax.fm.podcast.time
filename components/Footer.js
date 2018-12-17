import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <footer style={{
        marginLeft: 20,
        paddingRight: 20,
      }}>
        <p>
          <small>New shows every Monday and Wednesday. <a style={{
            color: '#f1c15d',
          }} target="_blank" href="http://feed.syntax.fm/rss" rel="noopener noreferrer">RSS</a>
          </small>
        </p>
        <p>
          <small>Not affliated with the podcast, its participants, or representatives.</small>
        </p>
      </footer>
    );
  }
}

export default Footer;