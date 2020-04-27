import React from 'react';
import './preview-single-item.styles.scss'

import {Redirect, Link,withRouter} from 'react-router-dom'

import CustumButon from '../../CustumComponents/CustumButon/custumButton.component';

import {connect} from 'react-redux';
import {HideCart, AddItemToCart, ToggleCartDisplayStatus} from '../../../reducer/cart/cart.action'
import {updatePreviewItem} from '../../../reducer/item/item.action'

import {selectCartHiddenStatus} from'../../.././reducer/cart/cart.selector';
import {selectCollections} from '../../../reducer/shop/shop.selector'

class PreviewSingleItem extends React.Component{
    componentDidMount(){
        this.props.hideCartAction();
    }
    componentDidMount(){
        const item = this.props.location.item
        this.props.updateItemAction(item);
    }
    selectRandomItem(){
        let randomNumber = Math.floor(Math.random() * 35) + 1 ;
        let item = this.getRandomItem(randomNumber)
        this.props.updateItemAction(item)
    }

     getRandomItem =(itemid)=>{
        let ItemsArrays =[]
        this.props.collections.map(eachCategory=>{
          eachCategory.items.forEach(item =>ItemsArrays.push(item))
        })
        let randomitem = ItemsArrays.filter(item=> item.id===itemid);
        return randomitem[0]
      }
    render(){
        if(!this.props.location.item){
            return <Redirect to= '/'/>
        }else{
            console.log(this.props);
        const{id,name,imageUrl,price} = this.props.item;
        return(
            <div key ={id} className="single-item-container">
                    <div className="single-item-preview">
                       <div className="single-item-image"
                            style ={
                                {
                                    backgroundImage: `url(${imageUrl})`
                                }
                            }
                       />
                       <div className ="single-item-content">
                            <h1>{name}</h1>
                            <div className="single-item-description">
                                <p>
                                
                                Product has no wonder they are worried — the quality of a product description'
                                can make or break a sale, especially if it doesn’t include the 
                                information a shopper needs to make a purchase decision. 
                                Providing key product details is critical 
                                </p>
                            </div>
                            <div className ="single-item-price">
                            <h2>price: {price}$</h2>
                            </div>
                            <div className ='single-button-container'>
                            <CustumButon onClick={()=> this.props.addItemToCartAction(this.props.item)} >Add to cart</CustumButon>
                            <CustumButon onClick={()=> this.props.toggleCartDisplay()} >
                               {this.props.isCartHidden? 'View cart':'Hide Cart'} 
                         </CustumButon>
                            <Link to="/shop">
                                <CustumButon>More items</CustumButon>
                            </Link>
                        </div>
                       </div>
                       <div className='nxt-btn'onClick={()=>this.selectRandomItem()}>
                           <span >&#10095;</span>
                       </div>
                    </div>
            </div>
            
       )
    }
  }
}
const mapStateToProps =(state)=>({
    isCartHidden: selectCartHiddenStatus(state),
    item: state.item,
    collections: selectCollections(state)
})
const mapDispatchToProps =(dispatch)=>({
    hideCartAction: ()=>dispatch(HideCart()),
    addItemToCartAction: (item)=>dispatch(AddItemToCart(item)),
    toggleCartDisplay: ()=>dispatch(ToggleCartDisplayStatus()),
    updateItemAction: (item)=>dispatch(updatePreviewItem(item))
})
export default  withRouter(connect(mapStateToProps, mapDispatchToProps)(PreviewSingleItem));