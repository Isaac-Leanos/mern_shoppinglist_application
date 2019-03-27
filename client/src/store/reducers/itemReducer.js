


import uuid from "uuid";

const initialState = {
    items: [
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Cereal'},
    ],
}


const itemReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_ITEMS':
        return {...state}

        case 'ADD_ITEM':
        return {...state, items:[...state.items, action.data]}

        case 'DELETE_ITEM':
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.data) 
        }

        default:
        return state
    }
}

export default itemReducer;