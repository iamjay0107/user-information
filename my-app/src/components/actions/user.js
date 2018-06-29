import axios from 'axios';

export function GetUser(){

    const myData = [
        {id: 1, name: "abc2", title: null, age: null, birthdate: null},
        {id: 2, name: "abc3", title: "qweqwe", age: 221, birthdate: null}
    ]



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