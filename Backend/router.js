const cors = require('cors');

const greet_route = require('./routes/greet_route');

const { app } = require('./app');

// CORS
app.use(cors());

app.use('/data', greet_route);

module.exports = app;