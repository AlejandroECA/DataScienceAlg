import { connect } from 'react-redux'
import { compose } from 'redux'
import { createStructuredSelector} from 'reselect'


import { selectIsCollectionLoaded } from '../../../../redux/shop/shop.selector'
import WithSpinner from '../../../with-spinner/with-spinner.component'
import CollectionPage from './collection.component'

const mapStateToProps =  createStructuredSelector({
    isLoading: state => !selectIsCollectionLoaded(state)
});

const CollectionsPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);



export default CollectionsPageContainer