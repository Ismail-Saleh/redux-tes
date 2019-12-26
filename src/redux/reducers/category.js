const initialState = {
    fetching :false ,
    fetched : false,
    error  : null,
    category :[]
}

const reducer= function(state=initialState,action){
    switch (action.type) {
        case 'FETCH_CATEGORY_PENDING':
            return {...state,fetching:true,fetched:false}
     
        case 'FETCH_CATEGORY_FULFILLED':
            return {...state,fetching:false,fetched:true, category:action.payload} 

        case 'FETCH_CATEGORY_REJECTED':
            return {...state,fetching:false,error:action.payload}
     
    
        default:
            break;
    }
    
    return state;
}

export default reducer