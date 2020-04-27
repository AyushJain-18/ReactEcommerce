import {createSelector} from 'reselect';

export const selectShop =(state)=> state.shop;

export const selectCollections = createSelector(
    [selectShop],shop=>Object.values(shop.collections)
)

export const selectItem = createSelector(
    [selectCollections]
)