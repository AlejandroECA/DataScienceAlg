import React from 'react';



class Search extends React.Component {
    constructor(){
        super();
        this.state ={
            algorithmList:[]
            
        }
    }

    // async way 

    componentDidMount = async() => {
        try {
            const getDataB = await fetch('../dataBase/algorithmToCheck.txt')
            const dataToJ = await getDataB.json()
            this.setState({algorithmList: dataToJ})
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

    render(){
        return(
            <>
                <h1>Algorithm List</h1>
                {this.state.algorithmList.map( (x,index) => <h3 key={index}>{x.name}</h3>)}
            </>
        )
    }

}

export default Search
