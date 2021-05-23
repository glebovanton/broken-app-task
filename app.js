const bodyParser = require('body-parser')
const express = require('express');

const db = require('./db');
const game = require('./controllers/gamecontroller');
const user = require('./controllers/usercontroller');

const app = express();
const port = 4000

db.sync().then(()=>{
    app.listen(port,() => {
        console.log(`App is listening on ${port}`);
    })
}).catch(err=>console.log(err));
app.use(bodyParser.json());
app.use('/api/auth', user);
app.use(require('./middleware/validate-session'))

app.use('/api/game', game);
