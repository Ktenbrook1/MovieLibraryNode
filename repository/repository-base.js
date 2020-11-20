
const jsonDbContext = require("./json-context.js");

exports.findAll = () => {
    jsonDbContext.movies.findAll();
}