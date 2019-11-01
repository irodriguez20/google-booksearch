import React, { Component } from 'react';

import './App.css';
import SearchForm from './Search/SearchForm';
import FilterOptions from './Filter/FilterOptions';
import Results from './Search/results';
import ResultsList from './Search/ResultsList';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      filterOption: [],
      results: [],
      showResults: false
    };
  }

  updateSearchTerm(term) {
    this.setState({
      searchTerm: term
    })
  }

  updateFilterOption(option) {
    this.setState({
      filterOption: option
    })
  }

  handleSearchClick() {
    const apiKey = 'AIzaSyD_QSo_ZjXdRozw2o0SUWll6PC1yVeOrqE';
    const url = `https://www.googleapis.com/books/v1/volumes?q=${this.state.searchTerm}+intitle&key=${apiKey}`;


    fetch(url)
      .then(res => {
        console.log('url', url);
        if (!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.state({
          results: data,
          error: null
        });
      })
      .then(responseJson => {
        this.state({
          results: responseJson
      });
    })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  setShowResults(show) {
    this.setState({
      showResults: show
    });
  }

  addResults(result) {
    this.setState({
      results: result
    })
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          Google Book Search
        </header>
        <SearchForm
          searchTerm={this.state.searchTerm}
          filterOption={this.state.filterOption}
          handleUpdate={term => this.updateSearchTerm(term)}
          handleSearchClick={() => this.handleSearchClick()}
          handleFilterChange={option => this.updateFilterOption(option)} />
        <section className='results'>
          <Results
          results = {this.state.results}
          showResultsList = {show => this.setShowResults(show)} />
        </section>
      </div>
    );
  }

}

export default App;
