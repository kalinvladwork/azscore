


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

    $('#datepicker-wrap').datepicker({
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

  // leagues
  $(".leagues_wrap>.more").on("click", function (){
      if($(".leagues_wrap").hasClass('open')) {
          $(".leagues_wrap").removeClass('open');
      }
      else {
          $(".leagues_wrap").addClass('open');
      }
      return false;
  });


    $( "#mySwitch" ).change(function() {
        var checkBoxes = $("input[class=ch]");
        checkBoxes.prop("checked", !checkBoxes.prop("checked"));
    });

    $(".calendar_drop").on("click", function(event)
    {
        $(".datepicker-drop").toggle();
        event.stopPropagation();
    });
    $(".datepicker-drop").on("click", function(event)
    {
        event.stopPropagation();
    });

    $(document).on("click", function(event)
    {
        $(".datepicker-drop").hide();
    });


    // $(".match>.swap").on("click", function (){
    //     if(this.$(".playoff-box-result").hasClass('open')) {
    //         this.removeClass('open');
    //     }
    //     else {
    //         this.addClass('open');
    //     }
    //     return false;
    // });
    $('.swap').onclick = function () {
        alert('NIHYA');

    }


});