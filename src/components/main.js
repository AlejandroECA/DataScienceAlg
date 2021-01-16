import React from 'react';
import FormA from './theBag/Bag.component'
import ListOfCards from "./card-list/ListOfCards.component";
import '../App.css';
import {Jumbotron} from 'reactstrap';
import { Switch, Route, Redirect, withRouter,Link } from 'react-router-dom';


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
    
    return (
    <div className='font'>
        <Link to='/home' className='font'>
        <Jumbotron className='robotGif'>
            <h1 className='ml-auto mr-auto'>Algorithms...</h1>
        </Jumbotron>
        </Link>

        <Switch>
            <Route path='/home' component={Home} />
            <Route path='/1' component={BagAlg} />
            <Redirect to='/home' />
        </Switch>

        
    </div>
    )  
}


export default withRouter(Main)