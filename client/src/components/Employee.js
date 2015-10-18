import React from 'react';
import toTitleCase from '../helpers';
import _ from 'underscore';

class Employee extends React.Component {

  getStyle() {
    return {
      flex: '1 1 200px',
      height: '200px',
      margin: '0.35em',
      padding: '0.85em',
      backgroundColor: '#fff'
    };
  }

  render() {
    var data = (
      <dl>
      {/* Map each key name/property to a dt and dd */}
      {_.map(
        /* Get an array of property names on the objects in our collection */
        _.keys(
          /* Omit the first, last names used in the title of the card */
          _.omit(this.props.employee, ['first', 'last'])
        ),
        (name) => [
          <dt>{toTitleCase(name)}</dt>,
          <dd>{this.props.employee[name].toLocaleString()}</dd>
        ]
      )}
      </dl>
    );

    return (
      <div style={this.getStyle()}>
        <h2 style={{ margin: 0 }}>{this.props.employee.first}</h2>
        <em>{this.props.employee.last}</em>
        {data}
      </div>
    );
  }

}

export default Employee;
