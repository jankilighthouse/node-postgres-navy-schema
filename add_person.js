var pg = require('pg');

const knex = require('knex')({
  client: 'pg',
  connection: {
    host : 'localhost',
    user : 'development',
    password : 'development',
    database : 'test_db'
  }
});


let firstName = process.argv.slice(2)[0];
let lastName = process.argv.slice(2)[1];
let dob = process.argv.slice(2)[2];

knex.insert({
  first_name:firstName,
  last_name :lastName,
  birthdate:dob
}).into ('famous_people').asCallback((err,result) =>{
  if(err) {
    throw err;
  }
  knex.destroy(() => {
    console.log('Connection terminated');
  });
});

