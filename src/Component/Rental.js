import React, { Component } from 'react';
import rentals from '../data/rentals';
import Result from './Result'

class Rental extends Component {

  constructor(props) {
    super(props);
    this.state = {
      rentals: rentals,
      city: ''
    };
  }

  showRentals() {
    let filteredResult = rentals.filter((rental) => {
      return rental.attributes.city.toLowerCase().includes(this.state.city);
    })
    return filteredResult.map((rental) => (
      <Result rental={rental.attributes} />
    ))
  }

  inputOnChange = (e) => {
    this.setState({city: e.target.value});
  }
  
  render() {
    return (
        <div>
            <div>
              <h1> Welcome! </h1>
              <p>We hope you find exactly what you're looking for in a place to stay.</p>
              <button href='/about'> About Us </button>
            </div>
            <input
              placeholder='Search by city'
              value={this.state.city}
              onChange={this.inputOnChange}/>
            {this.showRentals()}
        </div>
    );
  }
}

export default Rental;
