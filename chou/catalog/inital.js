var path = "../images/price/artwork";
$(window).on('load', function () {
  $('#loading').fadeOut(500,);
});


for (var i = 2; i<=112 ; i++){
    $(".flipbook").append('<div><img src="'+path+i+'.jpg" alt="" /></div>');
}
