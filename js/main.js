// jsを記述する際はここに記載していく

//メニューのスムーススクロール各種

$(function() {
  $(".toAbout").click(function() {
    $("html,body").animate({ scrollTop: $("#about").offset().top - 50 });
    $('input[id="nav-input"]').prop("checked", false);
  });
});

$(function() {
  $(".toCourse").click(function() {
    $("html,body").animate({ scrollTop: $("#course").offset().top - 50 });
    $('input[id="nav-input"]').prop("checked", false);
  });
});

$(function() {
  $(".toNews").click(function() {
    $("html,body").animate({ scrollTop: $("#news").offset().top - 50 });
    $('input[id="nav-input"]').prop("checked", false);
  });
});

$(function() {
  $(".toAccess").click(function() {
    $("html,body").animate({ scrollTop: $("#access").offset().top - 50 });
    $('input[id="nav-input"]').prop("checked", false);
  });
});

$(function() {
  $(".toContact").click(function() {
    $("html,body").animate({ scrollTop: $("#contact").offset().top - 50 });
    $('input[id="nav-input"]').prop("checked", false);
  });
});

// メニュースクロールここまで

// トップページに戻るここから
$(function() {
  var pagetop = $(".pagetop");
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
      pagetop.fadeOut();
    }
  });
  pagetop.click(function() {
    $("body, html").animate({ scrollTop: 0 }, 500);
    return false;
  });
});

// トップページ戻るここまで

//　マウスをミッキーマウスここから
$(function() {
  var cursor = $(".cursor"),
    follower = $(".follower"),
    cWidth = 50, //カーソルの大きさ
    fWidth = 50, //フォロワーの大きさ
    delay = 20, //数字を大きくするとフォロワーがより遅れて来る
    mouseX = 0, //マウスのX座標
    mouseY = 0, //マウスのY座標
    posX = 0, //フォロワーのX座標
    posY = 0; //フォロワーのX座標
  TweenMax.to({}, 0.001, {
    repeat: -1,
    onRepeat: function() {
      posX += (mouseX - posX) / delay;
      posY += (mouseY - posY) / delay;

      TweenMax.set(follower, {
        css: {
          left: posX - fWidth / 2,
          top: posY - fWidth / 2
        }
      });

      TweenMax.set(cursor, {
        css: {
          left: mouseX - cWidth / 2,
          top: mouseY - cWidth / 2
        }
      });
    }
  });

  //マウス座標を取得
  $(document).on("mousemove", function(e) {
    mouseX = e.pageX;
    mouseY = e.pageY;
  });

  $("a,button, .button").on({
    mouseenter: function() {
      cursor.addClass("is-active");
      follower.addClass("is-active");
    },
    mouseleave: function() {
      cursor.removeClass("is-active");
      follower.removeClass("is-active");
    }
  });
});

// ミッキーマウスここまで
$(function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    /* ウィンドウサイズが 768px以下の場合のコードをここに */
  } else {
    /* ウィンドウサイズが 768px以上の場合のコードをここに */
    $(window).fadeThis();
  }
});

// ＝＝＝＝横からくるやつスマホではオフ。ここまで＝＝＝＝

// ==========重なるやつ==========
$(function() {
  if (window.matchMedia("(max-width: 768px)").matches) {
    /* ウィンドウサイズが 768px以下の場合のコードをここに */
  } else {
    /* ウィンドウサイズが 768px以上の場合のコードをここに */
    $(".main-content-wrapper").stickyStack({
      containerElement: ".main-content-wrapper",
      stackingElement: "section",
      boxShadow: "0 -3px 20px rgba(0, 0, 0, 0.25)"
    });
  }
});

// ===========重なる奴ここまで======

//　==========ドナルドになるやつ=====
$(function() {
  var setImg = ".pagetop a";
  var fadeSpeed = 1600;
  var switchDelay = 8000;

  $(setImg)
    .children("img")
    .css({ opacity: "0" });
  $(setImg + " img:first")
    .stop()
    .animate({ opacity: "0.5", zIndex: "20" }, fadeSpeed);

  setInterval(function() {
    $(setImg + " :first-child")
      .animate({ opacity: "0" }, fadeSpeed)
      .next("img")
      .animate({ opacity: "0.5" }, fadeSpeed)
      .end()
      .appendTo(setImg);
  }, switchDelay);
});

// ========access背景=======
$(function() {
  var bgsc1 = 0;
  var bgsc2 = 0;
  var bgsc3 = 0;
  var bgsc4 = 0;
  setInterval(function() {
    bgsc1 += 0;
    bgsc2 += 0.1;
    $(".skinBody2").css("background-position", bgsc1 + "px " + bgsc2 + "px");
  });
});
