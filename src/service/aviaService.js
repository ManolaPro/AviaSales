export default class AviaService {
    constructor() {
        this._apiBase = 'https://front-test.beta.aviasales.ru';
    }
    
    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`);
    
        if (!res.ok) {
          throw new Error(`Could not fetch ${url}` +
            `, received ${res.status}`);
        }
        return await res.json();
    }
    

    getSearchId = async (stopses) => {
        const id = await this.getResource('/search');
        return await this.getAllTicket(id.searchId, stopses);
    }

    getAllTicket = async (id, stopses) => {
        const all = await this.getResource(`/tickets?searchId=${id}`)
        return this.findTickets(all.tickets, stopses)
    }

    findTickets = async (tickets, i) => {
        if (i === 8) {
            const transTick = tickets.map(item => this.transformTick(item))
            console.log(tickets)
            return transTick
        }
        const tick = await tickets.filter((tickets) => {
            return (tickets.segments[0].stops.length === i & tickets.segments[1].stops.length === i)
        })
        const transTick = tick.map(item => this.transformTick(item))
        
        return transTick
            
            
            

        
    }

    isDate(date) {
        const tDate = new Date(date) 
        const hours = tDate.getHours()
        const min = tDate.getMinutes()
        return `${('0'+hours).slice(-2)}:${('0'+ min).slice(-2)}`
    }

    isStops(stop) {
        if (stop === 0) {
            return 'без пересадок'
        }
        if (stop === 1) {
            return '1 пересадка'
        }
        if (stop > 1) {
            return `${stop} пересадки`
        }
    } 

    isRub(num) {
        return num.toLocaleString('ru')+' Р'
    }

    isTime(time) {
        const min = Math.floor(time % 60)
        const hours = Math.floor((time - min)/60)
        return `${('0'+hours).slice(-2)}ч ${('0'+ min).slice(-2)}м`
    }
    
    isStopsVal (stop) {
        const stope = stop.map(item => ' ' + item)
            return stope
    }    

    isArrival(start, dur) {
        const startD = new Date(start)
        return this.isDate(startD.setMinutes(startD.getMinutes() + dur))
    }

    transformTick(tick) {
        return {
            priceNum: tick.price,
            price: this.isRub(tick.price) ,
            carrier: tick.carrier,
            stStop: this.isStops(tick.segments[0].stops.length),
            stStops: this.isStopsVal(tick.segments[0].stops),
            stDate: this.isDate(tick.segments[0].date),
            stDestination: tick.segments[0].destination,
            stDuration: this.isTime(tick.segments[0].duration),
            stDurationNum: tick.segments[0].duration,
            stArrival: this.isArrival(tick.segments[0].date, tick.segments[0].duration),
            stOrigin: tick.segments[0].origin,
            finStop: this.isStops(tick.segments[1].stops.length),
            finStops: this.isStopsVal(tick.segments[1].stops),
            finDate: this.isDate(tick.segments[1].date),
            finDestination: tick.segments[1].destination,
            finDuration: this.isTime(tick.segments[1].duration),
            finDurationNum: tick.segments[1].duration,
            finArrival: this.isArrival(tick.segments[1].date, tick.segments[1].duration),
            finOrigin: tick.segments[1].origin,         
        }
    }
}