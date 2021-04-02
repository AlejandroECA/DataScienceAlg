import React from "react";
import {CardContainer, LinkCardIndividual } from './CardIndividual.styles'

export const CardIndividual = (props) => {
    return(
        <LinkCardIndividual to={`/${props.x.id}`}>
            <CardContainer>
                <img alt='alg' src={`https://picsum.photos/id/${props.x.id + 1023}/180/180`}/>
                <h2 >{props.x.name}</h2>
                <h4 className='mb-4'> {props.x.algorithmUsed}</h4>
            </CardContainer>
        </LinkCardIndividual>
    )

}
                // `https://robohash.org/${props.x.id}?set=set1&size=180x180`
