const { Client } = require('pg');
const client = new Client({database: ''});
client.connect();

module.export = client;