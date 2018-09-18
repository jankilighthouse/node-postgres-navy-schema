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


const newData = process.argv.slice(2);

knex.select('*').from('famous_people')
.where('first_name','like', newData[0])
.orWhere('last_name','like',newData[0])
.asCallback((err, result) => {
    if (err) {
      throw err;
    }

    let number = 1;
    console.log('Found ' + result.length + ' person(s) by the name ' + "'" + newData + "'");
    result.forEach(function(element){ //map work same for this
    console.log('- '+ number + ':' + element.first_name + ' ' + element.last_name + ', born ' + "'" + element.birthdate.getUTCFullYear() + '-' + element.birthdate.getUTCMonth() + '-' + element.birthdate.getUTCDate() + "'" );
    number += 1;
  });

    knex.destroy(() => {
      console.log('connection terminated');


    });
});