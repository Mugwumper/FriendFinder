console.log('API Routes Connected..');

var friends = require("../data/friends.js");

// var friends = [
// 	{
//     "name":"Alfonso",
//     "photo":"http://clipart-library.com/images/pio5Ra7oT.png",
//     "scores":[ 5, 1, 4, 4, 5, 1, 2, 5, 4, 1]
//   }
// ]

module.exports = function(app) {
    // get is basic, just return all friends
    app.get("/api/friends", function(req, res) {
        console.log("returning all friends as json objects");
        res.json(friends);
    });



}