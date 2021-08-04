const express = require('express')
const cors = require('cors')
const app = express() 

app.use(cors())
const port = process.env.PORT || 3000;


//host to heroku
// CA3 get endpoint
app.get('/data', (req, res) => {
    require('./routes/greet_route')
  res.json({
      result: 'GET successful'
  })
  // get from database
})

// CA3 post endpoint
/* app.post('/data', (req, res) => {
    require('./routes/greet_route')
    res.json({
        result: 'POST successful'
    })
    // save to database
  }) */

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})