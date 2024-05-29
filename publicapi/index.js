const express = require('express');
const app = express();
require('dotenv').config();
const connectDB = require('./src/config/db');

const publicRoute = require('./src/routes/apiroute');
app.use(express.json());
connectDB();

app.use("/api/public", publicRoute);

app.listen(process.env.PORT, () =>
  console.log(`server started on port ${process.env.PORT}`)
)

