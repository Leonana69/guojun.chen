$('#publication li').each(function() {
  
    var text = $(this).text();
    var value = 'guojun chen';
    var regex = new RegExp("(" + value + ")(?![^<]*>|[^<>]*<\/)", "gi");
  
    if (text.toLowerCase().indexOf(value) > -1) {
      $(this).html( $(this).html().replace(regex, "<u>Guojun Chen</u>") );
    }
  });