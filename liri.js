require("dotenv").config();
// Grab Spotify keys securely
var keys = require("./keys");

// grab the axios package
var axios = require("axios");

// grab and read random.txt file
var fs = require("fs");

var moment = require("moment");

//grab the spotify package and initialize
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
// Slice and rejoin in case artist or band has spaces in the name
var input = process.argv.slice(3).join(" ");
console.log(command, input);

// use of switch statement to switch between functions
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
// Function to call information from REST API for Bands In Town
function concert() {
  var concertURL = `https://rest.bandsintown.com/artists/${input}/events?app_id=codingbootcamp`;

  axios.get(concertURL).then(function (response) {
    for (var i = 0; i < response.data.length; i++) {
      // Print information to terminal
      console.log(
        `\nVenue Name: ${response.data[i].venue.name}\nLocated in: ${
          response.data[i].venue.city
        }, ${response.data[i].venue.country} \nDate and Time: ${moment(
          response.data[i].datetime
        ).format("MM/DD/YYYY LT")}\n\n########################################`
      );
    }
  });
}

function music() {
  if (command === "spotify-this-song" && process.argv[3] === undefined) {
    input = "Vogue";
  }

  spotify.search({ type: "track", query: input, limit: 1 }, function (
    err,
    data
  ) {
    if (err) {
      return console.log(`An error occured: ${err}`);
    } else {
      console.log(
        `\n########################################\n\nArtist(s): ${data.tracks.items[0].artists[0].name}\nSong Name: ${data.tracks.items[0].name}\nPreview Link: ${data.tracks.items[0].preview_url}\nAlbum: ${data.tracks.items[0].album.name}\n\n########################################`
      );
    }
  });
}
