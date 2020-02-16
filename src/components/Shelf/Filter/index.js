import React, { Component } from 'react';
import { connect } from 'react-redux';
import Checkbox from '../../Checkbox/';

import {updateFilters} from '../../../services/filters/actions'

import './style.scss';

const availableSizes = ['XS', 'S', 'M', 'ML', 'L', 'XL', 'XXL'];

class Filter extends Component {

  componentDidMount() {
    this.selectedCheckboxes = new Set();
  }
  toggleCheckbox = label => {
    if(this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label)
    }
    this.props.updateFilters(Array.from(this.selectedCheckboxes));
  }

  createCheckboxes = () =>
    availableSizes.map(label => {
      return (
        <Checkbox
          classes="filters-available-size"
          label={label}
          handleCheckboxChange={this.toggleCheckbox}
          key={label}
        />
      );
    });

  render() {
    return (
      <div className="filters">
        <h4 className="title">Sizes:</h4>
        {this.createCheckboxes()}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    filters: state.filters.items
  }
}

/** Conventional way of defining a mapping of prop-action
 * ...dispatch is used
 */
const mapDispatchToProps = dispatch => {
  return {
    updateFilters : (filters) => {dispatch({
      type: "UPDATE_FILTER",
      payload: filters
    })}
  }
}

/** Return mapping of prop-action 
 * This is how its done in the org CODE...
 * ...No dispatch used
 * May DELETE later
 * New syntax : { updateFilters } //-> {updateFilters: function....}
 * the above is just a way to initiate an object
 */
const mapFnToProps = {
  updateFilters : (filters) => {
    return { //action
      type: "UPDATE_FILTER",
      payload: filters
    }
  }
}

export default connect(null, {updateFilters} )(Filter);