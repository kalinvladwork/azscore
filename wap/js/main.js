(function(e) {
  function checkTime(i) {
    return (i < 10) ? "0" + i : i;
  }

  var today = new Date(),
      h = checkTime(today.getHours()),
      m = checkTime(today.getMinutes()),
      gmtHours = -today.getTimezoneOffset()/60;
  document.getElementsByClassName("time")[0].innerHTML = h + ":" + m;
  document.getElementsByClassName('timezone')[0].innerHTML = "(GMT +" + gmtHours + ")";
})();