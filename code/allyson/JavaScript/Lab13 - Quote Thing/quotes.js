function yourQuotehere(){
    $.ajax({
        url:'http://quotes.stormconsultancy.co.uk/random.json',
        dataType:'jsonp',
        data:  'method=getQuotehere&format=json&lang=en&jsonp=?'
        success: function(response){
            $('quotehere').html("<br id='quotehere' class='btn'>"+response.quoteText+'</br>&dash;' +response.quoteAuthor +'</br>&dash;</p>");
        }
    });
}

$(function() {
    yourquotehere();
  });

  $('btn').click(function(){quotehere();});