//code to read and set any environment variables w/ dotenv package
require("dotenv").config();

//importing variables
var request = require("request");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var Spotify = require("node-spotify-api");

//define search var
var searchType = process.argv[2];
var song = process.argv.slice(3).join(" ");

//search defaults
if (!search) {
    search = "song";
}

if (!)

//bandsintown api search: `node liri.js concert-this <artist/band name here>`

//show artist, song name, preview link, album in terminal/bash window: `node liri.js spotify-this-song '<song name here>'`
//default to "The Sign" by Ace of Base if no song provided
//use node spotify api pckg
//spotify client ID:
c4f5cf0fc4774355b5f6cd001c483368
//spotify client secret:
12b88dab3fcb48cc974d044eab1a5104

//output movie title, release year, IMDB rating, Rotten Tomatoes rating, country of production, language, plot, actors
`node liri.js movie-this '<movie name here>'`
//default to "Mr Nobody"
//use axios package to retrieve data from OMDB API
- use trilogy api Key

//use fs node package to to get random.txt text and use it to call one of LIRI's commands
`node liri.js do-what-it-says`
//run spotify-this-song for "I Want it That Way"
//edit text in random.txt to test the feature for movie-this and concert-this