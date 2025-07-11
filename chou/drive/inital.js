$(window).on('load', function () {
  $('#loading').fadeOut(500,);
});

var path = "../images/artwork/作品集";

for (var i = 2; i<=113 ; i++){
    $(".content").append('<div class = "img" ><img src="'+path+i+'.jpg" alt=""  loading="lazy" /></div>');
}
$(".content").append('<div><img id = "back_cover"  src="../images/back.jpg" alt=""  loading="lazy" /></div>');
