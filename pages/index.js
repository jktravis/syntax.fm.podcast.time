import Main from '../components/Main.js';
import getDuration from '../lib/getDuration';
import fetchRss from '../lib/fetchRss';
import * as PropTypes from 'prop-types';
import { Component } from 'react';
import NumberTile from '../components/NumberTile';
import Footer from '../components/Footer';
import React from 'react';

class Index extends Component {
  render() {
    const { data: { days, hours, mins, secs } } = this.props;
    return (
      <div>
        <Main>
          <h1 style={{
            textAlign: 'center',
            textShadow: '0px 7px 7px black;',
            fontSize: '2.5rem',
          }}>Syntax.FM Total Podcast Time</h1>
          <div style={{ display: 'flex', justifyContent: 'space-around' }}>
            <NumberTile label="days" number={days}/>
            <NumberTile label="hours" number={hours}/>
            <NumberTile label="mins" number={mins}/>
            <NumberTile label="secs" number={secs}/>
          </div>
          <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

    `}</style>
        </Main>
        <Footer/>
      </div>
    );
  }
}

Index.propTypes = { data: PropTypes.any };

Index.getInitialProps = async () => {
  const rss = await fetchRss();
  const data = await getDuration(rss);
  return {
    data,
  };
};

export default Index;