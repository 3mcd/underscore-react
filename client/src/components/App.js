import React from 'react';
import BackboneMixin from '../mixins/BackboneMixin';
import Employee from './Employee';
import DataBar from './DataBar';
import _ from 'underscore';

var App = React.createClass({

    //mixins: [BackboneMixin],

    componentDidMount() {
      this._boundForceUpdate = this.forceUpdate.bind(this, null);
      this.props.collection.on('all', this._boundForceUpdate);
    },

    componentWillUnmount() {
      this.props.collection.off('all', this._boundForceUpdate);
    },

    getStyles() {
      return {
        display: 'flex',
        flexWrap: 'wrap'
      };
    },

    getInitialState() {
      return {
        search: '',
        sort: 'id',
        order: 'Asc'
      };
    },

    onSearch(e) {
      this.state.search = e.target.value;
      this._boundForceUpdate();
    },

    onSort(e) {
      this.state.sort = e.target.value;
      this._boundForceUpdate();
    },

    onOrder(e) {
      this.state.order = e.target.value;
      this._boundForceUpdate();
    },

    render() {
      var collection = this.props.collection.toJSON();

      if (this.state.search) {
        collection = _.filter(
          collection,
          (employee) => _.some(
            _.map(_.values(employee), (value) => value.toString()),
            (value) => value.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          )
        );
      }

      collection = _.sortBy(collection, (employee) => employee[this.state.sort]);

      if (this.state.order == 'desc') {
        collection = collection.reverse();
      }

      var employees = _.map(
        collection,
        (employee) => <Employee employee={employee} key={employee.id} />
      );

      return (
        <div style={this.getStyles()}>
          {employees}
          <DataBar
            collection={collection}
            onSearch={this.onSearch}
            onSort={this.onSort}
            onOrder={this.onOrder} />
        </div>
      );
    }

});

export default App;
