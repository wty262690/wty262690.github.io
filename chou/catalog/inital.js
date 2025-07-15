var path = "../images/price/artwork";
$(window).on('load', function () {
  $('#loading').fadeOut(500,);
});

$(".flipbook").append('<div><img src="../images/作品集3.jpg" alt=""  loading="lazy" /></div>');
$(".flipbook").append('<div><img src="../images/作品集4.jpg" alt=""  loading="lazy" /></div>');


for (var i = 2; i<=113 ; i++){
    $(".flipbook").append('<div><img src="'+path+i+'.jpg" alt=""  loading="lazy" /></div>');
}
$(".flipbook").append('<div><img src="../images/artwork117.jpg?v=1" alt=""  loading="lazy" /></div>');
$(".flipbook").append('<div><img src="../images/artwork118.jpg?v=1" alt=""  loading="lazy" /></div>');
$(".flipbook").append('<div class= "img"><img id = "back_cover"  src="../images/back.jpg" alt=""  loading="lazy" /></div>');
