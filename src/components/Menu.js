import React, { Component } from 'react';
import './Menu.css';
import Category from './Category';
const menuItems = require('./menu.json');

class Menu extends Component {

  constructor(props) {
    super(props);
    this.GetCategories = this.GetCategories.bind(this);
  }

  GetCategories() {
    return menuItems.map((category, index) => {
      return <Category name={category.name} options={category.items}
      details={category.details} isRadio={category.isRadio} key={index} />
    })
  }

  render() {
    return (
      <div className="menu">
        <form>
          {this.GetCategories()}
        </form>
      </div>
    );
  }
}

export default Menu;
