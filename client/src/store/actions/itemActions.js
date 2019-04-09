import axios from "axios";

// dispatch - dispatched var is sent to ALL reducers
// redux EXPECTS plain object. when fetching data, data needs to be resolved before being dispatched.
// thunk - middleware / invokes function automatically and gives access to dispatch
// thunk allows for a function to be returned. asyncronousity

export const getItems = () => {
    return (dispatch) => {
        dispatch(setItemsLoading() );
            axios
                .get('/api/items')
                .then(res => {
                    dispatch({type: 'GET_ITEMS', data: res.data});
                });
            }
        }

export const addItem = (item)=>{
    return (dispatch) => {
        axios
            .post('/api/items', item)
            .then(res => {
                dispatch({type: 'ADD_ITEM', data: res.data});
            });
    }             
}

export const deleteItem = (id)=>{
    return (dispatch) => {
        axios 
            .delete(`/api/items/${id}`)
            // success response
            .then(res => {
                dispatch({type: 'DELETE_ITEM', data: id});
            });
    }
};

// export const attemptSignup=(data)=>{
//     return(dispatch)=>{
//         return apiSignup(data).then((user)=>{
//             localStorage.bookwormJWT=user.token
//             dispatch(userLoggedIn(user))
//         })
//     }
// }
// const apiSignup=(info)=>axios.post('/api/users',{info}).then((res)=>{return res.data.user})
// user--{email:mail@mail.com,confirmed: ,token:'ri8hn5j3fg0ekfjwfoj/89'}--authJson


export const setItemsLoading = () => {
    return {
        type: 'SET_ITEMS_LOADING'
    }
};