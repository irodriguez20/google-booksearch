import React, { Component } from 'react';
import './FilterOptions.css';
import List from './FitlerList';


class FilterOptions extends Component {
    changeSelection(value) {
        const option = this.props.filterOption.find(option => option === value)
        this.props.handleFilterChange(option);
    }

    render() {
        const options = this
            .props
            .filterOption
            .map(
                (filterOption, i) => <option value={filterOption[i]} key={i}>{filterOption}</option>
            );
        ;
        


        return (
            <div className='FilterOptions'>
                <div className='FilterOptions__option'>
                    <label htmlFor='filter_all'>
                        Print Type:
                        <select
                            id='filter_all'
                            name='filter'
                            onChange={e => this.props.changeSelection(e.target.value)}>
                                <option value='none'></option>
                            {options}
                        </select>
                    </label>
                </div>
                <div className='FilterOptions__option'>
                    <label htmlFor='filter_type'>
                        Book Type:
                        <select
                            id='filter_type'
                            name='filter_type'
                            onChange={e => this.props.changeSelection(e.target.value)}>
                                <option value='none'></option>
                            {options}
                        </select>
                    </label>
                </div>
            </div>
        )
    }
}

export default FilterOptions;