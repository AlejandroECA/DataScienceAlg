import React from 'react';
import './header.styles.scss'
import {Link} from 'react-router-dom'
import {Jumbotron} from 'reactstrap';


const Header = () =>{
    return(
        <React.Fragment>
            <div className='header'>
                <Link className='logo-container' to="/home">
                    <img className='logo' src='https://media.giphy.com/media/7A4HfQ1P53f3mP1pec/giphy.gif' />            
                </Link>
                <div className='options'>
                    <Link className='option' to = '/shop'>
                        SHOP
                    </Link>

                    <Link className='option' to = '/shop'>
                        CONTACT
                    </Link>
                </div>
            </div>

            <Link to='/home'>
                <Jumbotron className='robotGif m-0'>
                    <h1 className='ml-auto mr-auto textTitle'>Awesome title...</h1>
                </Jumbotron>
            </Link>
        </React.Fragment>
    )
}

export default Header