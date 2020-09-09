// ヘッダーの高さ分bodyを下げる
$(function () {
  var header_height = $("#header-menu").height();
  $("main").css("margin-top", header_height + 10);

  $("a[href]").click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    var position = target.offset().top - header_height - 40;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
