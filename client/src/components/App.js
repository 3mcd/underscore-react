import React from 'react';
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
      };
    }

    componentDidMount() {
      this._boundForceUpdate = this.forceUpdate.bind(this, null);
      this.props.collection.on('add change remove', this._boundForceUpdate);
    }

    componentWillUnmount() {
      this.props.collection.off('add change remove', this._boundForceUpdate);
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

    componentWillUpdate(props, state) {
      var collection = props.collection;

      if (state.search) {
        collection.filter(
          (employee) => _.some(
            _.map(employee.values(), (value) => value.toString()),
            (value) => value.toLowerCase().indexOf(state.search.toLowerCase()) > -1
          )
        );
      }

      collection.set(collection.sortBy((model) => model.get(state.sort)));

      if (state.order == 'desc') {
        collection.set(collection.models.reverse());
      }
    }

    render() {
      var employees = this.props.collection.map(
        (employee) => <Employee employee={employee.toJSON()} model={employee} key={employee.id} />
      );

      return (
        <div style={this.styles}>
          {employees}
          <DataBar
            collection={this.props.collection}
            onSearch={this.onSearch.bind(this)}
            onSort={this.onSort.bind(this)}
            onOrder={this.onOrder.bind(this)} />
        </div>
      );
    }

}

export default App;
