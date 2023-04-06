import ITEM_ACTIONS from "./item.actiontype"
const Initial_item_state ={
}
const ItemReducer =(state=Initial_item_state,action)=>{
  switch(action.type){
  case ITEM_ACTIONS.UPDATE_PREVIEW_ITEM:
    return{
      ...action.payload
    }
  default:
    return state
  }
} 

export default ItemReducer;