import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../actions/carActions'

const AdditionalFeature = props => {
  console.log('ADDITIONAL FEATURE BUTTON PROP', props)
  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={() =>props.addFeature(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapPropsToState = state =>{
  return{
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapPropsToState, {addFeature})(AdditionalFeature) ;
