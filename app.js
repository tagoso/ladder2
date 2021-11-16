const express = require("express");
const app = express();

//switch local or heroku here
// const port = 3000;
// use the express-static middleware.
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

// start the server listening for requests.
app.listen(process.env.PORT || 3000, () => console.log("Server is running..."));
