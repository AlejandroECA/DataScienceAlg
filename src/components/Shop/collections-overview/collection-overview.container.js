import { connect } from 'react-redux'
import { createStructuredSelector} from 'reselect'
import { compose } from 'redux'


import { selectIsCollectionFetching } from '../../../redux/shop/shop.selector'
import WithSpinner from '../../with-spinner/with-spinner.component'
import CollectionPage from '../shop.components/collection/collection.component'


const mapStateToProps =  createStructuredSelector({
    isLoading: selectIsCollectionFetching
});

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner,
)(CollectionPage);



export default CollectionsOverviewContainer