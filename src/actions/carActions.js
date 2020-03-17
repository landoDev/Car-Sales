import { useDispatch } from "react-redux";

export const removeFeature = item => {
    // dispatch an action here to remove an item
    return { 
        type: 'REMOVE_FEATURE',
        payload: item.id
    }
  };

export const buyItem = item => {
    return{ type: ''}
};

export const addFeature = item =>{
    // dispatch an action to add a feature
    return { 
        type: 'ADD_FEATURE', 
        payload:{
            id: item.id,
            name: item.name,
            price: item.price
        } 
    }
}
