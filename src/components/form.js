import React from 'react';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap'
import Card from 'reactstrap/lib/Card';
import CardBody from 'reactstrap/lib/CardBody';
import CardText from 'reactstrap/lib/CardText';
import CardTitle from 'reactstrap/lib/CardTitle';




class FormA extends React.Component{
    constructor(props){
        super(props)
        this.state = {

            name :'',
            cost :'',
            weight: '',

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
            default:
                return ""
        }
        
    }

    
    
    removeLast = () => {
        this.setState({
            objectList: this.state.objectList
        })
        console.log(JSON.stringify(this.state.objectList));
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
    
        <Form className='m-3'>
            <FormGroup>
                <Label htmlFor="bagSize">BAG SIZE</Label>
                <Input type="text" id='bagSize' name='bagSize' placeholder='Bag Size' required/>
            </FormGroup>
            <Button type='submit' value='submit' color='primary'>Submit</Button>
        </Form>

        <Form onSubmit={this.sumbitFormA} className='m-3'>

            <FormGroup>
                <Label htmlFor="name">Name</Label>
                <Input type="text" id='name' name='name' placeholder='Name of the object' onChange={(n) => this.addInput(n)} required/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="cost">Cost</Label>
                <Input type="text" id='cost' name='cost' placeholder='Cost of the object' onChange={(c) => this.addInput(c)} required/>
            </FormGroup>

            <FormGroup>
                <Label htmlFor="weight">Weight</Label>
                <Input type="text" id='weight' name='weight' placeholder='Weight of the object' onChange={(w) => this.addInput(w)} required/>
            </FormGroup>

                <Button type='submit' value='submit' color='primary'>Add</Button>
        </Form>
        <Card>
            <CardBody>
                <CardTitle>List of Objects</CardTitle>
                <CardText>{JSON.stringify(this.state.objectList)}</CardText>
                <Button type='reset' value='submit' color='danger' onClick = {this.removeLast}>Remove Last</Button>
            </CardBody>
        </Card>

    </>
    )}
}

export default FormA