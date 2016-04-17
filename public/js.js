$(function() {
  // change hamburger icon to 'x' on click
  var collapsed = true;
  $('#nav-toggle-icon').click(function() {
    var newHtml = (collapsed) ? 'close' : 'menu';
    $(this).html(newHtml);
    collapsed = (collapsed) ? false : true;
  });
});