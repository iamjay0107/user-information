
const initState = {

    message: "",
    fetched: true,
    users:{
        id: null,
        name: null, 
        title: null,
        age: null
    }
}

export function GetUser (state = initState, action){

        switch(action.type){
            case "GET_USERS":{
                return {...state, fetching: true }                
            }
            case "GET_USERS_FULFILLED": {
                
                state =  {fetching:false, fetched: true, users: action.payload}
                console.log(state);
                return state;                
            }
            case "GET_USERS_REJECTED":{
                return {...state, fetching: false, fetched: false, error: action.payload}
            }
            case "ADDING_USERS":{
                return {...state, isadd: false}
            }
            case "ADD_USER_FULFILLED": {
                return action.payload
            }
            default:
                return state;
        }
}