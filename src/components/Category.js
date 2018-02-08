import React, { Component } from 'react';
import { addItem } from '../actions/burger';
import { connect } from 'react-redux';

class Category extends Component {
  constructor(props) {
    super(props);
    this.GetOptions = this.GetOptions.bind(this);
    this.AddItem = this.AddItem.bind(this);
    this.HandleOptionChange = this.HandleOptionChange.bind(this);
    this.state = {
      selectedOption:this.props.options[0],
    }
  }

  HandleOptionChange(e) {
    this.setState({
      selectedOption: e.target.value
    })
    this.AddItem(this.state.selectedOption)
  }

  AddItem(itemName) {
    var item = {type: this.props.name, name: itemName}
    console.log(item);
    this.props.addItemAction(item);
  }

  GetOptions() {
    return this.props.options.map((option, index) => {
      // TODO: check if should be radio or square
      return (
        <div key={index}>
          <input type="radio" id={`${this.props.name}-${index}`} name={option} value={option} checked={this.state.selectedOption===option}
          onChange={this.HandleOptionChange}/>
          <label htmlFor={`${this.props.name}-${index}`}> {option}</label>
        </div>
      )
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
