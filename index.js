const express = require("express");
const cors = require('cors');
const app = express();
app.use(cors());
const dotenv = require('dotenv')
const path = require("path");
dotenv.config({ path: path.resolve(__dirname, ".env") });

//api routes
require("./app/route/router")(app);


const PORT = process.env.SERVER_PORT | 3000;

app.listen(PORT, () => console.log(`Server up and running on port:${PORT}`));
