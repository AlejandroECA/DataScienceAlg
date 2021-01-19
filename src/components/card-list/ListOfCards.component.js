import React from 'react';
import './ListOfCards.style.css';
import {CardIndividual} from '../card/CardIndividual.component';
import {Container,Col,Row} from 'reactstrap'
import {SearchBox} from '../searchBox/searchBox.component'


class ListOfCards extends React.Component {
    constructor(){
        super();
        this.state ={
            algorithmList:[],
            searchField:''
        }
    }

    // async way 

    componentDidMount = async() => {
        try {
            const getDataB = await fetch('http://localhost:3000/algorithms')
            const dataToJ = await getDataB.json()
            this.setState({algorithmList: dataToJ},console.log(dataToJ))
        }
        catch(err){
            console.log('not possible now');
        }
    }

    // promises

    // componentDidMount() => {
    //     const getDataB = await fetch('')
    //     .then(response => response.json())
    //     .then(alg => this.setState({algorithmList:alg}))
    // .catch((e)=>(console.log('not possible now'))
    // }


    checkAndFind= (e) => {
        this.setState({searchField: e.target.value}
        )
    }


    render(){

        const {algorithmList, searchField } = this.state; 

        const fiterAlg = algorithmList.filter(alg => alg.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

        return(
            <>
                <Container>
                    <Row >
                        <Col xs='12' className='text-center'>
                            <h1 className=' titleOfCards ml-auto'>Algorithm List</h1>
                        </Col>
                        <Col xs='12'>
                            <SearchBox handleChange={this.checkAndFind} placeholder={'Search Algorithms'}/>
                        
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
            </>
        )
    }

}

export default ListOfCards

