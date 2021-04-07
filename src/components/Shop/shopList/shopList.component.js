import React from 'react';

import DefaulTitle from '../../title/title.component'

import { Route , withRouter} from 'react-router-dom';

import CollectionsOverview from '../collections-overview/collections-overview.componenct'

import CollectionPage from '../shop.components/collection/collection.component'

import {firestore, convertCollectionsSnapshotsToMap} from '../../../firebase/firebase.utils'

import {connect} from 'react-redux'
import {updateCollections} from '../../../redux/shop/shop.actions'

import WithSpinner from '../../with-spinner/with-spinner.component'

const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const ColletionPageWithSpinner = WithSpinner(CollectionPage)


class ShopList extends React.Component{

    constructor(props){ 
        super(props);
        this.state = {
            loading: true
        }
    }

    unsubscribeFromSnapshot = null;

    componentDidMount(){

        const {updateCollections} = this.props

        const collectionRef = firestore.collection('collections');

        //.GET server way promise
        collectionRef.get()
        .then(

            snapshot => {
                const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
                updateCollections(collectionsMap);
                this.setState({loading: false});
            }

        )


        //using URL and fetch - Super Nested :/
        // fetch('https://firestore.googleapis.com/v1/projects/datasc-6fb40/databases/(default)/documents/collections')
        // .then(response => response.json())
        // .then(collections => console.log(collections))

        
        //Listener from firebase
        // this.unsubscribeFromSnapshot = collectionRef.onSnapshot(async snapshot => {
        //     const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
        //     updateCollections(collectionsMap);
        //     this.setState({loading: false});
        // } )

    }

    render(){
        const {match} = this.props
        const {loading} = this.state
        return(
            <div>
                <DefaulTitle title={'SHOP List'} />
                <div>
                    <Route exact path={`${match.path}`} render={(props)=> <CollectionsOverviewWithSpinner isLoading={loading} {...props}/> } />
                    <Route path={`${match.path}/:collectionId`} render={(props) => <ColletionPageWithSpinner isLoading={loading} {...props} /> } />
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch =>({
    updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToProps)(withRouter(ShopList))