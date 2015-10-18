import React from 'react';
import _ from 'underscore';

class Search extends React.Component {

  static get defaultProps() {
    return {
      onSearch: function () {} // no-op
    };
  }

  render() {
    return (
      <label>Search <input type="text" onKeyUp={this.props.onSearch} /></label>
    );
  }

}

export default Search;
