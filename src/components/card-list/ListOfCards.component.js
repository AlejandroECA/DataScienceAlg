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
        this.setState({searchField:e.target.value},()=> console.log(this.state)
        )
    }


    render(){

        const {algorithmList, searchField } = this.state; 

        const fiterAlg = algorithmList.filter(alg => alg.name.toLowerCase().includes(searchField.toLocaleLowerCase()))

        return(
            <>
                <Container className="themed-container">
                    <Col >
                        <Row>
                            <h1 className='ml-auto mr-auto'>Algorithm List</h1>
                        </Row>
                        <Row className="row">
                            <SearchBox handleChange={this.checkAndFind} placeholder={'Search Algorithms'}/>
                        
                        </Row>
                    </Col>
                </Container>
                <Container>
                    <Col >
                        <Row className='card-list'>
                            {fiterAlg.map( (x) => 
                                <CardIndividual
                                key={x.id} index={x.id} x={x} />)
                            }
                        </Row>
                    </Col>
                </Container>
            </>
        )
    }

}

export default ListOfCards

