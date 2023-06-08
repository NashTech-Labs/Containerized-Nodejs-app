const express = require("express");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

/** GET  */
app.get("/", (req, res, next) =>
  res.status(200).json({
    message1: "Hello World!!",
    message2: "Dockerizing the Nodejs Application",
  })
);

app.listen(8080, () => {
  console.log("Application listening at port: 8080");
});
