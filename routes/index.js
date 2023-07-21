var express = require('express');
var router = express.Router();

const nameList = [
{ 'id': 'ID#', 'term' : 'Term', 'desc' : 'Description', 'ref': 'References'},
{ 'id': 'ID#', 'term' : 'Term', 'desc' : 'Description', 'ref': 'References'},
{ 'id': 'ID#', 'term' : 'Term', 'desc' : 'Description', 'ref': 'References'},
{ 'id': 'ID#', 'term' : 'Term', 'desc' : 'Description', 'ref': 'References'},
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT722 DevOps Glossary - S222509548', sub: ' my website showing a collection of DevOps terms and their descriptions', names: nameList });
});

module.exports = router;
