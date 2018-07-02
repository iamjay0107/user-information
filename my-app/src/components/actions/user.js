import axios from 'axios';

export function GetUser(){


    return (dispatch) => {
        dispatch({type: 'GET_USERS', fetching : true})
        //dispatch({type:"GET_USERS_FULFILLED", fetching: false, payload: myData});
          axios.get('http://localhost:62062/api/values')
          .then((res) => {
             dispatch({type:"GET_USERS_FULFILLED", fetching: false, payload: res.data})
          })
          .catch((err) =>
              {
              dispatch({type:"GET_USERS_REJECTED", payload: err})
          })
    }
}

export function AddUser(state){
    return (dispatch) => {
        dispatch({type:"ADDING_USERS", fetching:true, isadd: false})
        axios.post('http://localhost:62062/api/values', state)
        .then((res)=> {
            dispatch({type:"ADD_USER_FULFILLED", isadd: true, payload: res.data})
        })
        .catch((err) => {
            dispatch({type:"ADD_USER_REJECTED", payload: err})
        })
    }
}


export function DoSearch(text, state){
    return (dispatch) =>{
        dispatch({type : "SEARCH_USER", payload: state, text})
    }
}
