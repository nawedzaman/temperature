import React, { Component } from 'react'
const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
  };


export default class Input extends Component {
  
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        
      }
    
      handleChange(e) {
        this.props.onTemperatureChange(e.target.value);
      }
      
    
      render() {
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
          <div className=" d-grid gap-3">
            <h3>Enter temperature in {scaleNames[scale]}:</h3>
            <input  className="form-control"
                    value={temperature}
                    onChange={this.handleChange} />
          </div>
        );
      }
    }