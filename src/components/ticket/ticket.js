import React, {Component} from 'react';
import {Col,Row} from 'reactstrap';
import aviaService from '../../service/aviaService';

// import s7 from '../../icons/S7 Logo.svg';
import './ticket.scss';

export default class  Ticket extends Component {
    aviaService = new aviaService();

    state = {
        ticket: {},
    }

    componentDidMount() {
        const {ticks} = this.props
        this.onTicketLoaded(ticks)
    }

    componentDidUpdate(prevProps) {
        if (this.props.ticks !== prevProps.ticks) {
            console.log('updateTick')
            const {ticks} = this.props
            this.onTicketLoaded(ticks)
        }
    }
    onTicketLoaded = (ticket) => {
        this.setState({
            ticket
            
        })
    }

    updateTick = () => {

        // this.aviaService.getSearchId()
        //     .then(this.onTicketLoaded)
        //     .catch(error => console.error('Error', error))
    }
    render() {
        const {price, carrier, stStop, stStops, stDate, stDestination, stDuration, stArrival,stOrigin, finStop, finStops, finDate, finDestination, finDuration, finArrival, finOrigin} = this.state.ticket;
        const aLogo = `https://pics.avs.io/99/36/${carrier}.png`
        const {key} = this.props
        // const stopIndex = stops.map(i => ` ${i}`);
        return(
        
            <div className='ticket' key={key}>
                <Row>
                    <Col>
                        <h3 className='ticket__price'>{price}</h3>
                    </Col>
                    <Col></Col>
                    <Col>
                        <img className='ticket__img' src={aLogo} alt={carrier}></img>
                    </Col>
                </Row>
                <Row>
                    <Col >
                        <h6 className='ticket__title'>{stOrigin} – {stDestination}</h6>
                        <h6 className='ticket__value'>{stDate} – {stArrival}</h6>
                        <h6 className='ticket__title'>{finOrigin} – {finDestination}</h6>
                        <h6 className='ticket__value'>{finDate} – {finArrival}</h6>
                    </Col> 
                    <Col >
                        <h6 className='ticket__title'>В пути</h6>
                        <h6 className='ticket__value'>{stDuration}</h6>
                        <h6 className='ticket__title'>В пути</h6>
                        <h6 className='ticket__value'>{finDuration}</h6>
                    </Col> 
                    <Col >
                        <h6 className='ticket__title'>{stStop}</h6>
                        <h6 className='ticket__value'>{stStops} <br/></h6>
                        <h6 className='ticket__title'>{finStop}</h6>
                        <h6 className='ticket__value'>{finStops}</h6>
                    </Col> 
                </Row>
            </div>
            
        )
    }
    
}

