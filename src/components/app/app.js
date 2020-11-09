import React, { Component } from 'react';
import {Col, Row, Container} from 'reactstrap';
import logo from '../../icons/Logo.svg';
import './app.scss';
import Filter from '../filter';
import Tabs from '../tabs';
import TicketsList from '../ticketsList';
import aviaService from '../../service/aviaService';

export default class App extends Component {
    
    aviaService = new aviaService();
    state = {
        data: null,
        stops: 3,
        chip: true
    }

    componentDidMount() {
        this.onLoaded(3)
    }

    onChange = (e) => {
        const stops = +e.target.value
        this.onLoaded(stops)
        
    }

    onLoaded = (stops) => {
        this.aviaService.getSearchId(stops)
        .then((data) => {
            this.setState({data, stops})
        })
    }
    
    onClick = (e) => {
        const target = e.target
        if (target && target.classList.contains('tabs__tab')) {
            this.setState(({chip}) => ({
                chip:!chip
            }))
        }
        
    }

    render() {
        const {data, chip} = this.state
        return(
            <div className='app'>
                <Container>
                    <img src={logo} alt='logo' className='logo'></img>
                </Container>
                <Container>
                    <Row>
                        <Col 
                            lg={{size: 3, offset: 1}}>
                            <Filter
                                onChange={this.onChange}/>
                        </Col>
                        <Col 
                            lg={{size: 7, offset: 0}}>
                            <Tabs
                                onClick={this.onClick}
                                chip={chip}/>
                            <TicketsList
                                getData={data}
                                chip={chip}/>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}