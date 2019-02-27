function implement_fullpage()
{
	$('#fullpage').fullpage({
			anchors: ['home', 'caption', 'app'],
			sectionsColor: ['#000000', '#000000', '#000000'],
		});
}

function filter(fil, likes, tag, rec)
{
  if(fil=='0')
    name='1977';
  else if(fil=='1')
    name='amaro';
  else if(fil=='2')
    name='aden';
  else if(fil=='3')
    name='brannan';
  else if(fil=='4')
    name='earlybird';
  else if(fil=='5')
    name='dogpatch';
  else if(fil=='6')
    name='hefe';
  else if(fil=='7')
    name='hudson';
  else if(fil=='8')
    name='juno';
  else if(fil=='9')
    name='lofi';
  else if(fil=='10')
    name='ludwig';
  else if(fil=='11')
    name='mayfair';
  else if(fil=='12')
    name='nashville';
  else if(fil=='13')
    name='slumber';
  else if(fil=='14')
    name='vesper';
  else if(fil=='15')
    name='rise';
  else if(fil=='16')
    name='sierra';
  else if(fil=='17')
    name='sutro';
  else if(fil=='18')
    name='toaster';
  else if(fil=='19')
    name='valencia';
  else if(fil=='20')
    name='walden';
  else if(fil=='21')
    name='willow';
  else if(fil=='22')
    name='xpro-ii';
  else
    alert("Filter Error!");

  

  $('#pic').removeClass();
  $('#pic').addClass('filter-'+name);
  if(rec==fil)
   $('#fil_name').html('<font color="green"><h3>Trending</h3></font><font color="white"><h4>'+name+'</h4></font>');
  else
    $('#fil_name').html('<font color="white"><h4>'+name+'</h4></font>');
  $('#like_no').text(likes);
  $('#filbtn_1').hide();
  $('#filbtn_2').hide();
  $('#filbtn_3').hide();
  $('#'+tag).show();
}

$(document).ready(function() {
	implement_fullpage();
	// cust_controls();
	$('.progress').hide();
  $('#filbtn_1').hide();
  $('#filbtn_2').hide();
  $('#filbtn_3').hide();

});

function progress_bar()
{
	$('.progress').show();
	var current_progress = 0;
  	var interval = setInterval(function() {
      current_progress += parseInt(10 * Math.random());
      if (current_progress >= 100)
      	current_progress = 100;
      $("#dynamic")
      .css("width", current_progress + "%")
      .attr("aria-valuenow", current_progress)
      .text(current_progress + "% Complete");
      if (current_progress >= 100)
          clearInterval(interval);
  }, 1000);
}
