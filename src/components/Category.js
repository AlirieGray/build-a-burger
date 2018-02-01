import React, { Component } from 'react';

class Category extends Component {
  constructor(props) {
    super(props);
    this.GetOptions = this.GetOptions.bind(this);
  }

  GetOptions() {
    return this.props.options.map((option, index) => {
      // TODO: check if should be radio or square
      return (
        <div key={index}>
          <input type="radio" id={`${this.props.name}-${index}`} name={this.props.name} checked={index==0}/>
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

export default Category;
