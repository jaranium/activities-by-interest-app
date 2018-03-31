const express = require('express');
// const router = express.Router()
const router = express();
//const app = express(); Do we need 'app' if we have express.router?
const pg = require('pg');
const path = require('path')
const bodyParser = require('body-Parser');
const connectionString = 'postgres://localhost:5555/interest_app';
// Do we have imports from another file?

const client = new pg.Client({
  host: connectionString,
  port: 5555
});

client.connect();

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());

router.post('/api/signup', (req, res, next) => {
  console.log("req.body in user post req", req.body)

  const userInfoChunk = [];
  const loginInfo = {
    // username: req.body.username,
    password: req.body.password,
    email: req.body.email
  }
  pg.connect(connectionString, (err, client, done) => {
    if(err) {
      console.log(err, 'SOMETHING IS NOT RIGHT');
      return res.status(500).json({success: false, data: err})  //return automatically ends this middleware
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

const port = 5555;
router.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = router;
