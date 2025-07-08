$(window).on('load', function () {
  $('#loading').fadeOut(500,);
});

var path = "./images/artwork/作品集";

for (var i = 2; i<=114 ; i++){
    $(".flipbook").append('<div><img src="'+path+i+'.jpg" alt=""  loading="lazy" /></div>');
}
