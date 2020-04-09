require("dotenv").config();
// Grab Spotify keys securely
var keys = require("./keys");

// grab the axios package
var axios = require("axios");

// grab and read random.txt file
var fs = require("fs");

var moment = require('moment');

//grab the spotify package and initialize
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
// Slice and rejoin incase artist or band has spaces in the name
var input = process.argv.slice(3).join(" ");
console.log(command, input);

switch (command) {
  case "concert-this":
    concert();
    break;
  case "spotify-this-song":
    music();
    break;
  case "movie-this":
    movie();
    break;
  case "do-what-it-says":
    random();
    break;
  default:
    console.log("Please submit a valid request");
}

function concert() {
    var concertURL = `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;

    axios.get(concertURL).then(function(response){
        
    })
    
}
