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
})

app.get('/3',rout, (req, res) => {  
  
  res.json({
      result: "Get 3rd"
  })
})

app.get('/4',rout, (req, res) => {  
  
  res.json({
      result: "Get 4th"
  })
})



app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})