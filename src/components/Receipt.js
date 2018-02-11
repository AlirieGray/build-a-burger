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
    // TODO: transfer to redux
    this.state = {
      totalPrice: 0,
      cheeseCount: 0,
      toppingsCount: 0,
      premiumCount: 0,
      sauceCount: 0
    }
  }

  GetBurger(burger) {
    console.log("burger in receipt:")
    console.log(burger)
    var printBurger = [];

    for (var key in burger) {
      if (typeof(burger[key]) == 'string') {
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
    return 1;
  }

  // takes in a price in pennies and returns it properly formatted in USD
  FormatPrice(price) {
    return `$${(price/100).toFixed(2)}`
  }

  render() {
    return (
      <div className="receipt">
        <div> {this.GetBurger(this.props.burger)} </div>
        <div> {this.FormatPrice(this.CalculatePrice(this.props.burger))} </div>
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
