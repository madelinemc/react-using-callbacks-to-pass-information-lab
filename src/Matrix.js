import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    //1. set the state
    this.state = {
      selectedColor: '#FFF' //default color value
    }
  }

  //2. create a method to update state
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }

  //3. pass Cell the currently selected color as prop selectedColor
  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor} />)
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  //4. pass function down as prop to ColorSelector child
  render() {
    return (
      <div id="app">
        <ColorSelector setSelectedColor={this.setSelectedColor} /> 
        <div id="matrix">
          {this.genMatrix()}
        </div>
      </div>
    )
  }
}

Matrix.defaultProps = {
  values: learnSymbol
}