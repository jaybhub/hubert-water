import React, { Component } from 'react';

import '../styles/form.css';

import Input from '../components/Input';


class SearchBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      newSearch: {
        search: '',
      },
    };

  }

    render() {
    return (
      <div className="search-bar-header">
        <div className="search-bar">
          <Input
            type={'text'}
            title={'Search'}
            name={'search'}
            style={{ width: 90 + '%' }}
            // value={this.state.newEntry.date}
            // handleChange={this.handleSearch}
          />
        </div>
      </div>
    );
  }
}

export default SearchBar;
