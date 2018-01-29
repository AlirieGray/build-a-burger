import React, { Component } from 'react';
import { connect } from 'react-redux';
//import './Item.css';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p> {this.props.name} </p>
      </div>
    );
  }

}

export default Item;
