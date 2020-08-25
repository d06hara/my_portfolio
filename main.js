$(".dropdown").dropdown();

// ヘッダーの高さ分bodyを下げる
$(function () {
  var header_height = $("#header-menu").height();
  $("body").css("margin-top", header_height + 10);

  $("a[href]").click(function () {
    var speed = 1000;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? "html" : href);
    // console.log("aaa");
    var position = target.offset().top - header_height - 20;
    $("body,html").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});

// // ページ内リンクのずれ解消
// $(function () {
//   // let windowWidth = $(window).width();
//   $("a[href^=#]").click(function () {
//     var speed = 1000;
//     var href = $(this).attr("href");
//     var target = $(href == "#" || href == "" ? "html" : href);
//     var position = target.offset().top - header_height;
//     $("body,html").animate({ scrollTop: position }, speed, "swing");
//     return false;
//   });
// });
