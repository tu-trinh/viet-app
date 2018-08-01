const express = require('express');
const app = express();
const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        // YOUR-AUTH0-DOMAIN name e.g prosper.auth0.com
        jwksUri: "https://hoctiengviet.com/.well-known/jwks.json"
    }),
    // This is the identifier we set when we created the API
    audience: 'https://hoctiengviet.com',
    issuer: '{YOUR-AUTH0-DOMAIN}',
    algorithms: ['RS256']
});

app.get('/api/:book/lessons', (req, res) => {
    let Lessons = [
        {
          id: 'l01',
          lesson: 'Bài 1'
        },
        {
          id: 'l02',
          lesson: 'Bài 2'
        },
        {
          id: 'l03',
          lesson: 'Bài 3'                                        
        },
        {
          id: 'l04',
          lesson: 'Bài 4'
        }
    ];
    res.json(Lessons);
  })
  
  app.get('/api/books', (req,res) => {
    let Books = [
        {
            id: 'b01',
            book: 'Sách Cấp 1'
        },
        {
            id: 'b02',
            book: 'Sách Cấp 2'
        },
    ];
    res.json(Books);
  })
  
  app.listen(3007);
  console.log('Listening on localhost: 3007');