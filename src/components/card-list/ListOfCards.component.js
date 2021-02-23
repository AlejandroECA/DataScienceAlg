import React from 'react';
import './ListOfCards.style.css';
import {CardIndividual} from '../card/CardIndividual.component';
import {Container,Col,Row} from 'reactstrap'
import {SearchBox} from '../searchBox/searchBox.component'
import DefaulTitle from '../title/title.component';

import {connect} from 'react-redux'


const ListOfCards = ({algorithms}) => {
  
    let searchField=''

    // async way 

    // componentDidMount = async() => {
    //     try {
    //         const getDataB = await fetch('http://localhost:3000/algorithms')
    //         const dataToJ = await getDataB.json()
    //         this.setState({algorithmList: dataToJ},console.log(dataToJ))
    //     }
    //     catch(err){
    //         console.log('not possible now');
    //     }
    // }

    // promises

    // componentDidMount() => {
    //     const getDataB = await fetch('')
    //     .then(response => response.json())
    //     .then(alg => this.setState({algorithmList:alg}))
    // .catch((e)=>(console.log('not possible now'))
    // }


    const checkAndFind = (e) => { searchField = e.target.value }
    


    console.log(algorithms.algorithmList);

    const fiterAlg = algorithms.algorithmList.filter(alg => alg.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

    return(
        <div>
            <Container>
                <Row >
                    <DefaulTitle title={'Algorithms List'} />
                    <Col xs='12'>
                        <SearchBox handleChange={checkAndFind} placeholder={'Search Algorithms'}/>
                    
                    </Col>
                </Row>
            </Container>

            <Container>
                <Row >
                    {fiterAlg.map( (x) => 
                    <Col xs='6' sm='6' md='4' lg='3'className='card-list'>
                        <CardIndividual
                        key={x.id} index={x.id} x={x} />
                    </Col>
                    )}      
                </Row>
            </Container>
        </div>
    )
    

}

const mapStateToProps = (state) =>({
    algorithms : state.algorithms,
})

export default connect(mapStateToProps)(ListOfCards)

