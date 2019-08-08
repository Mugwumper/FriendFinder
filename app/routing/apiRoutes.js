console.log('API Routes Connected..');

var friends = require("../data/friends.js");

module.exports = function(app) {
    // get is basic, just return all friends
    app.get("/api/friends", function(req, res) {
        console.log("returning all friends as json objects");
        res.json(friends);
    });

    // The app.post request handles when a user submits a form and thus submits data to the surver
    app.post('/api/friends', function (req, res) {
        // loop through all of the possible options
        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: 1000
        };

        // To take the result of the user's survey POST and parse it
        var userData = req.body;
        var userScores = userData.scores;
        //console.log(userData);
        console.log("\nName: " + userData.name + "\nPhoto: " +
                    userData.photo + "\nScores: " + userScores);

        // The variable used to calculate the difference b/n the user's socres and the scores of each user
        var totalDifference = 0;

        //loop through the friends data array of objects to get each friends scores
        for (var i = 0; i < friends.length; i++) {
            var testFriend = friends[i];  
            logStr = "examining results against friend #"+ (i+1) + " '" + testFriend.name + "'"; 
            totalDifference = 0;
            //loop through friends and calculate the absolute difference between the two
            for (var j = 0; j < 10; j++) {
                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(userScores[j]) - parseInt(testFriend.scores[j]));
                // If the sum of differences is less then the differences of the current "best match"
                if (totalDifference <= bestMatch.friendDifference) {
                    // Reset the bestMatch to be the new friend. 
                    bestMatch.name = testFriend.name;
                    bestMatch.photo = testFriend.photo;
                    bestMatch.friendDifference = totalDifference;
                    logStr += " ** current best match **"
                }
            }
            console.log(logStr);
        }

        // The push method use to save user's data to the database
        friends.push(userData);

        //The res.json method will return a JSON data with the user's match which was looped through frieds data array. 
        res.json(bestMatch);
    });

}