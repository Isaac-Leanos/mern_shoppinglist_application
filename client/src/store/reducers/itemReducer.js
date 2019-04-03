



const initialState = {
    items: [],
    loading: false,
}


const itemReducer = (state=initialState, action)=>{
    switch(action.type){
        case 'GET_ITEMS':
        return {
            ...state,
            items: action.data,
            loading: false
        }

        case 'ADD_ITEM':
        return {...state, items:[...state.items, action.data]}

        case 'DELETE_ITEM':
        return {
            ...state,
            items: state.items.filter(item => item.id !== action.data) 
        }

        case 'SET_ITEMS_LOADING':
        return {
            ...state,
            loading: true
        }

        default:
        return state
    }
}

export default itemReducer;