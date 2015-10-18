import React from 'react';
import toTitleCase from '../helpers';
import _ from 'underscore';

class Employee extends React.Component {

  get style() {
    return {
      flex: '1 1 200px',
      height: '200px',
      margin: '0.35em',
      padding: '0.85em',
      backgroundColor: '#fff'
    };
  }

  render() {
    var keys = _.keys(_.omit(this.props.employee, ['first', 'last']));
    var dict = (
      <dl>
      {/* Map each key name/property to a dt and dd */}
      {
        _.map(keys, (name) => [
          <dt>{toTitleCase(name)}</dt>,
          <dd>{this.props.employee[name].toLocaleString()}</dd>
        ])
      }
      </dl>
    );

    return (
      <div style={this.style}>
        <h2 style={{ margin: 0 }}>{this.props.employee.first}</h2>
        <em>{this.props.employee.last}</em>
        {dict}
      </div>
    );
  }

}

export default Employee;
