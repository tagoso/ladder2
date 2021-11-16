const express = require("express");
const app = express();

// use the express-static middleware.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// start the server listening for requests.
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));

//js file not found on Heroku
app.use(express.static(path.join(__dirname, "app/assets")));
