
import App from '../../App';
import { compose } from 'redux';
import {createStructuredSelector} from 'reselect'
import { selectFetchingFlag } from '../../reducer/user/user.selector';
import WithSpinner from '../with-spinner/with-spinner.component';
import { connect } from 'react-redux';
import HeaderComponents from './header.components';



// const mapStateToProps = createStructuredSelector({
//     isFetching: selectFetchingFlag,
// })
const mapStateToProps = (state)=>{
    return{
        isLoading: selectFetchingFlag(state)
    }
}

const HeaderContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(HeaderComponents)

export default HeaderContainer