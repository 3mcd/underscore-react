import React from 'react';
import Search from './Search';
import BackboneMixin from '../mixins/BackboneMixin';
import _ from 'underscore';
import toTitleCase from '../helpers';

class DataBar extends React.Component {

    static get defaultProps() {
      return {
        onSort: function() {}, //no-op
        onOrder: function() {}
      };
    }

    getStyle() {
      return {
        position: 'fixed',
        lineHeight: '3em',
        backgroundColor: '#fff',
        display: 'flex',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '0 0.75em'
      };
    }

    render() {
      var total = _.reduce(this.props.collection, (a, x) => a + x.salary, 0);
      var average = total / (this.props.collection.length || 1);

      var sortOptions = _.map(
        _.keys(this.props.collection[0]),
        (key) => (
          <option value={key} key={key}>{toTitleCase(key)}</option>
        )
      );

      return (
        <div style={this.getStyle()}>
          <div style={{flex: '1', display: 'flex', flexDirection: 'column', lineHeight: 'normal'}}>
            <span style={{flex: '1'}}>Expected Annual Wages: <strong>${total.toLocaleString()}</strong></span>
            <span style={{flex: '1'}}>Average Annual Wages: <strong>${average.toLocaleString()}</strong></span>
          </div>
          <div style={{flex: '1', textAlign: 'center'}}>
            <span>Sort </span>
            <select onChange={this.props.onSort}>
              {sortOptions}
            </select>
            <select onChange={this.props.onOrder}>
              <option value="asc">Asc</option>
              <option value="desc">Desc</option>
            </select>
          </div>
          <div style={{flex: '1', textAlign: 'right'}}><Search onSearch={this.props.onSearch} /></div>
        </div>
      );
    }

}

export default DataBar;