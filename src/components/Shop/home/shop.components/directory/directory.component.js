import React from 'react';
import './directory.styles.scss'
import MenuItem from '../menu-items/menu-item.component'

class Directory extends React.Component {

    constructor(){
        super();
        this.state={
            sections:[],
        }
    }

    componentDidMount = async() => {
        try {
            const getDataB = await fetch('http://localhost:3000/dir')
            const dataToJ = await getDataB.json()
            this.setState({sections: dataToJ},console.log(dataToJ))
        }
        catch(err){
            console.log('not possible now');
        }
    }


    render(){
    return(
        <div className='directory-menu'>
            {this.state.sections.map(({id,imageUrl,title,sub,size}) => 
            <MenuItem key={id} title={title} subtitle={sub} imageUrl={imageUrl} size={size} />
            )}       
        </div>
    )
    }
}

export default Directory