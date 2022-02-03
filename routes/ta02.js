//TA02 PLACEHOLDER
// Remember, you can make more of these placeholders yourself!
const express = require('express');
const router = express.Router();

const users = ['Jennifer', 'Nate', 'Jefferson'];
let errorMessage = "";

router.post('/addUser', (req, res, next) => {
  errorMessage = '';
  users.push(req.body.username);
  res.redirect('/ta02/');
});

router.post('/removeUser', (req, res, next) => {
  const userIndex = users.indexOf(req.body.removeUser);
  console.log(users);
  console.log(userIndex);
  if (userIndex !== -1) {
    errorMessage = '';
    users.splice(userIndex, 1);
  }
  else {
    errorMessage = "User not found";
  }
  res.redirect('/ta02/');
});

router.get('/', (req, res, next) => {
  res.render('pages/ta02', {
    title: 'Team Activity 02',
    users: users,
    errorMessage: errorMessage,
    path: '/ta02', // For pug, EJS
    activeTA03: true, // For HBS
    contentCSS: true, // For HBS
  });
});

module.exports = router;

