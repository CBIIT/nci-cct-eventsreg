(function ($) {
  Drupal.behaviors.colloquiumBehavior = {
    attach: function (context, settings) {
      //alert("Hello World");
      var event = "";
      var url_path = window.location.pathname;
      //console.log(url_path);    
      if(url_path.substring(0, 37).toLowerCase() == '/cct/fyi-colloquium-2019/registration') {
		//alert("Hello Director registration");
		if(typeof($('#edit-division-office-center-select').prop('data-populated')) == "undefined") {
			//alert("Gotcha b");
			$.getColloquiumDOCList("HNC"); //(i.e. NCI sac = "HNC".  Popluate branches for NCI)
		}
	    $.setupColloquiumListeners(); 
      }
    }
  }
  /*

  Step 1: get Org by Short name #organization-type-select
      a) Convert to SAC code
      b) Get list of children of that SAC code. (i.e. NCI has a sac code of HNC)
      c) Query https://userinfo-dev.nci.nih.gov/api/org/sac/HNC and get sac code of HNC.
      d) Query https://userinfo-dev.nci.nih.gov/api/org/subbranches/sac/hnc to get a list of Divisions (DOCs).
  */
  var userinfo_server = "https://userinfo-dev.nci.nih.gov/api/org/";

  $.setupColloquiumListeners = function() {
  	//var events = $._data($("#dit-organization-type-select")[0], "events")
  	//console.dir(events);
    console.log("add listeners");
    $("#edit-organization-type-select").change(function(){
      console.log("The text has been changed. "+$('#edit-organization-type-select').val());
      if($('#edit-organization-type-select').val() == "HNC") {
        console.log("You selected NCI.  Hurry.");
        $.getColloquiumDOCList("HNC");
        //Make a Rest service pass through on the server side.
        //alert("We have the NCI - National Cancer Institute");
      }
    }); 
  }

  $.getColloquiumDOCList = function(sac) {
    //Look up SAC code by org name
    console.log("Looking up subbranches");

    var query = userinfo_server + 'subbranches/sac/' + sac;
    console.log('query: '+query);
    $.ajax({
      url: query
    })
      .done(function( data ) {
        $.populateColloquiumDOCList(data);
        $('#edit-division-office-center-select').prop('data-populated', 'true');
        if ( console && console.log ) {
          console.log( "Sample of data:", data);
          console.dir(data[0]);
        }
    });
  }

  $.populateColloquiumDOCList =function(data) {
    var $dropdown = $("#edit-division-office-center-select");
    $dropdown.empty();
    $dropdown.append($("<option />").val("").text("- Select -"));
    //<option value="NCI/CCR">NCI/CCR</option><option value="" selected="selected">- Select -</option><option value="NCI/DCEG">NCI/DCEG</option><option value="Leidos">Leidos</option><option value="_other_">Other…</option>
    console.dir(data);
    var foo;
    $.each(data, function() {
      //console.dir(this);
      $dropdown.append($("<option />").val(this.sac).text(this.shortName + ' - ' +$.titleCase(this.name)));
      console.info("          "+"'"+this.sac+"': '"+this.shortName + " - " +$.titleCase(this.name)+"'");
      foo += "          "+"'"+this.sac+"': '"+this.shortName + " - " +$.titleCase(this.name)+"'\n";
      //console.info("          "+"'"+this.sac);
    });
    console.log("FOO Baby");
    console.info(foo);
    $dropdown.append($("<option />").val("_other_").text("Other…"));
  }
  
  $.titleCase = function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      if(str[i] == 'of' || str[i] == 'the' || str[i] == 'and') {
        str[i] = str[i].charAt(0).toLowerCase() + str[i].slice(1); 
      } else {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
      }
    }
    return str.join(' ');
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