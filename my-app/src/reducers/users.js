
const initState = {

    fetching: false,
    fetched: true,
    users:{
        id: null,
        name: null, 
        title: null,
        age: null
    }
}

export default function GetUser(state = initState, action){

        switch(action.type){
            case "GET_USERS":{
                console.log("getting users")
                return {...state, fetching: true }
                
            }
            case "GET_USERS_FULFILLED":{
                console.log("getting users done")
                return {...state, fetching:false, fetched: true, users: action.payload}
            }
            case "GET_USERS_REJECTED":{
                return {...state, fetching: false, fetched: false, error: action.payload}
            }
            default:
                return state;

        }
}