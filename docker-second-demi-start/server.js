const express = require('express');
const bodyParser = require('body-parser');

const app = express();

let userGoal = 'Learn Docker!';

app.use(
    bodyParser.urlencoded({
        extended: false,
    })
);

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send(`
    <html lang="en">
      <head>
        <link rel="stylesheet" href="public/styles.css">
        <title>Test</title>
      </head>
      <body>
        <section>
          <h2>My Course Goal!</h2>
          <h3>${userGoal}</h3>
        </section>
        <form action="/store-goal" method="POST">
          <div class="form-control">
            <label>Course Goal</label>
            <input type="text" name="goal">
          </div>
          <button>Set Course Goal</button>
        </form>
      </body>
    </html>
  `);
});

app.post('/store-goal', (req, res) => {
    const enteredGoal = req.body.goal;
    console.log(enteredGoal);
    userGoal = enteredGoal;
    res.redirect('/');
});

app.listen(80);