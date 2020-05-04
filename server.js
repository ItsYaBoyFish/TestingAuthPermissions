const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const models = require('./DB/models/ModelExport');

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public/LoginPage')));
app.use(express.static(path.join(__dirname, 'public/AdminPage')));
app.use(express.static(path.join(__dirname, 'public/WelcomePage')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/LoginPage/Login.html'));
});

app.get('/Admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/AdminPage/Admin.html'));
});

app.get('/Welcome', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/WelcomePage/Welcome.html'));
});

app.post('/login', (req, res) => {
  console.log(req.body);
  const username = req.body.Username;
  const password = req.body.Password;

  models.Users.findAll({
    where: {
      username: username
    }
  }).then(results => {
    const dataResults = results[0].dataValues
    if (dataResults.password === password) {
      res.send({
        Success: true,
        Data: dataResults
      });
      // end of If
    } else {
      res.send({Success: false})
    } // end of Else
  })
})

app.listen(port, () => {
	console.log(`Server Started On Port: ${port}`);
});


// models.Users.create({
//   username: 'Aryona',
//   password: 'Ona',
//   isAdmin: false,
//   UUID: '0727',
//   date_created: '05/03/2020'
// })