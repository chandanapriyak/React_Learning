import {
    FETCH_USERS_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE
} from './userTypes'




const initialState = {
    loading:false,
    users:[],
    error:''
 }
 const reducer =(state =initialState, action) =>{
    switch(action.type){
     case FETCH_USERS_REQUEST: 
     return{
         ...state,
         loading:true
     }
     case FETCH_USERS_SUCCESS:
         return{
             ...state,
             users: action.payload, //property that we are sending through action creator
             error:''
         }
     case FETCH_USERS_FAILURE:
         return{
             ...state,
             users:[],
             error: action.payload
         }
    }
      
 }

 export default reducer