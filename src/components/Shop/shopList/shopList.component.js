import React from 'react';

import DefaulTitle from '../../title/title.component'

import { Route , withRouter} from 'react-router-dom';

import {connect} from 'react-redux'
import { fetchCollectionsStart } from '../../../redux/shop/shop.actions'

import CollectionsOverviewContainer from '../collections-overview/collection-overview.container'
import CollectionsPageContainer from '../shop.components/collection/collection.container'

class ShopList extends React.Component{

    // constructor(props){ 
    //     super(props);
    //     this.state = {
    //         loading: true
    //     }
    // }

    // unsubscribeFromSnapshot = null;

    // componentDidMount(){

        // const {updateCollections} = this.props

        // const collectionRef = firestore.collection('collections');

        // //.GET server way promise
        // collectionRef.get()
        // .then(

        //     snapshot => {
        //         const collectionsMap = convertCollectionsSnapshotsToMap(snapshot);
        //         updateCollections(collectionsMap);
        //         this.setState({loading: false});
        //     }

        // )


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


    // send all of this to redux and thunk

    componentDidMount(){
        const { fetchCollectionsStart} = this.props;
        fetchCollectionsStart()
    }

    render(){
        const {match} = this.props
        return(
            <div>
                <DefaulTitle title={'SHOP List'} />
                <div>
                    <Route exact path={`${match.path}`} component={CollectionsOverviewContainer}/>

                    <Route path={`${match.path}/:collectionId`} component={CollectionsPageContainer} />
                </div>
            </div>
        )
    }
}



const mapDispatchToProps = dispatch =>({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
})


export default connect(null, mapDispatchToProps)(withRouter(ShopList))