import {createSelector} from 'reselect';

export const selectShop =(state)=> {
    if(state.shop){
        return state.shop
    }};

export const selectCollections = createSelector(
    [selectShop],shop=>{
        if(shop===null||shop===undefined){
            return null;
        }
         return Object.values(shop.collections)
    }
)
// when have shown here currying
export const selectItem = (categoryName)=>{
   return createSelector(
        [selectShop],shop =>shop.collections[`${categoryName}`]
        )
}

export const selectFectingState = createSelector(
    [selectShop],
        shop=>shop.isFetching
)

export const selectIsCollection = createSelector(
    [selectShop], shop=> !shop.collections  // !!
)
   