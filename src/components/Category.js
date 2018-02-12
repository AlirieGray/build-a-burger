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

  HandleOptionChange(e) {
    if (this.props.isRadio) {
      this.setState({
        selectedOption: e.target.value
      }, () => {
        this.AddItem(this.state.selectedOption);
      })
    }
  }

  ToggleCheckbox(e) {
    e.persist();
    // if we already have the item in state, remove it
    var index = this.state.selectedOptions.indexOf(e.target.value);
    if (index >= 0) {
      this.setState({
        selectedOptions: this.state.selectedOptions.filter(item => item.name === e.target.value)
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

  AddItem(itemName) {
    console.log('local add')
    //console.log(item);
    // temp
    var itemType = this.props.name;
    if (itemType === 'Protein') {
      this.props.changeProteinAction(itemName);
    } else if (itemType === 'Cheese') {
      this.props.addCheeseAction(itemName);
    } else if (itemType === 'Bun') {
      this.props.changeBunAction(itemName);
    } else if (itemType === 'Weight') {
      this.props.changeWeightAction(itemName);
    } else if (itemType === 'Sauce') {
      this.props.addSauceAction(itemName);
    } else if (itemType === 'Toppings') {
      this.props.addToppingAction(itemName);
    }

    //this.props.addItemAction(item);
  }

  RemoveItem(itemName) {
    console.log('local remove')
    //console.log(item);
    var itemType = this.props.name;
    if (itemType === 'Cheese') {
        this.props.removeCheeseAction(itemName);
    }

  }

  GetOptions() {
    return this.props.options.map((option, index) => {
      // TODO: check if should be radio or square
      // this.props.isRadio
      if (this.props.isRadio) {
        return (
          <div key={index}>
            <input type={"radio"} id={`${this.props.name}-${index}`} name={option} value={option} checked={this.state.selectedOption===option}
            onChange={this.HandleOptionChange}/>
            <label htmlFor={`${this.props.name}-${index}`}> {option}</label>
          </div>
        );
      } else {
        return (
          <div key={index}>
            <input type={"checkbox"} id={`${this.props.name}-${index}`} name={option} value={option}
            onChange={this.ToggleCheckbox}/>
            <label htmlFor={`${this.props.name}-${index}`}> {option}</label>
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
        {this.GetOptions()}
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
