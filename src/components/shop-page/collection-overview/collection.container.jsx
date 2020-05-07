import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux'
import { compose } from 'redux'
import {selectFectingState, selectIsCollection} from '../../../reducer/shop/shop.selector'
import WithSpinner from '../../with-spinner/with-spinner.component'
import CollectionOverview from './collection-overview.component'

const mapStateToprops = createStructuredSelector({
    isLoading: selectIsCollection
})
/**
 * mapStateToprops---
 * our withRouter is a HOC which will return a compoent that component accept to props 
 * one of the we have to pass to enable or to disable loading router
 * it will be automatically be passed,
 * b/c connect pass props to the compoent we passed in its argument
 */

const CollectionOverviewContainer = compose(
    connect(mapStateToprops),
    WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
/** 
 * compose fn--
    here we have used compose function whih runs form right to left.
    compose will return a function to that return function we will pass our component 
    and to compose finction we will all those argumnent that we want to run on our component 
*/