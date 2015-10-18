import React from 'react';
import Search from './Search';
import BackboneMixin from '../mixins/BackboneMixin';
import _ from 'underscore';
import toTitleCase from '../helpers';

class DataBar extends React.Component {

    static get defaultProps() {
      return {
        onSearch: function () {},
        onSort: function() {},
        onOrder: function() {}
      };
    }

    get style() {
      return {
        position: 'fixed',
        lineHeight: '3em',
        height: '3em',
        backgroundColor: '#fff',
        display: 'flex',
        bottom: 0,
        left: 0,
        right: 0,
        padding: '4px 0.75em',
        boxShadow: '0 -3px 2px 0 rgba(0,0,0,0.15)'
      };
    }

    render() {
      var sortOptions;
      var total = this.props.collection.reduce((a, x) => a + x.get('salary'), 0);
      var average = total / (this.props.collection.length || 1);

      if (this.props.collection.length > 0) {
        sortOptions = _.map(
          this.props.collection.first().keys(),
          (key) => (
            <option value={key} key={key}>{toTitleCase(key)}</option>
          )
        );
      }

      return (
        <div style={this.style}>
          <div style={{flex: '1', display: 'flex', flexDirection: 'column', lineHeight: 'normal'}}>
            <span style={{flex: '1'}}>Total Annual Wages: <strong>${total.toLocaleString()}</strong></span>
            <span style={{flex: '1'}}>Average Annual Wage: <strong>${average.toLocaleString()}</strong></span>
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
          <div style={{flex: '1', textAlign: 'right'}}>
            <Search onSearch={this.props.onSearch} />
          </div>
        </div>
      );
    }

}

export default DataBar;
