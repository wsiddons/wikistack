const express = require('express')
const app = express()

app.use(express.static('/stylesheets'))

app.get('/', (req, res) => {
    res.send('hello world')
})

const port = 8080
app.listen(port, () => console.log(`your on the port: ${port}`))