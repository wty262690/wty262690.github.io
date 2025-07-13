$(window).on('load', function () {
  $('#loading').fadeOut(500,);
});

var path = "./images/artwork/作品集";

$(".flipbook").append('<div><img src="./images/作品集3.jpg" alt=""  loading="lazy" /></div>');
$(".flipbook").append('<div><img src="./images/作品集4.jpg" alt=""  loading="lazy" /></div>');

for (var i = 2; i<=113 ; i++){
    $(".flipbook").append('<div><img src="'+path+i+'.jpg" alt=""  loading="lazy" /></div>');
}

$(".flipbook").append('<div><img src="./images/作品集117.jpg" alt=""  loading="lazy" /></div>');
$(".flipbook").append('<div><img src="./images/作品集118.jpg" alt=""  loading="lazy" /></div>');
$(".flipbook").append('<div><img src="'+path+'114.jpg" alt=""  loading="lazy" /></div>');
