import React from 'react';
import FormA from './theBag/Bag.component'
import ListOfCards from "./card-list/ListOfCards.component";
import '../App.css';
import {Jumbotron} from 'reactstrap';
import { Switch, Route, Redirect, withRouter,Link } from 'react-router-dom';
import Navig from '../components/navBar/Navig.component'

import ShopHome from './Shop/home/ShopHome.component'

import ShopList from './Shop/shopList/shopList.component'

const Main = () => {

    
    return (
    <div className='font'>

        <Link to='/home' className='font'>
            <Jumbotron className='robotGif m-0'>
                <h1 className='ml-auto mr-auto textTitle'>Awesome title...</h1>
            </Jumbotron>
        </Link>
        <Navig />

        <Switch>
            <Route exact path='/home' component={ListOfCards} />
            <Route path='/1' component={FormA} />
            <Route exact path='/shop' component={ShopHome} />
            <Route path='/Ramen' component={ShopList} />
        </Switch>

    </div>
    )  
}


export default withRouter(Main)