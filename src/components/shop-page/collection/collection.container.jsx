import {connect} from 'react-redux'
import {compose} from 'redux'
import {createStructuredSelector} from 'reselect'
import {selectIsCollection} from '../../../reducer/shop/shop.selector'

import WithSpinner from '../../with-spinner/with-spinner.component'
import collectionComponent from './collection.component'


/** 
    const mapStateToprops = ()=>{
        return{
            isLoading: selectIsCollection(state)
        }
    }
*/

const mapStateToprops = createStructuredSelector({
        isLoading: selectIsCollection
    })

const CollectionContainer = compose(
    connect(mapStateToprops),
    WithSpinner
)(collectionComponent)

export default  CollectionContainer;
