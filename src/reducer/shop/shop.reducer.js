
import SHOP_ACTION from "./shop.actionTypes"
const INITIAL_SHOP_STATE ={
  collections: null,
  isFetching: false,
  errorMessage: undefined
};

const ShopReducer = (state =INITIAL_SHOP_STATE,action)=>{
  switch(action.type){
  case SHOP_ACTION.FETCH_COLLECTION_START:
    return{
      ...state,
      isFetching:true
    }
  case SHOP_ACTION.FETCH_COLLECTION_SUCCESS:
    return{
      ...state,
      isFetching: false,
      collections: action.payload
    }
  case SHOP_ACTION.FETCH_COLLECTION_FAILURE:
    return{
      ...state,
      isFetching: false,
      errorMessage: action.payload
                
    }
  default:
    return state
  }
}

export default ShopReducer;