import React from 'react';
import BackboneMixin from '../mixins/BackboneMixin';
import Employee from './Employee';
import DataBar from './DataBar';
import _ from 'underscore';

class App extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        search: '',
        sort: 'id',
        order: 'asc'
      };
    }

    get styles() {
      return {
        display: 'flex',
        flexWrap: 'wrap',
        paddingBottom: '3em'
      }
    }

    componentDidMount() {
      this._boundForceUpdate = this.forceUpdate.bind(this, null);
      this.props.collection.on('all', this._boundForceUpdate);
    }

    componentWillUnmount() {
      this.props.collection.off('all', this._boundForceUpdate);
    }

    onSearch(e) {
      this.setState({ search: e.target.value });
      this._boundForceUpdate();
    }

    onSort(e) {
      this.setState({ sort: e.target.value });
      this._boundForceUpdate();
    }

    onOrder(e) {
      this.setState({ order: e.target.value });
      this._boundForceUpdate();
    }

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
        <div style={this.styles}>
          {employees}
          <DataBar
            collection={collection}
            onSearch={this.onSearch.bind(this)}
            onSort={this.onSort.bind(this)}
            onOrder={this.onOrder.bind(this)} />
        </div>
      );
    }

}

export default App;
