var pageHeight = $('body').height(),
  footerHeight = $('site-footer').height();
if (pageHeight < $(window).height() - footerHeight) {
  $('site-footer').css({
    'position': 'absolute',
    'bottom': '0'
  });
} else {
  $('site-footer').css({
    'position': '',
    'bottom': ''
  });
}