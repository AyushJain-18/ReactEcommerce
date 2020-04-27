import {createSelector} from 'reselect';

export const selectShop =(state)=> state.shop;

export const selectCollections = createSelector(
    [selectShop],shop=>Object.values(shop.collections)
)
// when have shown here currying
export const selectItem = (categoryName)=>{
   return createSelector(
        [selectShop],shop =>shop.collections[`${categoryName}`]
        )
}
   