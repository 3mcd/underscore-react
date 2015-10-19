var path = require('path');
var fs = require('fs');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var compiler = webpack(config);

function getEmployees() {
  return JSON.parse(fs.readFileSync(path.join(__dirname + '/employees.json')));
}

// Create a new Express application
var app = express();

// Create a new instance of the Express router
var apiRouter = express.Router();

// Configure our API endpoint(s)
apiRouter
  .get('/api/employees', function (req, res) {
    res.json(getEmployees());
  })
  .get('/api/employees/:id', function (req, res) {
    var employees = getEmployees();
    var result;

    for (var i = 0; i < employees.length; i++)
      if (employees[i].id == req.params.id) {
        result = employees[i];
        break;
      }

    res.json(result);
  });

// Use the router in our application
app.use(apiRouter);

// Serve our static files (index.html, index.css)
app.use('/', express.static(path.join(__dirname, 'public')));

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

// Start the server
app.listen(3000, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:3000');
});
