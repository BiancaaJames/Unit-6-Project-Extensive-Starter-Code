$(".Part-Two-Yes").hide();

$(".Part-Two-No").hide();


$(".yes-button").dblclick(function() {
$(".Part-Two-Yes").fadeIn();
$(".page-one").hide();
});

$(".no-button").dblclick(function() {
$(".Part-Two-No").fadeIn();
$(".page-one").hide();
});
