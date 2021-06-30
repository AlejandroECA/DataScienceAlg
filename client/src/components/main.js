import React, { useEffect , lazy, Suspense } from 'react';
import { Switch, Route,  withRouter, Redirect } from 'react-router-dom';


// import FormA from './theBag/Bag.component'
// import ListOfCards from "./card-list/ListOfCards.component";
import Navig from '../components/navBar/Navig.component'
// import ShopHome from './Shop/home/ShopHome.component'
// import ShopList from './Shop/shopList/shopList.component'
import Header from './header/header.component'
// import SignInAndOut from './signInAndOut/signInAndOut.component'
// import CheckOutPage from './checkout/checkOut.component'

import { connect } from 'react-redux';


import { checkUserSession } from '../redux/user/users.actions'

import SignUp from './signInAndOut/sign-up/sign-up.component';

import { createStructuredSelector} from 'reselect'

import { selectCurrentUser} from '../redux/user/user.selectors'
import { selectCollectioForpreview } from '../redux/shop/shop.selector'
import {selectWholeAlg,selectAlgIndividual,selectALgList} from '../redux/algorithmsL/algorithm.selector'

import { GlobalStyle } from '../global.styles'

import Spinner from './spinner/spinner.component'

import ErrorBoundary from './error-boundary/error-boundary.component'

const ShopHome = lazy( () => import('./Shop/home/ShopHome.component'));
const ListOfCards = lazy( () => import("./card-list/ListOfCards.component"));
const FormA = lazy( () => import('./theBag/Bag.component'));
const CheckOutPage = lazy( () => import('./checkout/checkOut.component'));
const ShopList = lazy( () => import('./Shop/shopList/shopList.component'));
const SignInAndOut = lazy( () => import('./signInAndOut/signInAndOut.component'));


const Main = ({checkUserSession, currentUser}) => {


    useEffect(()=>{
        checkUserSession()
    },[checkUserSession])


    const Home = () => {
        return (
            <div></div>
        )
    }
    
    return (
    <div className='font'>

        <GlobalStyle />

        <Header />  
        <Navig />



            <Switch>

            <ErrorBoundary>

                <Suspense fallback={<Spinner/>}>
            
                    <Route exact path='/home' component={Home} />
                    <Route path='/alg' component={ListOfCards} />
                    <Route path='/1' component={FormA} />
                    <Route exact path='/shop' component={ShopHome} />
                    <Route exact path='/checkout' component={CheckOutPage} />
                    <Route exact path='/sign' render={() => currentUser? 
                        (<Redirect to='/' />):(<SignInAndOut />)} 
                    />
                    <Route path='/shop/collection' component={ShopList} />

                </Suspense>

            </ErrorBoundary>
                    
            </Switch>




    </div>
)}


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