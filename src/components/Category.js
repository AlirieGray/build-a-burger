import React, { Component } from 'react';
import { addItem } from '../actions/burger';
import { connect } from 'react-redux';

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
        selectedOptions:[this.props.options[0]]
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
    // if we already have the item in state, remove it
    var index = this.state.selectedOptions.indexOf(e.target.value);
    if (index >= 0) {
      this.setState({
        selectedOptions: this.state.selectedOptions.splice(index, 1)
      }, () => {
        console.log(this.state.selectedOptions)
      })
    }
    // otherwise, add it to state
    else {
      this.setState({
        selectedOptions: [...this.state.selectedOptions, e.target.name]
      }, () => {
        this.AddItem(e.target.name);
      })
    }
  }

  AddItem(itemName) {
    var item = {type: this.props.name, isRadio: this.props.isRadio, name: itemName}
    console.log(item);
    this.props.addItemAction(item);
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
        <h3> {this.props.name} </h3>
        {this.GetOptions()}
      </div>
    );
  }
}

// <button onClick={this.AddItem}>
//   Add Cheese (Test)
// </button>


const mapStateToProps = (state) => {
  return {
    burger: state.burger
  }
}

export default connect(mapStateToProps, { addItemAction: addItem })(Category);
