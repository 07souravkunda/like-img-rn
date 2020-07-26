const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });
const app = require('./app');

mongoose
    .connect(process.env.CONNECTION_STRING, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
    })
    .then((p, er) => {
        if (er) console.log(er);
        else console.log('db connected');
    });

const host = '192.168.43.206';
const port = process.env.PORT || 5000;

app.listen(port, host, () => {
    console.log(`app listening at ${port}`);
});
