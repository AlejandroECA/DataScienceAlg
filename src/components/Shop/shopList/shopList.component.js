import React from 'react';

import PreviewCollection from '../preview-collection/preview.colletion.component'

class ShopList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            collections: [],
        }

    }

    componentDidMount = async() => {
        try {
            const getDataB = await fetch('http://localhost:3000/SHOP_DATA')
            const dataToJ = await getDataB.json()
            this.setState({collections: dataToJ},console.log(dataToJ))
        }
        catch(err){
            console.log('not possible now');
        }
    }


    render(){

        const {collections} = this.state

        return(
            <div>
                <h1 style={{backgroundColor:'white', opacity:'70%'}}>Ramen</h1>
                <div>
                {collections.map(({id, ...otherProps}) => (
                        <PreviewCollection id={id} {...otherProps} />
                    ))}
                </div>
            </div>
        )
    }

}

export default ShopList