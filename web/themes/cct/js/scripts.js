(function ($) {
  Drupal.behaviors.icrpBehavior = {
    attach: function (context, settings) {
//      alert("Hello World");
	  var event = "";
      var url_path = window.location.pathname;
      //console.log(url_path);
      if(url_path.substring(0, 43).toLowerCase() == '/next/chemical-biology-consortium-symposium') {
        event="next-cbcs";
        $.updateAssets(event); 
      }
      if(url_path.substring(0, 15).toLowerCase() == '/nob/nciconnect') {
        event = "nob-nciconnect";
        $.updateAssets(event); 
      }
      if(url_path.substring(0, 24).toLowerCase() == '/cct/sallie-rosen-kaplan') {
        event = "cct-srk";
        $.updateAssets(event); 
      }
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
        org_title: '',
        slogan:'NCI Experimental Therapeutics Program'
	  },{
        event:'nob-nciconnect',
        title : '',
        logo_image:'/sites/default/files/logos/nci-logo.svg',
        home:'/nob/nciconnect',
        title_href:'https://next.cancer.gov/fallsymposium2018/default.htm',
        org:'NCI-CONNECT',
        org_title: '',
        slogan:'Comprehensive Oncology Network Evaluating Rare CNS Tumors'
    },{
        event:'cct-srk',
        title : '',
        logo_image:'/sites/default/files/logos/cct-logo.png',
        home:'/cct/sallie-rosen-kaplan',
        title_href:'https://www.cancer.gov/grants-training/training/at-nci/srk',
        org:'CCT',
        org_title: 'Center for Cancer Training',
        slogan:'Sallie Rosen Kaplan Postdoctoral Fellowship'
    }];
    //console.dir(assets);
    var index = assets.map(function(o) { return o.event; }).indexOf(event);
    var asset = assets[index];
    //console.log("Going to: "+assets[index].title);
    if(asset.event == "next-cbcs") {
      $('#navbar').css('background-color', '#eee');
      // Replace header
      //$('header .navbar-header').css('margin-top', '30px');
      //$('header .navbar-header').css('height', '80px');

      var logo = '<a class="logo navbar-btn pull-left" href="/next/chemical-biology-consortium-symposium" title="Home" rel="home">      <img src="/sites/default/files/logos/next_logo.png" alt="Home">    </a>';
      var slogan = '<div class="pull-right">    <a class="name navbar-brand" href="https://next.cancer.gov/fallsymposium2018/default.htm" target="_blank" title="NExT" rel="home">NExT - NCI Experimental Therapeutics Program</a>    <div>      </div>                      </div>';
      $('.region-navigation').empty().append(logo+slogan);
      //alert("it works");

    }
    //NCI-Connect
    if(asset.event == "nob-nciconnect") {
      var logo = '<div id="logo" class="pull-left"><div id="site-logo"><a href="'+asset.home+'" title="Home"><img src="'+asset.logo_image+'" alt="Home"></a></div></div>';
      var slogan ='<div id="search_box" class="pull-left"><div class="content pull-right" style="width:500px;"><div class="rteright"><span style="font-size:22px;float:right;" title="'+asset.org_title+'">'+asset.org+'</span><br><span style="font-size:14px;float:right;text-align:right;">'+asset.slogan+'</span></div></div></ div>';
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
            case "lodging":
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
    //CCT Sallie Rosen Kaplan
    if(assets[index].event == "cct-srk") {
      var logo = '<div id="logo" class="pull-left"><div id="site-logo"><a href="'+asset.home+'" title="Home"><img src="'+asset.logo_image+'" alt="Home"></a></div></div>';
      var slogan ='<div id="search_box" class="pull-left"><div class="content pull-right" style="width:500px;"><br><div style="font-size:14px;float:right;text-align:right;"><a href="'+asset.title_href+'" target="_blank">'+asset.slogan+'</a></div></div></div></div></div><div style="clear: both;">';
      // Replace header
      //$('header .navbar-header').css('margin-top', '30px');
      $('header .navbar-header').css('height', '100%');
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
        <li class="active"><a href="/cct/sallie-rosen-kaplan">Home</a></li>
        <li><a href="/cct/sallie-rosen-kaplan/application">Application</a></li>
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
      var tab_active = url_path.substring(25,50).toLowerCase();
      console.log(tab_active);
          switch(tab_active) {
            case "application":
          $('#nci-connect-menu li:nth-child(2)').addClass('active');
                break;
            default:
          $('#nci-connect-menu li:nth-child(1)').addClass('active');
                break;
        }
      }
    }
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