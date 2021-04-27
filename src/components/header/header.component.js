import React from 'react';

import { connect } from 'react-redux'

import CartIcon from '../cart-icon/cart-icon.component'
import CartDropdown from '../cart-dropdown/cart-dropdown.component'


import {createStructuredSelector} from 'reselect'
import { selectCartHidden } from '../../redux/cart/cart.selectors'
import { selectCurrentUser } from '../../redux/user/user.selectors'
import { signOutStart} from './../../redux/user/users.actions'

import {
    HeaderContainer,
    LogoContainer,
    OptionsContainer,
    OptionDiv,
    OptionLink,
    ImgStyled
} from './header.styles'

const Header = ({currentUser, hidden, signOutStart}) =>{
    return(
        <React.Fragment>
            <HeaderContainer>

                <LogoContainer to="/home">
                    <ImgStyled  src='https://media.giphy.com/media/SwUCMUVZkiLyDRsJL3/giphy.gif' />            
                </LogoContainer>

                <OptionsContainer >

                    <OptionLink  to = '/home'>
                        HOME
                    </OptionLink>

                    <OptionLink  to = '/shop'>
                        SHOP
                    </OptionLink>

                    <OptionLink  to = '/alg'>
                        ALG. LIST
                    </OptionLink>
                    
                    {
                        currentUser?
                            <OptionDiv  onClick={signOutStart}>SIGN OUT</OptionDiv>:
                            <OptionLink  to = '/sign'>
                            SIGN IN
                            </OptionLink>

                    }


                    <OptionLink  to = '/shop'>
                        CONTACT
                    </OptionLink>

                    <CartIcon />

                </OptionsContainer>

                { hidden? null:<CartDropdown />}
                
            </HeaderContainer>


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

const mapDispatchToProps =  dispatch => ({
    signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps,mapDispatchToProps)(Header);