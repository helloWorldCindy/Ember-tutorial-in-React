import React, { Component } from 'react';
import '../App.css';

class Result extends Component {

  render() {
    let {rental} = this.props
    return (
        <div className="Result-display">
          <div><img src={rental.image} height={200}/></div>
          <div style={{flexDirection: 'colomn', margin: 10}}>
            <h2>{rental.title}</h2>
            <p> Owner: {rental.owner}</p>
            <p> Category: {rental.category}</p>
            <p> Location: {rental.city}</p>
            <p> Number of bedrooms: {rental.bedrooms}</p>
          </div>
      </div>
    );
  }
}

export default Result;
