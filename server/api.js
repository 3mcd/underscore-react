var express = require('express'),
    fs = require('fs'),
    path = require('path');

var router = express.Router();

/**
 * API
 */

// GET: /api/employees
router.get('/api/employees', function (req, res) {
    var employees = JSON.parse(fs.readFileSync(path.join(__dirname + '/employees.json')));
    res.json(employees);
  });

module.exports = router;
