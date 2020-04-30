
import SHOP_ACTION from './shop.actionTypes'
const INITIAL_SHOP_STATE ={
    collections: []
};

 const ShopReducer = (state =INITIAL_SHOP_STATE,action)=>{
    switch(action.type){
        case SHOP_ACTION.ADD_INTIAL_DATA:
            return{
                ...state,
                collections: action.payload
            }
        default:
            return state
    }
}

export default ShopReducer;