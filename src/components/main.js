import React from 'react';
import { Switch, Route, Redirect, withRouter,Link } from 'react-router-dom';


import FormA from './theBag/Bag.component'
import ListOfCards from "./card-list/ListOfCards.component";
import Navig from '../components/navBar/Navig.component'
import ShopHome from './Shop/home/ShopHome.component'
import ShopList from './Shop/shopList/shopList.component'
import Header from './header/header.component'
import SignInAndOut from './signInAndOut/signInAndOut.component'

import '../App.css';

const Main = () => {


    const Home = () => {
        return (
            <div></div>
        )
        
    }
    
    return (
    <div className='font'>

        <Header />
        <Navig />

        <Switch>
            <Route exact path='/home' component={Home} />
            <Route path='/alg' component={ListOfCards} />
            <Route path='/1' component={FormA} />
            <Route exact path='/shop' component={ShopHome} />
            <Route path='/Ramen' component={ShopList} />
            <Route path='/sign' component={SignInAndOut} />
        </Switch>

    </div>
    )  
}


export default withRouter(Main)