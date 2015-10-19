import React from 'react';
import toTitleCase from '../helpers';
import _ from 'underscore';

class Employee extends React.Component {

  render() {
    var employee = this.props.model.toJSON();

    return (
      <div style={this.style}>
        <h2 style={{ margin: 0 }}>{employee.first}</h2>
        <span>{employee.last}</span>
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

  get style() {
    return {
      flex: '0 1 240px',
      margin: '0.35em',
      padding: '0.55em',
      backgroundColor: '#FFFCED',
      borderRadius: '3px'
    };
  }

}

export default Employee;
