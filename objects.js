var playlist = {'Kanye West':"Black Skinhead"};
function updatePlaylist(playlistObject,artist,title){
  Object.assign(playlistObject, {artist: title})
  return playlistObject
}
function removeFromPlaylist(playlistObject, artist){
  
}