import React from 'react';
import { Switch, Route,  withRouter} from 'react-router-dom';


import FormA from './theBag/Bag.component'
import ListOfCards from "./card-list/ListOfCards.component";
import Navig from '../components/navBar/Navig.component'
import ShopHome from './Shop/home/ShopHome.component'
import ShopList from './Shop/shopList/shopList.component'
import Header from './header/header.component'
import SignInAndOut from './signInAndOut/signInAndOut.component'

import { auth, createUserProfileDocument } from '../firebase/firebase.utils'

import { connect } from 'react-redux';
import { setCurrentUser } from '../redux/user/users.actions'

import '../App.css';

class Main extends React.Component {


    unsubscribeFromAuth = null;

    componentDidMount(){

        const {setCurrentUser} = this.props

        this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => 
        {
            if(userAuth){
                const userRef = await createUserProfileDocument(userAuth)
                userRef.onSnapshot(snapShot => {
                    setCurrentUser({
                        currentUser: {
                            id: snapShot.id,
                            ...snapShot.data()
                        }
                    },()=>{console.log(setCurrentUser);})
                });
            }
            else{
                setCurrentUser(userAuth)       
            }
        })
        

        
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
                <Route path='/Ramen' component={ShopList} />
                <Route path='/sign' component={SignInAndOut} />
            </Switch>

        </div>
    )}
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(withRouter(Main))