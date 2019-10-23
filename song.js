require("dotenv").config();
var fs = require("fs");
var keys = require("./keys.js")
var Spotify = require("node-spotify-api");
var spotify = new Spotify(keys.spotify);




//song constructor function
var SpotifySong = function () {

    var divider = "\n--------\n\n";

    //findSong function: takes song name & searches spotify AP
    this.findSong = function (song) {
        if (!song) {song = "I Want it That Way";}
    
        spotify.search({
            type: "track",
            query: song
        }).then(function(response) {
        
            //jsonData: variable for song data retrieved
             var jsonData = response.tracks.items[0];
        
             //songData: string w/ song data to be console.log'd
             var songData = [
                "Title: " + jsonData.name,
              "Artist: " + jsonData.artists[0].name,
              "Album: " + jsonData.album.name,
              "Preview: " + jsonData.preview_url,
            ].join("\n\n");

            //append songData and divider to log.txt, print songData to console
            fs.appendFile("log.txt", songData + divider, function (err) {
                if (err) throw err;
                console.log(songData);
            });
        });
    }; // end findSong function
}; //end Song constructor function


//export Song to liri
module.exports = SpotifySong;
