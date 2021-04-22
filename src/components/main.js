import React from 'react';
import { Switch, Route,  withRouter, Redirect} from 'react-router-dom';


import FormA from './theBag/Bag.component'
import ListOfCards from "./card-list/ListOfCards.component";
import Navig from '../components/navBar/Navig.component'
import ShopHome from './Shop/home/ShopHome.component'
import ShopList from './Shop/shopList/shopList.component'
import Header from './header/header.component'
import SignInAndOut from './signInAndOut/signInAndOut.component'
import CheckOutPage from './checkout/checkOut.component'

import { connect } from 'react-redux';

import '../App.css';

import { checkUserSession } from '../redux/user/users.actions'

import SignUp from './signInAndOut/sign-up/sign-up.component';

import { createStructuredSelector} from 'reselect'

import { selectCurrentUser} from '../redux/user/user.selectors'
import { selectCollectioForpreview } from '../redux/shop/shop.selector'
import {selectWholeAlg,selectAlgIndividual,selectALgList} from '../redux/algorithmsL/algorithm.selector'

class Main extends React.Component {


    unsubscribeFromAuth = null;

    componentDidMount(){
        const { checkUserSession} = this.props
        checkUserSession()
    }

    componentWillUnmount(){
        this.unsubscribeFromAuth();
    }

    Home = () => {
        return (
            <div></div>
        )
    }
    
    render(){
    return (
        <div className='font'>

            <Header />
            <Navig />

            <Switch>
                <Route exact path='/home' component={this.Home} />
                <Route path='/alg' component={ListOfCards} />
                <Route path='/1' component={FormA} />
                <Route exact path='/shop' component={ShopHome} />
                <Route exact path='/checkout' component={CheckOutPage} />
                <Route exact path='/sign' render={() => this.props.currentUser? 
                    (<Redirect to='/' />):(<SignInAndOut />)} 
                />
                <Route path='/shop/collection' component={ShopList} />

                
                
            </Switch>

        </div>
    )}
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,

})

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps)
    (withRouter(Main))