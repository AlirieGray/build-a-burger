import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Receipt.css';
import Item from './Item';

class Receipt extends Component {

  constructor(props) {
    super(props);
    this.GetBurger = this.GetBurger.bind(this);
    this.CalculatePrice = this.CalculatePrice.bind(this);
    this.FormatPrice = this.FormatPrice.bind(this);
  }

  GetBurger(burger) {
    console.log("burger in receipt:")
    console.log(burger)
    var printBurger = [];

    for (var key in burger) {
      if (typeof(burger[key]) === 'string') {
        console.log(burger[key]);
        printBurger.push(burger[key]);
      } else if (Array.isArray(burger[key])) {
        for (let i = 0; i < burger[key].length; i++) {
          console.log('array item');
          console.log(burger[key][i]);
          printBurger.push(burger[key][i])
        }
      }
    }
    return printBurger.map((item, index) => {
      return <Item name={item} key={index} />
    })
  }

  CalculatePrice(burger) {
    // price is in pennies
    // Cheese
    // Sauce
    // Toppings
    // Premium
    var totalPrice = 0;
    for (var key in burger) {
      if (key === 'weight') {
        if (burger[key] === '1/3 lb') {
          totalPrice += 1125;
        } else if (burger[key] === '1/2 lb') {
          totalPrice += 1475;
        } else if (burger[key] === '1 lb') {
          totalPrice += 2125;
        }
      }
      else if (key === 'sauces') {
        for (let i = 3; i < burger[key].length; i++) {
          totalPrice += 100;
        }
      }
    }
    return totalPrice;
  }

  // takes in a price in pennies and returns it properly formatted in USD
  FormatPrice(price) {
    return `$${(price/100).toFixed(2)}`
  }

  render() {
    return (
      <div className="receipt">
        <div> {this.GetBurger(this.props.burger)} </div>
        <div className="price"> Subtotal: {this.FormatPrice(this.CalculatePrice(this.props.burger))} </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burger
  }
}

export default connect(mapStateToProps)(Receipt);
