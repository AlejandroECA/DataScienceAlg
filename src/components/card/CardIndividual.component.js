import React from "react";
import './CardIndividual.style.css'
import { Link } from 'react-router-dom';

export const CardIndividual = (props) => {
    return(
        <Link className='linkto' to={`/${props.x.id}`}>
            <div className='card-container'>
                <img alt='alg' src={`https://picsum.photos/id/${props.x.id + 1023}/180/180`}/>
                <h2 >{props.x.name}</h2>
                <h4 className='mb-4'> {props.x.algorithmUsed}</h4>
            </div>
        </Link>
    )

}
                // `https://robohash.org/${props.x.id}?set=set1&size=180x180`
