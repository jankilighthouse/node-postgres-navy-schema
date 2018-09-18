const { Client } = require('pg');
const client = new Client({database:'test_db',user:'development',password:'development',hostname:'localhost',port:'5432',ssl:'true'});
// client.connect();
    client.connect((err) => {
    if (err) {
      return console.error("Connection Error", err);
    }
  });

module.exports = client;


