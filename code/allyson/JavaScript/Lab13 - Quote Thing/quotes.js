function yourquotehere(){
    $.ajax([
        url:'http://quotes.stormconsultancy.co.uk/random.json',
        dataType:'jsonp',
        data:  //HALP//
        success: function(response)//halp again//
    ])
}

$(function() {
    yourquotehere();
  });

  $('btn').click(function(){quotehere();});