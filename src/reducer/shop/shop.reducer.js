import SHOP_DATA from './shop.data';

const INITIAL_SHOP_STATE ={
    collections: Object.values(SHOP_DATA) 
};

 const ShopReducer = (state =INITIAL_SHOP_STATE,action)=>{
    switch(action.type){
        default:
            return state
    }
}

export default ShopReducer;