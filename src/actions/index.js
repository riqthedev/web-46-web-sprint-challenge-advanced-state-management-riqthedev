import axios from 'axios';


  export const FETCH_START = "FETCH_START"
  export const FETCH_SUCCESS = "FETCH_SUCCESS"
  export const FETCH_FAILED = "FETCH_FAILED"
  export const ERROR_MESSAGE = "ERROR_MESSAGE"
  export const ADD_SMURF = " ADD_SMURF"
 




//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

// const FETCH_SMURFS = "FETCH_SMURFS";  

// const fetchSmurs =  
export const fetchSmurfs = () => {
    return (dispatch) => {
        
        dispatch(fetchStart());
        axios.get("http://localhost:3333/smurfs")

        .then(res => {
            dispatch(fetchSuccess(res.data));
        })

        .catch(err => {
            console.log(err)
            dispatch(errorMessage(err.message));
        })
    }
}



export const fetchStart= () => {
    return {
        type:FETCH_START,
    }
     
    
}


export const fetchSuccess = (smurf) => {
    return {
        type: FETCH_SUCCESS,
        payload: smurf
    }
}



export const errorMessage = (error) => {
    return {
        type: ERROR_MESSAGE,
        payload: error
    }
}

export const fetchFailed = (smurf) => {
    return {
        type: FETCH_FAILED ,
        payload: smurf
    }
}
  
export const addSmurf = (smurf) => {
    return { 
        type: ADD_SMURF,
        payload: smurf
      
    }
}
 