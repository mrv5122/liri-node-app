require("dotenv").config();
var axios = require("axios");
var fs = require("fs");


//taking user search parameters and storing in variables
var search = process.argv[2];
var keyword = process.argv.slice(3).join(" ");


//-------------------------spotify-----------------------//
//access song.js
var SpotifySong = require("./song");
//create new spotifysong object
var spotifySong = new SpotifySong();

if (search === "spotify-this-song") {
    spotifySong.findSong(keyword);
} else if (!keyword) {
    spotifySong.findSong("I Want it That Way")
}

//-----------------BandsInTown-----------------------//
var BandConcert = require("./concert");
var bandConcert = new BandConcert();

if (search === "concert-this") {
    console.log("BandsInTown Result: ");
    bandConcert.findConcert(keyword);
  
} 

//----------------OMDB------------------------//
if (search === "movie-this") {
console.log("OMDB Results: ");
var movie = keyword;
var URL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";
axios.get(URL).then(function(response) {
        var movieResults = [
            "\n----------------------------------\n", 
                "Movie Title: " + response.data.Title,
                "Year of Release: " + response.data.Year,
                "IMDB Rating: " + response.data.imdbRating,
                "Rotten Tomatoes Rating: " + response.data.Ratings[1].Value,
                "Country Produced: " + response.data.Country,
                "Language: " + response.data.Language,
                "Plot: " + response.data.Plot,
                "Actors/Actresses: " + response.data.Actors
        ].join("\n\n");
        console.log(movieResults);
}); //end axios function
};//end movie-this



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