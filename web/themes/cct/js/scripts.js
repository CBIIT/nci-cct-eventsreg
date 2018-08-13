(function ($) {
  Drupal.behaviors.icrpBehavior = {
    attach: function (context, settings) {
//      alert("Hello World");
	  var event = "";
      var url_path = window.location.pathname;
      //console.log(url_path);
      if(url_path.substring(0, 43).toLowerCase() == '/next/chemical-biology-consortium-symposium') {
        //console.log("next website");
        event="next-cbcs";
        $.updateAssets(event); 
      }
      if(url_path.substring(0, 15).toLowerCase() == '/nob/nciconnect') {
        //console.log("nob website");
      	event = "nob-nciconnect";
        $.updateAssets(event); 
      }
    }
  }

  $.preprocessCalendar = function(e){
    $('.fc-listYear-button').text('Year');
    $('.nav-tabs a').on('shown.bs.tab', function(event){
       // $('#external_events > div > div.fullcalendar').fullCalendar('render');
        $('.fc-today-button').click();
    });
    //console.log("Calendar Page");
    if(!$('#add-event-meeting').length) {
      var href = "/user-roles";
      $.ajax({
          url:  href,
          success: function( data ) {
              //console.log("data returned")
              //console.dir(data);
              var roles = JSON.parse(data);
              //console.dir(roles);
              if(!$('#add-event-meeting').length && (($.inArray("administrator", roles)>=0) || ($.inArray("manager", roles)>=0))) {
                  $('div.view-full-calendar-meetings > div.view-content > div.fullcalendar > div.fc-toolbar > div.fc-right > .fc-listYear-button').before('<span id="add-event-meeting" style="margin-top:7px;font-weight:bold;"><a href="/node/add/events?calendar_type=Partner Meetings&destination=/calendar">+ Add Event</a></span>');
              }
          }
       });
    }

    if(!$('#add-external-event').length) {
      $('div.view-full-calendar-external-events > div.view-content > div.fullcalendar > div.fc-toolbar > div.fc-right > .fc-listYear-button').before('<span id="add-external-event" style="margin-top:7px;font-weight:bold;"><a href="/node/add/events?calendar_type=External Events&destination=/calendar">+ Add Event</a></span>');
    }

  }

  $.updateAssets = function(event) {
 	//console.log("Event"+event);
    var assets = [{
        event:'next-cbcs',
        title : 'NExT - NCI Experimental Therapeutics Program',
        logo_image:'/sites/default/files/logos/next_logo.png',
        home:'/next/chemical-biology-consortium-symposium',
        title_href:'https://next.cancer.gov/fallsymposium2018/default.htm',
        org:'NExT',
        slogan:'NCI Experimental Therapeutics Program'
	  },{
        event:'nob-nciconnect',
        title : '',
        logo_image:'/sites/default/files/logos/nci-logo.svg',
        home:'/nob/nciconnect',
        title_href:'https://next.cancer.gov/fallsymposium2018/default.htm',
        org:'NCI-CONNECT',
        slogan:'Comprehensive Oncology Network Evaluating Rare CNS Tumors'
    }];
    //console.dir(assets);
    var index = assets.map(function(o) { return o.event; }).indexOf(event);
    //console.log("Going to: "+assets[index].title);
    if(assets[index].event == "next-cbcs") {
      $('#navbar').css('background-color', '#eee');
    }
    if(assets[index].event == "nob-nciconnect") {
    	var logo = '<div id="logo" class="pull-left"><div id="site-logo"><a href="'+assets[index].home+'" title="Home">          <img src="/sites/default/files/logos/nci-logo.svg" alt="Home"></a></div></div>';
        var slogan ='<div id="search_box" class="pull-left"><div class="content pull-right" style="width:500px;"><div class="rteright"><span style="font-size:22px;float:right;">NCI-CONNECT</span><br><span style="font-size:14px;float:right;">Comprehensive Oncology Network Evaluating Rare CNS Tumors</span></div></div></div>';
    	// Replace header
    	$('header .navbar-header').css('margin-top', '30px');
    	$('header .navbar-header').css('height', '80px');
    	$('.region-navigation').empty().append(logo+slogan);

    	var menu = `
    	<nav id="event-menu" class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>                        
      </button>
    </div>
    <div id="nci-connect-menu" class="collapse navbar-collapse" id="myNavbar">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/nob/nciconnect/">Home</a></li>
        <li><a href="/nob/nciconnect/registration">Registration</a></li>
        <li><a href="/nob/nciconnect/agenda">Agenda</a></li>
        <li><a href="/nob/nciconnect/travel">Travel</a></li>
        <li><a href="/nob/nciconnect/lodging">Lodging</a></li>
        <li><a href="/nob/nciconnect/nih-campus-access">Campus Access</a></li>
      </ul>
    </div>
  </div>
</nav>
`;
		$('.menu--footer a:first').attr('href', assets[index].home);
		if ($('#event-menu').length == 0) {
			$('#main-content').before(menu);
			$('#nci-connect-menu li').removeClass('active');
			var url_path = window.location.pathname;
			var tab_active = url_path.substring(16,50).toLowerCase();
			console.log(tab_active);
      		switch(tab_active) {
       			case "registration":
					$('#nci-connect-menu li:nth-child(2)').addClass('active');
	    	        break;
       			case "agenda":
					$('#nci-connect-menu li:nth-child(3)').addClass('active');
	    	        break;
       			case "travel":
					$('#nci-connect-menu li:nth-child(4)').addClass('active');
	    	        break;
       			case "lodgings":
					$('#nci-connect-menu li:nth-child(5)').addClass('active');
	    	        break;
       			case "nih-campus-access":
					$('#nci-connect-menu li:nth-child(6)').addClass('active');
	    	        break;
       			default:
					$('#nci-connect-menu li:nth-child(1)').addClass('active');
	    	        break;
	    	}
		}
	}
    /*
    if(index >= 0) {
      return routes[index]['url'];
    } else {
      return '/';
    }
	<div class="rteright">
		<span style="font-size:22px">NCI-CONNECT &nbsp;</span><br />
		<span style="font-size:14px">Comprehensive Oncology Network Evaluating Rare CNS Tumors</span>
	</div>

    */
  }


  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    var return_val;
    if(results == null) {
      return_val = "";
    } else {
      return_val = results[1];
    }
    return return_val;
  }

})(window.jQuery);