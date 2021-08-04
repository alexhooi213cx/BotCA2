const express = require('express')
const cors = require('cors')
const app = express() 
var rout = require('./routes/greet_route')
app.use(cors())
const port = process.env.PORT || 3000;

// CA3 get endpoint
app.get('/1',rout, (req, res) => {  
  
  res.json({
      result: "Get Success"
  })
  // get from database
})

app.get('/2',rout, (req, res) => {  
  
  res.json({
      result: "Get 2nd"
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