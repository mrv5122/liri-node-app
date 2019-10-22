var axios = require("axios");
var fs = require("fs");

//song constructor function
var Song = function () {

    var divider = "\n--------\n\n";

    //findSong function: takes song name & searches spotify API
    this.findSong = function (song) {
        spotify.search({
            type: "track",
            query: song
        },
            function (err) {
                if (err) {
                    console.log("Error occured: " + err);
                    return;
                }
            }
        ).then(function(response) {
        
            //jsonData: variable for song data retrieved
             var jsonData = response.data;
        
             //songData: string w/ song data to be console.log'd
             var songData = [
                "Title: " + jsonData.tracks.items[0].name,
              "Artist: " + jsonData.tracks.items[0].artists[0].name,
              "Album: " + jsonData.tracks.items[0].album.name,
              "Preview: " + jsonData.tracks.items[0],
            ].join("\n\n");
        })

       

        fs.appendFile("log.txt", songData + divider, function (err) {
            if (err) throw err;
            console.log(songData);
        });
    });
};
                    // end findSong function
 };
//end Song function
//export Song to liri
module.exports = Song;
