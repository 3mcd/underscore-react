```javascript
/**
 * App#render
 */

// Get an array of models where each model contains the search string in one of it's properties
var models = this.props.collection.filter(
  (model) => _.some(model.values(), (value) => {
      return value.toString().toLowerCase().indexOf(this.state.search) > -1;
    }
  )
);

// Sort the models by the sort criteria
models = _.sortBy(models, (model) => model.get(this.state.sort));

// Reverse the array if the search order is descending
if (this.state.order == 'desc') {
  models = models.reverse();
}

/**
 * DataBar#render
 */

var sortOptions, keys;
var models = this.props.models;
var total = models.reduce((a, x) => a + x.get('salary'), 0);
var average = total / (models.length || 1);

if (models.length > 0) {
  keys = model[0].keys();
  sortOptions = _.map(keys, (key) => (
      <option value={key} key={key}>{toTitleCase(key)}</option>
    )
  );
}

/**
 * EmployeeList#render
 */

var employees = this.props.models.map(
  (model) => <Employee model={model} key={model.get('id')} />
);
```
