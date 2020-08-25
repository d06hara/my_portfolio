$(".dropdown").dropdown();

// ヘッダーの高さ分bodyを下げる
$(function () {
  let header_height = $("#header-menu").height();
  $("body").css("margin-top", header_height + 10);
});
