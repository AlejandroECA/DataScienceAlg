import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


import {createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'

const Header = ({currentUser, hidden}) =>{
    return(
        <React.Fragment>
            <div className='header'>
                <Link className='logo-container' to="/home">
                    <img className='logo' src='https://media.giphy.com/media/SwUCMUVZkiLyDRsJL3/giphy.gif' />            
                </Link>
                <div className='options'>

                    <Link className='option' to = '/home'>
                        HOME
                    </Link>

                    <Link className='option' to = '/shop'>
                        SHOP
                    </Link>

                    <Link className='option' to = '/alg'>
                        ALG. LIST
                    </Link>
                    
                    {
                        currentUser?
                            <div className='option' onClick={()=> auth.signOut()}>SIGN OUT</div>:
                            <Link className='option' to = '/sign'>
                            SIGN IN
                            </Link>

                    }


                    <Link className='option' to = '/shop'>
                        CONTACT
                    </Link>

                    <CartIcon />

                </div>
                { hidden? null:<CartDropdown />}
                
            </div>


        </React.Fragment>
    )
}

// <Link to='/home'>
// <Jumbotron className='robotGif m-0'>
//     <h1 className='ml-auto mr-auto textTitle'>Awesome title...</h1>
// </Jumbotron>
// </Link>

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    hidden: selectCartHidden
})

export default connect(mapStateToProps)(Header);