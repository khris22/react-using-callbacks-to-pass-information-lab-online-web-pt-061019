import React, { Component } from 'react';
import learnSymbol from './data.js'
import Cell from './Cell.js'
import ColorSelector from './ColorSelector.js'

export default class Matrix extends Component {

  constructor() {
    super()
    this.state = {
      selectedColor: '#FFF'
    }
  }

  // this method updates selectedColor with whatever is passed into it as an argument
  setSelectedColor = (newColor) => {
    this.setState({
      selectedColor: newColor
    })
  }
  

  genRow = (vals) => (
    vals.map((val, idx) => <Cell key={idx} color={val} selectedColor={this.state.selectedColor}/>)
    // Cell, on the other hand, only needs to know the currently selected color, not change it
  )

  genMatrix = () => (
    this.props.values.map((rowVals, idx) => <div key={idx} className="row">{this.genRow(rowVals)}</div>)
  )

  render() {
    return (
      <div id="app">
        {/* ColorSelector is the interface where users will be able to select a color, so it will need access to setSelectedColor. We can pass the needed function down as a prop */}
        <ColorSelector setSelectedColor={this.setSelectedColor}/>
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