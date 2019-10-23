var axios = require("axios");
var fs = require("fs");


var BandConcert = function() {

        var divider = "\n------------------\n\n";
    
        //findConcert function: takes band name & searches BandsInTown API
        this.findConcert = function(artist) {
            var URL = "http://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
            axios.get(URL).then(function(response) {
               
                //place response.data into a variable: jsonData
                var jsonData = response.data;
    
                //showData = string containing the show data that is printed to console
                var concertData = [
                    jsonData
                    // "Venue Name: " + jsonData,
                    // "Venue Location: " + 
                    // "Date of Concert: " + 
                ];//.join("\n\n");
                
                //append showData and divider to log.txt => print showData to console
                fs.appendFile("log.txt", concertData + divider, function(err) {
                    if(err) throw err;
                    console.log(concertData);
                });
            });
        };
        //end findShow function, begin findActor function
    };

module.exports = BandConcert;