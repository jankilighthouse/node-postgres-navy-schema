
const db = require('./db');
const newData = process.argv.slice(2);
const query = "SELECT * FROM famous_people WHERE first_name LIKE $1 OR last_name LIKE $1";

    db.query(query,newData, (err, result) => {
      if (err) {
        return console.error("error running query", err);
      }
      let number = 1;
      console.log('Found ' + result.rows.length + ' person(s) by the name ' + "'" + newData + "'");

      result.rows.forEach(function(element){ //map work same for this
      console.log('- '+ number + ':' + element.first_name + ' ' + element.last_name + ', born ' + "'" + element.birthdate.getUTCFullYear() + '-' + element.birthdate.getUTCMonth() + '-' + element.birthdate.getUTCDate() + "'" );
      number += 1;
      });
      db.end();
  });





