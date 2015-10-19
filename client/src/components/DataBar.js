import React from 'react';
import _ from 'underscore';
import toTitleCase from '../helpers';

class DataBar extends React.Component {

    render() {
      return (
        <div style={this.style}>
          <h4>Data</h4>
          <div style={this.dataStyle}>
            <div>Number of Employees</div>
            <strong></strong>
          </div>
          <div style={this.dataStyle}>
            <div>Total Annual Wages</div>
            <strong></strong>
          </div>
          <div style={this.dataStyle}>
            <div>Avg. Annual Salary</div>
            <strong></strong>
          </div>
          <h4>Sort</h4>
          <div style={{display: 'inline-block'}}>
            <select onChange={this.props.onSort}>
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
        padding: '0 1em',
        fontSize: '1.1em'
      };
    }

    get dataStyle() {
      return {
        marginTop: '1em'
      };
    }

}

export default DataBar;
