import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import EmployeeCollection from './api/EmployeeCollection';

var collection = new EmployeeCollection();

ReactDOM.render(<App collection={collection} />, document.getElementById('root'));

collection.fetch();
