function Album (cover, album, name) {
  this.cover = cover;
  this.album = album;
  this.name = name;
};



$(function() {
  $(".album-input").submit(function(event){
      event.preventDefault();
      var inputCover = $("input#cover-url").val();
      var inputAlbum = $("input#album-name").val();
      var inputName = $("input#artist-name").val();

      var newAlbum = new Album(inputCover, inputAlbum, inputName);
      console.log(newAlbum);

      $("ul.album-list").append('<li><img src="' + newAlbum.cover + '"></li>');
  });
});
