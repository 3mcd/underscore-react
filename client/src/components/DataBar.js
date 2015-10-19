import React from 'react';
import _ from 'underscore';
import toTitleCase from '../helpers';

class DataBar extends React.Component {

    render() {
      var sortOptions;
      var models = this.props.models;
      var total = models.reduce((a, x) => a + x.get('salary'), 0);
      var average = total / (models.length || 1);

      if (models.length > 0) {
        sortOptions = _.map(
          models[0].keys(),
          (key) => (
            <option value={key} key={key}>{toTitleCase(key)}</option>
          )
        );
      }

      return (
        <div style={this.style}>
          <h4>Data</h4>
          <div>Total Annual Wages: <strong>${total.toLocaleString()}</strong></div>
          <div>Average Annual Wage: <strong>${average.toLocaleString()}</strong></div>
          <h4>Sort</h4>
          <div style={{display: 'inline-block'}}>
            <select onChange={this.props.onSort}>
              {sortOptions}
            </select>
          </div>
          <div style={{display: 'inline-block'}}>
            <select onChange={this.props.onOrder}>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
          <h4>Search</h4>
          <input type="text" onKeyUp={this.props.onSearch} />
        </div>
      );
    }

    get style() {
      return {
        flex: '0 1 250px',
        flexDirection: 'column',
        backgroundColor: '#fff',
        boxShadow: '2px 2px 2px 0 rgba(0,0,0,0.2)',
        padding: '0 1em'
      };
    }
    
}

export default DataBar;
