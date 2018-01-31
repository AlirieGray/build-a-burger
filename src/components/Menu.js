import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Menu.css';
import Item from './Item';
import * as actions from '../actions/burger';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.AddItem = this.AddItem.bind(this);
  }

  AddItem(item) {
    console.log('adding item')
    this.props.dispatch(actions.addItem);
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

// dispatch: dispatches an action. this is the only way to
// trigger a state change.
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect()(Menu);
