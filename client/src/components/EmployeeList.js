import React from 'react';
import Employee from './Employee';
import _ from 'underscore';

class EmployeeList extends React.Component {

  render() {
    return (
      <div style={this.style}></div>
    );
  }

  get style() {
    return {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignContent: 'flex-start',
      alignItems: 'flex-start',
      flexWrap: 'wrap',
      overflowY: 'scroll',
      overflowX: 'hidden',
      padding: '0.35em 0'
    };
  }

}

export default EmployeeList;
