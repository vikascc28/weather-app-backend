const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const weatherRouter = require("./routes/weatherRoute");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use("/weather", weatherRouter);        

app.listen(porcess.env.PORT || 8080, () => {
    console.log("Server has been started at port 8080");    
})