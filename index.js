$(".faq-drop1").click(function() {
  if ($(".img1").attr("src") === "images/icon-arrow.svg") {
    $(".img1").attr("src", "images/icon-close.svg");
  } else if ($(".img1").attr("src") === "images/icon-close.svg") {
    $(".img1").attr("src", "images/icon-arrow.svg");
  }
  $(".answer1").toggle();
});

$(".faq-drop2").click(function() {
  if ($(".img2").attr("src") === "images/icon-arrow.svg") {
    $(".img2").attr("src", "images/icon-close.svg");
  } else if ($(".img2").attr("src") === "images/icon-close.svg") {
    $(".img2").attr("src", "images/icon-arrow.svg");
  }
  $(".answer2").toggle();
});

$(".faq-drop3").click(function() {
  if ($(".img3").attr("src") === "images/icon-arrow.svg") {
    $(".img3").attr("src", "images/icon-close.svg");
  } else if ($(".img3").attr("src") === "images/icon-close.svg") {
    $(".img3").attr("src", "images/icon-arrow.svg");
  }
  $(".answer3").toggle();
});

$(".faq-drop4").click(function() {
  if ($(".img4").attr("src") === "images/icon-arrow.svg") {
    $(".img4").attr("src", "images/icon-close.svg");
  } else if ($(".img4").attr("src") === "images/icon-close.svg") {
    $(".img4").attr("src", "images/icon-arrow.svg");
  }
  $(".answer4").toggle();
});
