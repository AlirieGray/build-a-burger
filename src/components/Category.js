import React, { Component } from 'react';
import { changeProtein, changeWeight, changeBun, addCheese, removeCheese, addSauce, removeSauce, addTopping, removeTopping, addPremium, removePremium } from '../actions/burger';
import { connect } from 'react-redux';
import './category.css';

class Category extends Component {
  constructor(props) {
    super(props);
    this.GetOptions = this.GetOptions.bind(this);
    this.AddItem = this.AddItem.bind(this);
    this.HandleOptionChange = this.HandleOptionChange.bind(this);
    this.ToggleCheckbox = this.ToggleCheckbox.bind(this);
    if (this.props.isRadio) {
      this.state = {
        selectedOption:this.props.options[0],
      }
    } else {
      this.state = {
        selectedOptions:[]
      }
    }
  }

  // handles radio buttons changes
  HandleOptionChange(e) {
    if (this.props.isRadio) {
      this.setState({
        selectedOption: e.target.value
      }, () => {
        this.AddItem(this.state.selectedOption);
      })
    }
  }

  // handles checkbox changes
  ToggleCheckbox(e) {
    e.persist();
    // if we already have the item in state, remove it
    var index = this.state.selectedOptions.indexOf(e.target.value);
    if (index >= 0) {
      this.setState({
        selectedOptions: this.state.selectedOptions.filter((item) => {
          return item !== e.target.value;
        })
      }, () => {
        this.RemoveItem(e.target.value);
      })
    }
    // otherwise, add it to state
    else {
      this.setState({
        selectedOptions: [...this.state.selectedOptions, e.target.name]
      }, () => {
        this.AddItem(e.target.value);
      })
    }
  }

  // takes in a string, and sends a dispatch to add an item with
  // that name to the store
  AddItem(itemName) {
    var itemType = this.props.name;
    switch (itemType) {
      case 'Protein':
        this.props.changeProteinAction(itemName);
        break;
      case 'Cheese':
        this.props.addCheeseAction(itemName);
        break;
      case 'Bun':
        this.props.changeBunAction(itemName);
        break;
      case 'Weight':
        this.props.changeWeightAction(itemName);
        break;
      case 'Sauce':
        this.props.addSauceAction(itemName);
        break;
      case 'Toppings':
        this.props.addToppingAction(itemName);
        break;
      case 'Premium Toppings':
        this.props.addPremiumAction(itemName);
        break;
      default:
        break;
    }
  }

  // takes in a string, and sends a dispatch to remove the
  // item with that name from store
  RemoveItem(itemName) {
    var itemType = this.props.name;
    if (itemType === 'Cheese') {
        this.props.removeCheeseAction(itemName);
    } else if (itemType === 'Sauce') {
      this.props.removeSauceAction(itemName);
    } else if (itemType === 'Toppings') {
      this.props.removeToppingAction(itemName);
    } else if (itemType === 'Premium Toppings') {
      this.props.removePremiumAction(itemName);
    }
  }

  // gets the menu items for the category and populates them as Item components
  GetOptions() {
    return this.props.options.map((option, index) => {
      if (this.props.isRadio) {
        return (
          <div className="radio" key={index}>
          <div className="input-container">
              <input type={"radio"} id={`${this.props.name}-${index}`}
              name={option} value={option}
              checked={ this.state.selectedOption === option }
              onChange={this.HandleOptionChange}/>
              <label htmlFor={`${this.props.name}-${index}`}>
              <span> {option} </span>
              </label>
              <div className="item-name"> {option} </div>
            </div>
          </div>
        );
      } else {
        return (
          <div className="check" key={index}>
          <div className="input-container">
              <input type={"checkbox"} id={`${this.props.name}-${index}`}
              name={option} value={option}
              onChange={this.ToggleCheckbox}/>
              <label htmlFor={`${this.props.name}-${index}`}>
              <span> {option} </span> </label>
              <div className="item-name"> {option} </div>
            </div>
          </div>
        )
      }
    })
  }

  render() {
    return(
      <div>
        <div className="category-title">
          <h3> {this.props.name} </h3>
          <p> {this.props.details} </p>
        </div>
        <div className="options-container">
          {this.GetOptions()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    burger: state.burger
  }
}

export default connect(mapStateToProps, {
  changeProteinAction: changeProtein,
  changeWeightAction: changeWeight,
  changeBunAction: changeBun,
  addCheeseAction: addCheese,
  removeCheeseAction: removeCheese,
  addSauceAction: addSauce,
  removeSauceAction: removeSauce,
  addToppingAction: addTopping,
  removeToppingAction: removeTopping,
  addPremiumAction: addPremium,
  removePremiumAction: removePremium
})(Category);
