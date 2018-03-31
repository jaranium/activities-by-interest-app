const express = require('express');
const router = express.Router()
//const app = express(); Do we need 'app' if we have express.router?
const pg = require('pg');
const path = require('path')
const bodyParser = require('body-parser');
//adding process after reading Heroku docs and seeing new requirements
const db = process.env.DATABASE_URL || 'postgres://localhost:5555/interest_app';

// Do we have imports from another file?

const client = new pg.Client(connectionString);
client.connect();

//creates post request from server to db to generate and save new user info
router.post('/', (req, res, next) => {
  const userInfoChunk = [];
  const loginInfo = {
    console.log(boq.body)
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

// app.get('/', (req, res) => {
//   console.log(req.body)
//   res.sendFile(path.join(__dirname, './../profile'))
// });
