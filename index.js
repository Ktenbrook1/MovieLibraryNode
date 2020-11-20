
const repoContext = require("./repository/repository-wrapper.js");
const express = require('express');

const app = express();
app.listen(3000, function () {
    console.log("Server started. Listening on port 3000.");
});

app.get("/api/products", (req, res) => {
    let movies = repoContext.movies.findAllMovies();
    res.send(movies);
});
   