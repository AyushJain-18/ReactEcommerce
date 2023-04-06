import ITEM_ACTIONS from "./item.actiontype"

export const  updatePreviewItem =(item)=>{
  return{
    type: ITEM_ACTIONS.UPDATE_PREVIEW_ITEM,
    payload: item
  }
}