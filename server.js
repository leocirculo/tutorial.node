const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
app.set('view engine', 'hbs');

// Middleware
app.use((req, res, next) => {
  const now = new Date().toString();
  const log = `${now}: ${req.method}, ${req.url}`;

  console.log(log);
  fs.appendFile('server.log', `${log}\n`, (err) => {
    if (err) console.log('Unable to append to server.log');
  });

  next();
});
/* app.use((req, res, next) => {
  res.render('updating.hbs');
}); */
app.use(express.static(`${__dirname}/public`));

// Helpers
hbs.registerHelper('getCurrentYear', () => {
  return new Date().getFullYear();
});

app.get('/', (req, res) => {
  res.render('home.hbs', {
    pageTitle: 'Home',
    welcomeMsg: 'Welcome to my page',
  });
});

app.get('/about', (req, res) => {
  res.render('about.hbs', {
    pageTitle: 'About Page',
  });
});

app.get('/profile', (req, res) => {
  res.render('profile.hbs', {
    pageTitle: 'Profile',
  });
});

app.get('/bad', (req, res) => {
  res.send({
    errorMessage: '404 not found',
  });
});

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
