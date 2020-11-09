import React, { Component } from 'react';
import './filter.scss';

export default class Filter extends Component {
    

    render() {
        const {onChange} = this.props
        return(
            <div className='filter'>
                <h5 className='filter__title'>Количество пересадок</h5>
                <form 
                    className='folter__form'
                    onChange={onChange}>
                <ul className='filter__ul'>
                    <li className='filter__li'>
                        <label className='filter__label'>
                            <input type='radio' value='8'name='landing' className='filter__input'/>
                            <span className='filter__span'></span>
                            Все
                        </label>
                    </li>
                    <li className='filter__li'>
                        <label className='filter__label'>
                            <input type='radio' value='0'name='landing' className='filter__input'/>
                            <span className='filter__span'></span>
                            Без пересадок
                        </label>
                    </li>
                    <li className='filter__li'>
                        <label className='filter__label'>
                            <input type='radio' value='1' name='landing' className='filter__input'/>
                            <span className='filter__span'></span>
                            1 пересадка
                        </label>
                    </li>
                    <li className='filter__li'>
                        <label className='filter__label'>
                            <input type='radio' value='2' name='landing' className='filter__input'/>
                            <span className='filter__span'></span>
                            2 пересадка
                        </label>
                    </li>
                    <li className='filter__li'>
                        <label className='filter__label'>
                            <input type='radio' value='3' name='landing' className='filter__input'/>
                            <span className='filter__span'></span>
                            3 пересадка
                        </label>
                    </li>
                </ul>
                </form>
                
            </div>
            
        )
    }

}

