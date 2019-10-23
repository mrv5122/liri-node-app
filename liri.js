require("dotenv").config();
var keys = require("./keys");
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify)
var axios = require("axios");
var fs = require("fs");


//taking user search parameters and storing in variables
var search = process.argv[2];
var keyword = process.argv.slice(3).join(" ");


//-------------------------spotify-----------------------//
//access song.js
var SpotifySong = require("./song")
//create new spotifysong object
var spotifySong = new SpotifySong();

if (search === "spotify-this-song") {
    console.log("Searching Spotify...");
    spotifySong.findSong(keyword);

}

//-----------------BandsInTown-----------------------//
// var BandConcert = function() {

//     var divider = "\n------------------\n\n";

//     //findConcert function: takes band name & searches BandsInTown API
//     this.findConcert = function(artist) {
//         var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
//         axios.get(URL).then(function(response) {

//             //place response.data into a variable: jsonData
//             var jsonData = response.data;

//             //showData = string containing the show data that is printed to console
//             var showData = [
//                 "show: " + jsonData.name,
//                 "genre(s): " + jsonData.genres.join(", "),
//                 "rating: " + jsonData.rating.average,
//                 "network: " + jsonData.network.name,
//                 "summary: " + jsonData.summary ].join("\n\n");
            
//             //append showData and divider to log.txt => print showData to console
//             fs.appendFile("log.txt", showData + divider, function(err) {
//                 if(err) throw err;
//                 console.log(showData);
//             });
//         });
//     };
//     //end findShow function, begin findActor function
// }



// if (search === "movie-this") {}

// if (search === "do-what-it-says") {}




//bandsintown api search: `node liri.js concert-this <artist/band name here>`

//show artist, song name, preview link, album in terminal/bash window: `node liri.js spotify-this-song '<song name here>'`
//default to "The Sign" by Ace of Base if no song provided
// //use node spotify api pckg
// //spotify client ID:
// c4f5cf0fc4774355b5f6cd001c483368
// //spotify client secret:
// 12b88dab3fcb48cc974d044eab1a5104

// //output movie title, release year, IMDB rating, Rotten Tomatoes rating, country of production, language, plot, actors
// `node liri.js movie-this '<movie name here>'`
// //default to "Mr Nobody"
// //use axios package to retrieve data from OMDB API
// - use trilogy api Key

// //use fs node package to to get random.txt text and use it to call one of LIRI's commands
// `node liri.js do-what-it-says`
// //run spotify-this-song for "I Want it That Way"
// //edit text in random.txt to test the feature for movie-this and concert-this