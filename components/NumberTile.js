import React, { Component } from 'react';

class NumberTile extends Component {
  render() {
    const { label, number } = this.props;
    return (
      <div style={{
        textAlign: 'center',
        textTransform: 'uppercase',
      }}>
        <div style={{
          color: 'rgba(255, 255, 255, .5)',
          fontFamily: 'sans-serif',

        }}>
          {label}
        </div>
        <div style={{
          color: 'black',
          // background: 'rgba(255, 255, 255, 1)',
          background: 'linear-gradient(0deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(233,233,233,1) 50%, rgba(255,253,249,1) 60%)',
          padding: '.5rem',
          borderRadius: '4px',
          border: '1px solid #black',
          marginTop: '.5rem',
          fontSize: '2rem',
          fontFamily: 'sans-serif'
        }}>{number}</div>
      </div>
    );
  }
}

export default NumberTile;