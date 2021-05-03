// importing the module
const express = require("express"); // it returns the function
const app = express(); // It return object of type express

// Http Methods in express
// app.get()
// app.post()
// app.put()
// app.delete()

// first argument is the path and second argument is the callback function which will be called
// while the route with path '/' is matched
app.get("/", (req, res) => {
  // req => gives information about the request came
  // To know full detail about express => https://expressjs.com/en/4x/api.html#req
  res.send("Hello world");
});

app.get("/api/courses", (req, res) => {
  // we can also send the response with status code
  res.status(404).send("Error occured");
  //   res.send([1, 2, 3, 4]);
});

// Route Parameter => id can be any variable
app.get("/api/courses/:id/:userId", (req, res) => {
  // req.query => will return the query parameters as object
  // req.params => will gives the parameters as object
  res.send(req.query);
});

// use process object to set the port dynamically
const port = process.env.PORT || 3000;

// To set the port in linux => export PORT = 4000
// To set the port in windows => set PORT = 4000;
// creates a listener on the specified port
app.listen(port, () => {
  console.log(`Listening on port ${port}..`);
});
