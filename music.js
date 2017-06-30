
function Library (name, creator) {
  this.name = name;
  this.creator = creator;
  this.playlists = [];
}

function Playlist (name) {
  // this = { __proto__: Playlist.prototype }
  this.name = name;
  this.tracks = [];
  this.totalDuration = 0;
  this.overallRating = 0;

  this.getTotalDuration = function(){
    return this.tracks.reduce((sum, value)=>{
      return sum + value.length;
    },0);
  }
  this.getOverallRating = function(){
    return this.tracks.reduce((sum, value)=>{
      return sum + value.rating;
    },0);
  }
}

function Track (title, rating, length) {
  this.title = title;
  this.rating = rating;
  this.length = length;
}

Library.prototype.addPlaylist = function (playlist) {
  this.playlists.push(playlist);
}

Playlist.prototype.addTrack = function(track) {
  this.tracks.push(track);
  this.totalDuration += track.length;
  this.overallRating += track.rating;
}


var aLib = new Library("Otto's", "Otto");
console.log("aLib.__proto__", aLib.__proto__);
console.log("Library.prototype", Library.prototype);
console.log("Object.getPrototypeOf(aLib)", Object.getPrototypeOf(aLib));

console.log("newly created Otto's library:\n", aLib);


var aPl = new Playlist("Otto's fav");


aLib.addPlaylist(aPl);

console.log("Otto's library added a playlist\n", aLib);

var aTr = new Track("Warriors", 5, 400);

aPl.addTrack(aTr);

console.log("playlist in Otto's library added a track\n", aLib);
console.log(aPl);

console.log("the duration in the playlist is now "+aPl.getTotalDuration());
console.log("the rating in the playlist is now "+aPl.getOverallRating());