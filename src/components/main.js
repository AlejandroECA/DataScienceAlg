import React from 'react';
import FormA from './theBag/Bag.component'
import ListOfCards from "./card-list/ListOfCards.component";
import '../App.css';
import {Jumbotron} from 'reactstrap';
import { Switch, Route, Redirect, withRouter,Link } from 'react-router-dom';
import Navig from '../components/navBar/Navig.component'

import ShopHome from './Shop/home/ShopHome.component'


const Main = () => {


    const BagAlg =() =>{
        return(
            <FormA />
        )
    }

    const Home =() =>{
        return(
            <ListOfCards />
        )
    }

    const ShopSection = () => {
        return(
            <ShopHome />
        )
    }
    
    return (
    <div className='font'>

        <Link to='/home' className='font'>
            <Jumbotron className='robotGif m-0'>
                <h1 className='ml-auto mr-auto textTitle'>Awesome title...</h1>
            </Jumbotron>
        </Link>
        <Navig />

        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/1' component={BagAlg} />
            <Route path='/shop' component={ShopSection} />
            <Redirect to='/home' />
        </Switch>

    </div>
    )  
}


export default withRouter(Main)