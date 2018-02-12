import React, { Component } from 'react';
//import './Item.css';

class Item extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
        <p> - {this.props.name} </p>
    );
  }

}

export default Item;
