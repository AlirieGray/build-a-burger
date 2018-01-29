import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Menu.css';
import Item from './Item';
import { addItem } from '../actions/burger';

class Menu extends Component {

  constructor(props) {
    super(props);
  }

  AddItem(item) {
    this.props.addItem(item);
  }

  render() {
    return (
      <div className="container">
        <h2> Menu </h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burger
  }
}

const mapDispatchToProps = () => {
  return {
    addItem: addItem
  }
}

export default connect(mapStateToProps)(Menu);
