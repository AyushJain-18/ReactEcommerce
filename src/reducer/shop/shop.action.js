import SHOP_ACTION from './shop.actionTypes';

export const addIntialShopData = (shopCollection) =>{
    return{
        type: SHOP_ACTION.ADD_INTIAL_DATA,
        payload: shopCollection
    }
}