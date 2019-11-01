import React from 'react';
import './SearchBox.css';


class SearchBox extends React.Component {
    render() {
        return (
            <div className="SearchBox">
                <label htmlFor='bookInput'>Search:</label>
                <input 
                placeholder='title'
                value={this.props.searchTerm}
                onChange={e => this.props.handleUpdate(e.target.value)} />
                <button type='submit' onClick={(e) => {
                    e.preventDefault()
                    this.props.handleSearchClick()}}>Search</button>
            </div>
        )
    }
}

export default SearchBox;