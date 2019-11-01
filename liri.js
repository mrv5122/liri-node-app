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

// do-what-it-says

if (search === "do-what-it-says") {
    console.log("okay!");
spotifySong.findSong("I Want It That Way");
};