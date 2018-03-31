//initialize connection to pg database here
const pg = require('pg');
const uri = 'postgres://student:ilovetesting@localhost/postgresql-raw';

pg.connect(uri, (err, db) => {
  if (err) throw new Error(err);
  //create table with schema data if one does not exist with table name events
  //fields on left represent columns, right are data types
  db.query(`create table if not exists events
  (
    serialID  serial PRIMARY KEY,
    id	VARCHAR,
    summary  VARCHAR,
    htmlLink  VARCHAR,
    sequence  int,
    created  date,
    updated 	date,
    start	 date,
    "end"	 date
  );`)
    db.end();
});

module.exports = function(data) {
  //connect to pg db here to create info to add to tables
  pg.connect(uri, (err, db) => {
    if (err) throw new Error(err);
    //parsing through JSON obj - first turn into array with built-in methods
    let days = Object.keys(data);
    //iterate over array of objects for data, create key/pair values for each before returning to object
      for(let i = 0; i < days.length; i++) {
        for(var props in data[days[i]]) {
          var newObj = {};
          //initialize new obj to fill and push to array (later to become JSON obj of all messages in slack app)
        newObj.id= data[days[i]][props].id;
        newObj.summary= data[days[i]][props].summary;
        newObj.htmlLink= data[days[i]][props].htmlLink;
        newObj.sequence= data[days[i]][props].sequence;
        newObj.created= new Date(data[days[i]][props].created);
        newObj.updated= new Date(data[days[i]][props].updated);
        newObj.start= new Date(data[days[i]][props].start['dateTime']);
        newObj.end= new Date(data[days[i]][props].end['dateTime'])
        //can use similar syntax to add to user tables for interest app
        db.query(`insert into events (id, summary, htmlLink, sequence, created, updated, start, "end") values json_each(newObj)`)
        }
      };
      //end conection to database
    db.end();
  })
};
