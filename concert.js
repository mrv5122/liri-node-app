require("dotenv").config();
var axios = require("axios");
var fs = require("fs");



var BandConcert = function() {

        var divider = "\n------------------\n\n";
    
        //findConcert function: takes band name & searches BandsInTown API
        this.findConcert = function(artist) {
            var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
            axios.get(URL).then(function(response) {
            console.log(response);
             for (var i = 0; i < response.data.length; i++) {

                 var jsonData = response.data[i].headers;
                 
                //showData = string containing the show data that is printed to console
                var concertData = [
                    "Venue Name: " + jsonData.name,
                    "Venue Location: " + jsonData.city + ", " + jsonData.region,
                    "Date of Venue: " + jsonData.date
                ].join("\n\n");
                
                //append showData and divider to log.txt => print showData to console
                fs.appendFile("log.txt", concertData + divider, function(err) {
                    if(err) throw err;
                    console.log(concertData);
                });
            };
        });//end response function
    }; //end findConcert function
}; //end constructor function

module.exports = BandConcert;