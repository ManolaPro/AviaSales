import React, {Component}from 'react';
import './tabs.scss';

export default class Tabs extends Component  {
    state = {
        chip: true
    }

    // onClick = () => {
    //     this.setState(({chip}) => ({
    //         chip:!chip
    //     }))
    // }

    render(){
        // const {chip} = this.state
        const {onClick, chip} = this.props
        
        return(
            <ul 
                className='tabs'
                onClick={onClick}>
                <li 
                    className={chip ? 'tabs__tab tabs__tab_active' : 'tabs__tab'}
                    >
                    <h5 className='tabs__title'>Самый дешевый</h5>
                </li>
                <li 
                    className={chip ? 'tabs__tab' : 'tabs__tab tabs__tab_active'}>
                    <h5 className='tabs__title'>Самый быстрый</h5>
                </li>
            </ul>
        )
    }
    
}
