import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardText from 'reactstrap/lib/CardText';
import CardTitle from 'reactstrap/lib/CardTitle';
import {Container} from 'reactstrap'
import './Bag.style.css'
import { ReusableForm } from "../form/form.component";



class FormA extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            name :'',
            cost :'',
            weight: '',
            bagSize:'',

            objectList: []
        }
    }



    sumbitFormA = (event) => {
        event.preventDefault();
        this.transform(event)
    }


    addInput = (n) => {

        console.log(n.target.id);

        switch (n.target.id){
            case 'name':
            this.setState({
                name : n.target.value,
            })
            break
            case 'cost':
            this.setState({
                cost : n.target.value,
            })
            break
            case 'weight':
            this.setState({
                weight : n.target.value,
            })
            break
            case 'bagSize':
                this.setState({
                    bagSize : n.target.value,
                })
            break
            default:
                return ""
        }
        
    }

    
    
    removeLast = () => {
        
        this.setState({
            objectList: this.state.objectList.slice(0,-1)
        },w => console.log(JSON.stringify(this.state.objectList)))
        
    }


    transform = async (event) => {

        await this.setState({          
            objectList:[...this.state.objectList, {
                name: this.state.name,
                cost :this.state.cost,
                weight: this.state.weight,
            }]
        })

        localStorage.setItem('objectList',JSON.stringify(this.state.objectList))
        console.log(localStorage.getItem('objectList'));
        console.log(this.state.objectList);

    }

    render(){

    return (
        <>
        <Container fluid className='tittleForm'>
            <h1>BAG OF THINGS</h1>
        </Container>
        
        <Form className='m-3'>
            <ReusableForm id={'bagSize'} placeholder={'Bag Size'} changueHandler={this.addInput} />
        </Form>

        <p className='ml-5'>For a Bag Size of:  {this.state.bagSize}</p>

        <Form onSubmit={this.sumbitFormA} className='m-3'>

            <ReusableForm id={'name'} placeholder={'Name'} changueHandler={this.addInput} />
            <ReusableForm id={'cost'} placeholder={'Cost'} changueHandler={this.addInput} />
            <ReusableForm id={'weight'} placeholder={'Weight'} changueHandler={this.addInput} />

            <Button type='submit' value='submit' color='primary'>Add</Button>
        </Form>
        <Card>
            <CardBody>
                <CardTitle>List of Objectsfor a Bag Size of:  {this.state.bagSize}</CardTitle>
                <CardText>{JSON.stringify(this.state.objectList)}</CardText>
                <Button type='reset' value='submit' color='danger' onClick = {this.removeLast}>Remove Last</Button>
            </CardBody>
        </Card>

    </>
    )}
}

export default FormA