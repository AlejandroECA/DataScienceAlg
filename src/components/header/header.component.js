import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom'

import {auth} from '../../firebase/firebase.utils';

import { connect } from 'react-redux'

const Header = ({currentUser}) =>{
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
                </div>
            </div>


        </React.Fragment>
    )
}

// <Link to='/home'>
// <Jumbotron className='robotGif m-0'>
//     <h1 className='ml-auto mr-auto textTitle'>Awesome title...</h1>
// </Jumbotron>
// </Link>

const mapStateToProps = (state) => ({
    currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(Header);