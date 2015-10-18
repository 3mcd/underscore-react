import React from 'react';
import Employee from './Employee';
import DataBar from './DataBar';
import _ from 'underscore';
import EmployeeCollection from '../api/EmployeeCollection';

class App extends React.Component {

    constructor(props) {
      super(props);

      this.state = {
        search: '',
        sort: 'id',
        order: 'asc'
      };

      _.bindAll(this, 'onSearch', 'onSort', 'onOrder');
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

    render() {
      var models = this.props.collection.filter(
        (model) => _.some(
          model.values(),
          (value) => {
            return value.toString().toLowerCase().indexOf(this.state.search.toLowerCase()) > -1;
          }
        )
      );

      models = _.sortBy(models, (model) => model.get(this.state.sort));

      if (this.state.order == 'desc') {
        models = models.reverse();
      }

      var employees = models.map(
        (model) => <Employee model={model} key={model.get('id')} />
      );

      return (
        <div style={this.styles}>
          {employees}
          <DataBar
            collection={this.props.collection}
            onSearch={this.onSearch}
            onSort={this.onSort}
            onOrder={this.onOrder} />
        </div>
      );
    }

}

export default App;
