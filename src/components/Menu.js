import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Menu.css';
import Item from './Item';
import { addItem } from '../actions/burger';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.AddItem = this.AddItem.bind(this);
  }

  AddItem(e) {
    var item = {type: 'cheese', name: 'swiss'}
    console.log('adding item')
    this.props.addItemAction(item);
  }

  render() {
    return (
      <div className="container">
        <h2> Menu </h2>
        <button onClick={this.AddItem}>
          Add Cheese (Test)
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burger
  }
}

export default connect(mapStateToProps, { addItemAction: addItem })(Menu);
