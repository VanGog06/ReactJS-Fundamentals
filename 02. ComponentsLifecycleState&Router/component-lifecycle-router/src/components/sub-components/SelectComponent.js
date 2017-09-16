import React, { Component } from 'react';
import { FormGroup, ControlLabel, FormControl } from 'react-bootstrap';

class SelectComponent extends Component {
  render() {
    let options = this.props.options.map((option, index) => (
      <option key={index} value={option}>{option}</option>
    ));

    return (
      <form>
        <FormGroup controlId="formControlsSelect">
          <ControlLabel>Sort Criteria:</ControlLabel>
          <FormControl componentClass="select" placeholder="select" onChange={this.props.onSelectChange}>
            {options}
          </FormControl>
        </FormGroup>
      </form>
    );
  }
}

export default SelectComponent;

