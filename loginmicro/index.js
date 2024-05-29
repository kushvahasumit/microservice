const express = require('express');
const app = express();
require("dotenv").config();
const connectDB = require('./src/config/db');
const authRoute = require('./src/routes/authRoute');
const candidateRoute = require('./src/routes/candidateRoute');
const bodyParser = require('body-parser');


connectDB();

app.use(express.json());
app.use('/api',authRoute);
app.use("/api/candidate",candidateRoute);

app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
);