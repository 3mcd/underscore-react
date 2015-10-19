import React from 'react';
import EmployeeList from './EmployeeList';
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

      _.bindAll(this, 'onSearch', 'onSort', 'onOrder');
    }

    componentDidMount() {
      this._forceUpdate = this.forceUpdate.bind(this, null);
      this.props.collection.on('add change remove', this._forceUpdate);
    }

    componentWillUnmount() {
      this.props.collection.off('add change remove', this._forceUpdate);
    }

    onSearch(e) {
      this.setState({ search: e.target.value.trim().toLowerCase() });
    }

    onSort(e) {
      this.setState({ sort: e.target.value });
    }

    onOrder(e) {
      this.setState({ order: e.target.value });
    }

    render() {
      var models = this.props.collection.models;

      return (
        <div style={this.styles}>
          <DataBar
            models={models}
            onSearch={this.onSearch}
            onSort={this.onSort}
            onOrder={this.onOrder} />
          <EmployeeList models={models} />
        </div>
      );
    }

    get styles() {
      return {
        position: 'absolute',
        left: 0,
        top: 0,
        right: 0,
        bottom: 0,
        display: 'flex',
        flexDirection: 'row'
      };
    }
}

export default App;
