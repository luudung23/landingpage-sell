$("header .icon-menu").on("click", function () {
  const checkHasClass = $("header .navbar-category").hasClass("menu--active");
  if (checkHasClass) {
    $("header .navbar-category").removeClass("menu--active");
    $("body").removeClass("not-scroll");
  } else {
    $("header .navbar-category").addClass("menu--active");
    $("body").addClass("not-scroll");
  }
});

$("header .btn-filter").on("click", function () {
  $(".advert-inner .menu").addClass("active");
  $("body").addClass("not-scroll");
  $(".coverage-blur").addClass("active");
});

$(".coverage-blur").on("click", function () {
  $(this).removeClass("active");
  $("body").removeClass("not-scroll");
  $(".advert-inner .menu").removeClass("active");
});

// $(window).scroll(function () {
//   if ($(this).scrollTop() > 0) {
//     $("header").addClass("header--fix");
//   } else {
//     $("header").removeClass("header--fix");
//   }
// });

var owl = $(".prominent-products");

owl.owlCarousel({
  loop: false,
  margin: 10,
  responsiveClass: true,
  responsiveBaseElement: $(".product-advert")[0],
  dotsContainer: ".owl-offres-dots",
  onInitialized: initialDots,
  onChanged: counter,
  // navText: [$(".am-next"), $(".am-prev")],
  responsive: {
    0: {
      items: 1,
      nav: false,
      dots: false,
    },
  },
});

function counter(event) {
  if (!event.namespace) {
    return;
  }
  var slides = event.relatedTarget;
  const lengthItems = slides.items().length;
  if (!lengthItems) {
    return;
  }
  const indexCurrent = slides.relative(slides.current()) + 1;
  $(".slider_nav .nav-btn").removeClass("disabled");
  $(`.owl-dots .dot`).removeClass("active");
  $(`.owl-dots .dot:nth-child(${indexCurrent})`).addClass("active");
  if (indexCurrent === lengthItems) {
    $(".slider_nav .am-next").addClass("disabled");
  } else if (indexCurrent === 1) {
    $(".slider_nav .am-prev").addClass("disabled");
  }
}

function initialDots(event) {
  if (!event.namespace) {
    return;
  }
  var slides = event.relatedTarget;
  const lengthItems = slides.items().length;
  if (!lengthItems) {
    return;
  }
  let html = "";
  for (let index = 0; index < lengthItems; index++) {
    html += '<li class="dot"></li>';
  }
  $(".owl-dots").append(html);
}

// Go to the next item
$(".slider_nav .am-next").click(function () {
  owl.trigger("next.owl.carousel");
});
// Go to the previous item
$(".slider_nav .am-prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

$(".owl-dots .dot").on("click", function () {
  owl.trigger("to.owl.carousel", [$(this).index()]);
  $(".owl-dots .dot").removeClass("active");
  $(this).addClass("active");
});
