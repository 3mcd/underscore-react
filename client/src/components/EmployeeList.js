import React from 'react';
import Employee from './Employee';

class EmployeeList extends React.Component {

  render() {
    var employees = this.props.models.map(
      (model) => <Employee model={model} key={model.get('id')} />
    );

    return (
      <div style={this.style}>{employees}</div>
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
