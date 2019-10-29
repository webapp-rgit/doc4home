const mongoose = require('mongoose');
const URI = 'mongodb://localhost/mern-task';

mongoose.connect(URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(db => console.log('DB is connected'))
    .catch(err => console.log(err));

module.exports = mongoose;