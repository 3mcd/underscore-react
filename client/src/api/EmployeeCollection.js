import Backbone from 'backbone';
import EmployeeModel from './EmployeeModel';

export default Backbone.Collection.extend({
  url: '/api/employees'
});
