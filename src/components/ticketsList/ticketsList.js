import React, {Component} from 'react';
import Spinner from '../spinner/spinner';
import Ticket from '../ticket';
import nextId from 'react-id-generator';

export default class TicketsList extends Component {
    

    state = {
        tickList: null,
        chip: true
    }


    componentDidUpdate(prevProps) {
        const {getData, chip} = this.props
        if (this.props.chip !== prevProps.chip) {
            if (!chip) {
                getData.sort(fast)
                function fast(a, b) {
                    return a.stDurationNum - b.stDurationNum
                }               
            } else {
                getData.sort(price)
                function price(a, b) {
                    return a.priceNum - b.priceNum
                }
            }
            this.updateTick(getData)
        }
        if (this.props.getData !== prevProps.getData) {
            
            if (chip) {
                getData.sort(price)
                function price(a, b) {
                    return a.priceNum - b.priceNum
                }
                
            }
            this.updateTick(getData)
        }
    }

    updateTick = (getData) => {
        this.setState({tickList:getData})
    }

    renderTickets(data) {
        
        return data.map((item) => {
            const id = nextId()
            return(
                <Ticket
                    ticks={item}
                    key={id}/>
            )
        })
    }

    render() {
        const {tickList} = this.state
        
        if (!tickList) {
            return <Spinner/>
        }

        const ticks = this.renderTickets(tickList);
        return(
            <>
                {ticks}
            </>
        )
    }  
}


