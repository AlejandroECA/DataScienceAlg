import React from "react";
import './CardIndividual.style.css'
import { Link } from 'react-router-dom';

export const CardIndividual = (props) => {
    return(
        <Link to={`/${props.x.id}`}>
            <div className='card-container'>
            <img alt='alg' src={`https://robohash.org/${props.x.id}?set=set1&size=180x180`}/>
            <h4 >{props.x.name}</h4>
            <p>{props.x.algorithmUsed}</p>
            </div>
        </Link>
    )

}