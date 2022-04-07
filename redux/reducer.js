import { POST, DELETE, PUT, GET, FETCH } from "./types";
const initialState = [];
export default function reducer(state = initialState, actions) {
    
    switch(actions.type){
        case POST : return state;
        case DELETE : return state;
        case GET : return actions.payload;
        case FETCH : return state;
        case PUT : return state;
        default : return state;
    }
}