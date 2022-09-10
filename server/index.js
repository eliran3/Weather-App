const express = require('express');
const cors = require('cors');
const usersRouter = require('./routes/api/users');

const app = express();

app.use(express.json());
app.use(cors());
app.use('/api/users', usersRouter);

//handle production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'));

    // handle SPA (= Single Page Application)
    app.get(/.*/, (req, res) => {
        res.sendFile(__dirname + '/public/index.html');
    });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running! (${port})`))
