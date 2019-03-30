



export const getItems = ()=>{
    return {
        type: 'GET_ITEMS'
    }
}

var ok=1;

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        data: item
    }
}

export const deleteItem = id => {
    return {
        type: 'DELETE_ITEM',
        data: id,
    }
};
// export const deleteItem = id => {
//     return {
//         type: 'DELETE_ITEM',
//         data: id,
//     }
// };