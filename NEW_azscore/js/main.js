(function(e) {
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }

  function startTime() {
    var today = new Date(),
        h = checkTime(today.getHours()),
        m = checkTime(today.getMinutes()),
        gmtHours = -today.getTimezoneOffset()/60;
    document.getElementsByClassName("show-time")[0].innerHTML = h + ":" + m;
    document.getElementsByClassName('timezone')[0].innerHTML = "+" + gmtHours;
    t = setTimeout(function () {
        startTime()
    }, 30000);
  }
  startTime();
})();

$(document).ready(function(e){
  // dropdown menu
  $('.dropdown').on('click',function(e){
    e.preventDefault();
    $(this).find('.menu').slideToggle(280);
  });

  // scroll to top
  $('.to-top').click(function(e){
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });

  // datepicker
  $('#sandbox-container div').datepicker({
    todayHighlight: true
  });

  $('.button-slide-menu').on("click", function (e){
    e.preventDefault();
    console.log('h1')
    $(".slide-menu").toggleClass("slide-menu-show");
    $(".fog-hover").toggleClass("fog");
  });

  $(".fog-hover").on("click", function (){
      $(".slide-menu").toggleClass("slide-menu-show");
      $(".fog-hover").toggleClass("fog");
  });
  $('.button-collapse').sideNav({
          menuWidth: 260, // Default is 240
          edge: 'left', // Choose the horizontal origin
          closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
          draggable: true // Choose whether you can drag to open on touch screens
      }
  );
});