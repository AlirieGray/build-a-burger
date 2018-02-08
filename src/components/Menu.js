import React, { Component } from 'react';
//import { bindActionCreators } from 'redux';
import './Menu.css';
import Item from './Item';
import Category from './Category';
const menuItems = require('./menu.json');

class Menu extends Component {

  constructor(props) {
    super(props);
    this.GetCategories = this.GetCategories.bind(this);
  }

  GetCategories() {
    return menuItems.map((category, index) => {
      return <Category name={category.name} options={category.items} isRadio={category.isRadio} key={index}/>
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


export default Menu;
