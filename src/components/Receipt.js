import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Receipt.css';
import Item from './Item';

class Receipt extends Component {

  constructor(props) {
    super(props);
    this.GetBurger = this.GetBurger.bind(this);
  }

  GetBurger(burger) {
    return burger.map((item, index) => {
      return <Item name={item.name} />
    })
  }

  render() {
    return (
      <div className="container">
        <h2> Receipt </h2>
        <p> {this.GetBurger(this.props.burger)} </p>
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
