import React from 'react';
import {connect} from 'react-redux';
import {removeFeature} from '../actions/carActions'

const AddedFeature = props => {
  console.log('ADDED FEATURE BUTTON PROPS', props)
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={() =>props.removeFeature(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};


const mapPropsToState = state => {
  return{
    features: state.car.features
  }
}

export default connect(mapPropsToState, {removeFeature})(AddedFeature) ;
