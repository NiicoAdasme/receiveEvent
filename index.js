const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

// Initializations
const app = express()

// Middlewares
app.use(cors())
app.use(morgan('dev'))

// Lectura y parseo del body
app.use(express.json());

// Routes
app.use('/api', (req, res) => {
    console.log(req);
    res.send(req.body)
})


app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running on port 3000`);
})
