const { CONNREFUSED } = require('dns');
const {connect} = require('./client');

console.log('connecting....');
connect();