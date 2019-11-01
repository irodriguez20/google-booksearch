import React, { Component } from 'react';
import './SearchForm.css';
import SearchBox from './SearchBox';
import FilterOptions from '../Filter/FilterOptions';

class SearchForm extends Component {
    render() {
        return(
            <div className='searchBar'>
                <form className='searchBar__controls'>
                    <SearchBox
                    searchTerm={this.props.searchTerm}
                    handleUpdate={this.props.handleUpdate}
                    handleSearchClick={this.props.handleSearchClick} 
                    />
                    <FilterOptions 
                    filterOption={this.props.filterOption}
                    handleFilterChange={this.props.handleFilterChange} />
                </form>
            </div>
        );
    }
    
}

export default SearchForm;