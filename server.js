const express = require('express');
//deleted express.router bc does not add essential functionality
//const app = express(); Do we need 'app' if we have express.router?
const pg = require('pg');
const path = require('path')
const bodyParser = require('body-parser');
//adding process after reading Heroku docs and seeing new requirements
const db = process.env.DATABASE_URL || 'postgres://localhost:5555/interest_app';

// Do we have imports from another file?

const client = new pg.Client(connectionString);
client.connect();

//Note for developers: GET/POST reqs are ordered by user story rather than all gets and posts together
//creates post request from server to db to generate and save new user info

app.get('/', (req, res) => {
  console.log(req.body)
  res.sendFile(path.join(__dirname, './../submissions_new/cheapeats.html'));
}

app.get('/login', (req, res) => {
  console.log('Connected to login');
  res.set({'content-type': 'text-html', 'charset': 'UTF-8'});
  res.status(200).sendFile('./ ');
});

app.post('/signup', (req, res, next) => {
  const userInfoChunk = [];
  const loginInfo = {
    console.log(req.body),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err, 'SOMETHING IS NOT RIGHT');
      return res.status(500).json({success: false, data: err})
    }
    client.query('INSERT INTO users(user_id, password, email) values(req.body.username, req.body.password, req.body.email)')
    query.on('row', (row) => {
      results.push(row)
    });
    query.on('end', () => {
      done();
    });
  });
});

//to add interests from '/interests' to interests table in pg 3/31am
app.post('/interests', (req, res, next) => {
  const userInfoChunk = [];
  const loginInfo = {
    console.log(req.body),
    interestone: req.body.interestone,
    interesttwo: req.body.interesttwo,
    interestthree: req.body.interestthree
  }
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err, 'SOMETHING IS NOT RIGHT');
      return res.status(500).json({success: false, data: err})
    }
    client.query('INSERT INTO interests(interestone, interesttwo, interestthree) values(req.body.req.body.interestone, req.body.req.body.interesttwo, req.body.req.body.interestthree)')
    query.on('row', (row) => {
      results.push(row)
    });
    query.on('end', () => {
      done();
    });
  });
});

app.post('/signup', (req, res, next) => {
  const userInfoChunk = [];
  const loginInfo = {
    console.log(req.body),
    username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      done();
      console.log(err, 'SOMETHING IS NOT RIGHT');
      return res.status(500).json({success: false, data: err})
    }
    client.query('INSERT INTO users(user_id, password, email) values(req.body.username, req.body.password, req.body.email)')
    query.on('row', (row) => {
      results.push(row)
    });
    query.on('end', () => {
      done();
    });
  });
});

app.listen(8080, console.log('listening and ready!'))
