$(document).ready(function(e){
  // sliding menu
  $('.slide-menu-but').on("click", function (e){
    e.preventDefault();
    $(".slide-menu").toggleClass("slide-menu-show");
    $(".fog-hover").toggleClass("fog");
  });

  $(".fog-hover").on("click", function (){
      $(".slide-menu").toggleClass("slide-menu-show");
      $(".fog-hover").toggleClass("fog");
  });
});

(function(e) {
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }

  function startTime() {
    var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        gmtHours = -today.getTimezoneOffset()/60;
    document.getElementsByClassName("time")[0].innerHTML = h + ":" + m;
    document.getElementsByClassName('timezone')[0].innerHTML = "(GMT +" + gmtHours + ")";
    t = setTimeout(function () {
        startTime()
    }, 30000);
  }
  startTime();
})();