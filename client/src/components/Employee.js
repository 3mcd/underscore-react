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
    var employee = this.props.model.toJSON();
    var keys = _.keys(_.omit(employee, ['first', 'last']));

    return (
      <div style={this.style}>
        <h2 style={{ margin: 0 }}>{employee.first}</h2>
        <em>{employee.last}</em>
        <ul>
          <li>Id: {employee.id}</li>
          <li>Title: {employee.title}</li>
          <li>Salary: {employee.salary.toLocaleString()}</li>
        </ul>
      </div>
    );
  }

}

export default Employee;
