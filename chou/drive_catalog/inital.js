$(window).on('load', function () {
  $('#loading').fadeOut(500,);
});

var path = "../images/price/artwork";

for (var i = 2; i<=113 ; i+=2){
    $(".content").append('<div class = "img" ><img src="'+path+i+'.jpg" alt=""  loading="lazy" /><img src="'+path+(i+1)+'.jpg" alt=""  loading="lazy" /></div>');
}
$(".content").append('<div class = "img" ><img src="../images/artwork117.jpg" alt=""  loading="lazy" /><img src="../images/artwork118.jpg" alt=""  loading="lazy" /></div>');
$(".content").append('<div class= "img"><img id = "back_cover"  src="../images/back.jpg" alt=""  loading="lazy" /></div>');
