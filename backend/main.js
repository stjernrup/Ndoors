const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const routes = require('./routes')

app.use('/', routes);

app.listen(port, () => console.log(`Example app listening on port ${port}!`))