const express = require('express');
// const router = express.Router()
const app = express();
//const app = express(); Do we need 'app' if we have express.router?
const pg = require('pg');
const path = require('path')
const bodyParser = require('body-Parser');
const connectionString = 'postgres://localhost:5432/interest_app';
// Do we have imports from another file?

const client = new pg.Client({connectionString: connectionString});
client.connect()

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Note for developers: GET/POST reqs are ordered by user story rather than all gets and posts together
//creates post request from server to db to generate and save new user info

//uncommenting to test with Postman
app.get('/', (req, res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname, './../submissions_new/cheapeats.html'));
})

app.get('/login', (req, res) => {
  console.log('Connected to login');
  res.set({'content-type': 'text-html', 'charset': 'UTF-8'});
  res.status(200).sendFile('./ ');
})

app.post('/5432/signup', (req, res, next) => {
  console.log('inside app.post ----->', req.body)
  //pg.connect(connectionString, (err, client, done) => {
    if(err) {
      console.log(err, 'SOMETHING IS NOT RIGHT');
      res.status(500).json({success: false, data: err})
      done();
    }
    // client.query(`CREATE TABLE IF NOT EXISTS users
    //   (
    // 	password varchar(255) NOT NULL,
    // 	email varchar(255) NOT NULL,
    // 	PRIMARY KEY ("_id")
    //   ) WITH (
    //   OIDS=FALSE
    // );`);
    console.log('signup successful')
      query.on('row', (row) => {
      results.push(row)
    });
    query.on('end', () => {
      //send success res
      done();
    });
});

// //to add interests from '/interests' to interests table in pg 3/31am
// app.post('/interests', (req, res, next) => {
//   const userInfoChunk = [];
//   const loginInfo = {
//     interestone: req.body.interestone,
//     interesttwo: req.body.interesttwo,
//     interestthree: req.body.interestthree
//   }
//   pg.connect(connectionString, (err, client, done) => {
//     if(err) {
//       done();
//       console.log(err, 'SOMETHING IS NOT RIGHT');
//       return res.status(500).json({success: false, data: err})
//     }
//     client.query('INSERT INTO interests(interestone, interesttwo, interestthree) values(req.body.req.body.interestone, req.body.req.body.interesttwo, req.body.req.body.interestthree)')
//     query.on('row', (row) => {
//       results.push(row)
//     });
//     query.on('end', () => {
//       done();
//     });
//   });
// });


const port = 5432;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
