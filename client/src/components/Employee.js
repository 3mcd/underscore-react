import React from 'react';
import toTitleCase from '../helpers';
import _ from 'underscore';

class Employee extends React.Component {

  get style() {
    return {
      flex: '0 1 220px',
      height: '220px',
      margin: '0.35em',
      padding: '0.55em',
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
        <dl>
          <dt>Id</dt>
          <dd>{employee.id}</dd>
          <dt>Title</dt>
          <dd>{employee.title}</dd>
          <dt>Salary</dt>
          <dd>{employee.salary.toLocaleString()}</dd>
        </dl>
      </div>
    );
  }

}

export default Employee;
