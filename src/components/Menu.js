import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './Menu.css';
import Item from './Item';
import Category from './Category';
import { addItem } from '../actions/burger';
const menuItems = require('./menu.json');

class Menu extends Component {

  constructor(props) {
    super(props);
    this.AddItem = this.AddItem.bind(this);
    this.GetCategories = this.GetCategories.bind(this);
  }

  AddItem(e) {
    var item = {type: 'cheese', name: 'swiss'}
    console.log('adding item')
    this.props.addItemAction(item);
  }

  GetCategories() {
    return menuItems.map((category, index) => {
      return <Category name={category.name} options={category.items} key={index}/>
    })
  }

  render() {
    return (
      <div className="container">
        <h2> Menu </h2>
        <form>
          {this.GetCategories()}
        </form>
      </div>
    );
  }
}

// store
// <button onClick={this.AddItem}>
//   Add Cheese (Test)
// </button>

const mapStateToProps = (state) => {
  return {
    burger: state.burger
  }
}

export default connect(mapStateToProps, { addItemAction: addItem })(Menu);
