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
      if(url_path.substring(0, 21).toLowerCase() == '/od/rabson-remembered') {
        event = "od-rr";
        $.updateAssets(event); 
      }
      if(url_path.substring(0, 18).toLowerCase() == '/cct/sssc-pdd-2018') {
        event = "cct-sssc-pdd-2018";
        $.updateAssets(event); 
      }
      //console.log(url_path.substring(0, 50).toLowerCase());
      if(url_path.substring(0, 19).toLowerCase() == '/presto/stewardship') {
        event = "presto-stewardship";
        $.updateAssets(event); 
      }
      if(url_path.substring(0, 24).toLowerCase() == '/cct/fyi-colloquium-2019') {
        event = "cct-fyi-colloquium-2019";
        $.updateAssets(event); 
      }
      if(url_path.substring(0, 9).toLowerCase() == '/cct/dcdp') {
        event = "cct-dcdp";
        $.updateAssets(event); 
      }
    }
  }

  $.updateAssets = function(event) {
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
    },{
        event:'od-rr',
        title : 'Rabson Remembered',
        logo_image:'',
        home:'/od/rabson-remembered',
        title_href:'',
        org:'od',
        org_title: 'Office of the Director',
        slogan:'Alan S. Rabson, MD: Celebrating a Life in Science, Leadership, and Patient Care'
    },{
        event:'cct-sssc-pdd-2018',
        title : 'SSSC Professional Development Day',
        logo_image:'',
        home:'/cct/sssc-pdd-2018',
        title_href:'',
        org:'od',
        org_title: '',
        slogan:''
    },{
        event:'presto-stewardship',
        title : 'NCI Clinical Trials Stewardship Training',
        logo_image:'',
        home:'/presto/stewardship',
        title_href:'',
        org:'presto',
        org_title: '',
        slogan:''
    },{
        event:'cct-fyi-colloquium-2019',
        title : 'Fellowship and Young Investigators Colloquium',
        logo_image:'',
        home:'/cct/fyi-colloquium-2019',
        title_href:'',
        org:'cct',
        org_title: '',
        slogan:''
    },{
        event:'cct-dcdp',
        title : 'Diversity Career Development Program (DCDP)',
        logo_image:'',
        home:'/cct/dcdp',
        title_href:'',
        org:'cct',
        org_title: '',
        slogan:''
    }];
    //console.dir(assets);
    var index = assets.map(function(o) { return o.event; }).indexOf(event);
    var asset = assets[index];
    console.log("Going to: "+assets[index].title);

    
    if(asset.event == "cct-dcdp") {
      $('#eventsreg-nav-bar li').removeClass('active');
      var url_path = window.location.pathname;
      var tab_active = url_path.substring(10,50).toLowerCase();
      console.log(tab_active)
        switch(tab_active) {
          case "application":
            $('#eventsreg-nav-bar li:nth-child(2)').addClass('active');
             break;
          default:
            $('#eventsreg-nav-bar li:nth-child(1)').addClass('active');
            break;
        }
    }

    if(asset.event == "cct-fyi-colloquium-2019") {
      $('#eventsreg-nav-bar li').removeClass('active');
      var url_path = window.location.pathname;
      var tab_active = url_path.substring(25,50).toLowerCase();
      console.log(tab_active)
        switch(tab_active) {
          case "abstracts":
            $('#eventsreg-nav-bar li:nth-child(2)').addClass('active');
             break;
          case "registration":
            $('#eventsreg-nav-bar li:nth-child(3)').addClass('active');
             break;
          case "venue":
            $('#eventsreg-nav-bar li:nth-child(4)').addClass('active');
             break;
          default:
            $('#eventsreg-nav-bar li:nth-child(1)').addClass('active');
            break;
        }
    }

    if(asset.event == "presto-stewardship") {
      $('#eventsreg-nav-bar li').removeClass('active');
      var url_path = window.location.pathname;
      var tab_active = url_path.substring(20,50).toLowerCase();
      console.log(tab_active);
        switch(tab_active) {
          case "registration":
            $('#eventsreg-nav-bar li:nth-child(2)').addClass('active');
             break;
          default:
            $('#eventsreg-nav-bar li:nth-child(1)').addClass('active');
            break;
        }
    }

    if(asset.event == "cct-sssc-pdd-2018") {
      $('#eventsreg-nav-bar li').removeClass('active');
      var url_path = window.location.pathname;
      var tab_active = url_path.substring(19,50).toLowerCase();
      //console.log(tab_active);
        switch(tab_active) {
          case "agenda":
            $('#eventsreg-nav-bar li:nth-child(2)').addClass('active');
            break;
          case "registration":
            $('#eventsreg-nav-bar li:nth-child(3)').addClass('active');
             break;
          case "venue":
            $('#eventsreg-nav-bar li:nth-child(4)').addClass('active');
             break;
          default:
            $('#eventsreg-nav-bar li:nth-child(1)').addClass('active');
            break;
        }
    }

    if(asset.event == "od-rr") {
      $('#eventsreg-nav-bar li').removeClass('active');
      var url_path = window.location.pathname;
      var tab_active = url_path.substring(22,50).toLowerCase();
      //console.log(tab_active);
        switch(tab_active) {
          case "registration":
            $('#eventsreg-nav-bar li:nth-child(2)').addClass('active');
            break;
          case "sentiments":
            $('#eventsreg-nav-bar li:nth-child(3)').addClass('active');
             break;
          default:
            $('#eventsreg-nav-bar li:nth-child(1)').addClass('active');
            break;
        }
    }

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

      var menu = '<nav id="event-menu" class="navbar navbar-default">' +
  '<div class="container-fluid">' +
   '<div class="navbar-header">' +
     '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">' +
       '<span class="icon-bar"></span>' +
       '<span class="icon-bar"></span>' +
       '<span class="icon-bar"></span>' +
     '</button>' +
   '</div>' +
     '<div id="nci-connect-menu" class="collapse navbar-collapse" id="myNavbar">' +
       '<ul class="nav navbar-nav">' +
         '<li class="active"><a href="/nob/nciconnect/">Home</a></li>' +
         '<li><a href="/nob/nciconnect/registration">Registration</a></li>' +
         '<li><a href="/nob/nciconnect/agenda">Agenda</a></li>' +
         '<li><a href="/nob/nciconnect/travel">Travel</a></li>' +
         '<li><a href="/nob/nciconnect/lodging">Lodging</a></li>' +
         '<li><a href="/nob/nciconnect/nih-campus-access">Campus Access</a></li>' +
         '</ul>' +
     '</div>' +
   '</div>' +
   '</nav>';
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

      var menu = '<nav id="event-menu" class="navbar navbar-default">' +
  '<div class="container-fluid">' +
   '<div class="navbar-header">' +
     '<button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">' +
       '<span class="icon-bar"></span>' +
       '<span class="icon-bar"></span>' +
       '<span class="icon-bar"></span>' +
     '</button>' +
   '</div>' +
     '<div id="nci-connect-menu" class="collapse navbar-collapse" id="myNavbar">' +
      '<ul class="nav navbar-nav">' +
        '<li class="active"><a href="/cct/sallie-rosen-kaplan">Home</a></li>' +
        '<li><a href="/cct/sallie-rosen-kaplan/application">Application</a></li>' +
      '</ul>' +
    '</div>' +
  '</div>' +
'</nav>';

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

})(window.jQuery);;
/**
* DO NOT EDIT THIS FILE.
* See the following change record for more information,
* https://www.drupal.org/node/2815083
* @preserve
**/

(function (Drupal, drupalSettings) {
  Drupal.behaviors.activeLinks = {
    attach: function attach(context) {
      var path = drupalSettings.path;
      var queryString = JSON.stringify(path.currentQuery);
      var querySelector = path.currentQuery ? '[data-drupal-link-query=\'' + queryString + '\']' : ':not([data-drupal-link-query])';
      var originalSelectors = ['[data-drupal-link-system-path="' + path.currentPath + '"]'];
      var selectors = void 0;

      if (path.isFront) {
        originalSelectors.push('[data-drupal-link-system-path="<front>"]');
      }

      selectors = [].concat(originalSelectors.map(function (selector) {
        return selector + ':not([hreflang])';
      }), originalSelectors.map(function (selector) {
        return selector + '[hreflang="' + path.currentLanguage + '"]';
      }));

      selectors = selectors.map(function (current) {
        return current + querySelector;
      });

      var activeLinks = context.querySelectorAll(selectors.join(','));
      var il = activeLinks.length;
      for (var i = 0; i < il; i++) {
        activeLinks[i].classList.add('is-active');
      }
    },
    detach: function detach(context, settings, trigger) {
      if (trigger === 'unload') {
        var activeLinks = context.querySelectorAll('[data-drupal-link-system-path].is-active');
        var il = activeLinks.length;
        for (var i = 0; i < il; i++) {
          activeLinks[i].classList.remove('is-active');
        }
      }
    }
  };
})(Drupal, drupalSettings);;
(function ($, Drupal) {
  'use strict';

  /**
   * @file
   * Defines Imce File Manager.
   */

  /**
   * Global container.
   */
  var imce = window.imce = {
    // Configuration options
    conf: {},
    // Locally stored data
    local: {},
    // Events
    events: {},
    // Shortcuts
    shortcuts: {fm: {}, tree: {}, content: {}},
    // Toolbar buttons
    toolbarButtons: {},
    // Folder tree
    tree: {},
    // Currently selected items
    selection: [],
    // Message queue
    messageQueue: [],
    // Sort handlers
    sorters: {}
  };

  /**
   * Initiate imce on document ready.
   */
  $(document).ready(function () {
    var settings = window.drupalSettings;
    var conf = settings && settings.imce;
    var body = document.body;
    if (conf && !imce.activeFolder && $(body).hasClass('imce-page')) {
      if (!conf.ajax_url) {
        conf.ajax_url = Drupal.url(settings.path.currentPath);
      }
      imce.init(conf, body);
    }
  });

  /**
   * Initialize imce.
   */
  imce.init = function (conf, parentEl) {
    // Set conf
    conf = $.extend(imce.conf, conf);
    if (!conf.ajax_url || !conf.folders || !conf.root_url) {
      return;
    }
    imce.parentEl = parentEl;
    // Get stored data
    try {
      $.extend(imce.local, JSON.parse(localStorage.getItem('imce.local')));
    }
    catch (err) {
      imce.delayError(err);
    }
    // Init
    imce.trigger('preinit');
    imce.checkIntegration();
    imce.initUI();
    imce.initTree();
    // Add shortcuts
    imce.addShortcut('ENTER', imce.eTreeEnter, 'tree');
    imce.addShortcut('UP', imce.eTreeUp, 'tree');
    imce.addShortcut('DOWN', imce.eTreeDown, 'tree');
    imce.addShortcut('LEFT', imce.eTreeLR, 'tree');
    imce.addShortcut('RIGHT', imce.eTreeLR, 'tree');
    imce.addShortcut('ENTER', imce.eContentEnter, 'content');
    imce.addShortcut('UP', imce.eContentArrow, 'content');
    imce.addShortcut('DOWN', imce.eContentArrow, 'content');
    imce.addShortcut('LEFT', imce.eContentArrow, 'content');
    imce.addShortcut('RIGHT', imce.eContentArrow, 'content');
    imce.addShortcut('Ctrl+A', imce.eContentCtrlA, 'content');
    // Add refresh button
    imce.addTbb('refresh', {
      title: Drupal.t('Refresh'),
      permission: 'browse_files|browse_subfolders',
      handler: imce.eFmRefresh,
      shortcut: 'F5',
      icon: 'refresh'
    });
    // Register default activeFolder handler
    imce.bind('activateFolder', imce.defaultActivateFolder);
    // Trigger init handlers
    imce.trigger('init');
    // Create sendto toolbar button if needed.
    imce.createSendtoTbb();
    // Add the file manager to the page
    parentEl.appendChild(imce.fmEl);
    // Set window events
    $(window).bind('beforeunload', imce.eWinBeforeunload).bind('resize', imce.eWinResize);
    imce.eWinResize();
    // Content focus
    imce.contentEl.focus();
    // Set initial messages
    imce.ajaxProcessMessages(conf);
    // Open active path
    var path = conf.active_path;
    var Folder = path && imce.addFolder(path);
    if (!Folder) {
      for (path in conf.folders) {
        if (Folder = imce.getFolder(path)) {
          break;
        }
      }
    }
    if (Folder) {
      Folder.open();
    }
    // Triger postinit
    imce.trigger('postinit');
  };

  /**
   * Init UI elements.
   */
  imce.initUI = function () {
    var el = imce.fmEl;
    var createEl = imce.createEl;
    if (el) {
      return el;
    }
    el = imce.fmEl = createEl('<div id="imce-fm"></div>');
    el.onkeydown = imce.eFmKeydown;
    el.tabIndex = 0;
    // Toolbar
    el.appendChild(imce.toolbarEl = createEl('<div id="imce-toolbar"></div>'));
    // Body
    el.appendChild(imce.bodyEl = createEl('<div id="imce-body"></div>'));
    // Tree
    el = imce.treeEl = createEl('<div id="imce-tree"></div>');
    el.onkeydown = imce.eTreeKeydown;
    el.onmousedown = imce.eTreeMousedown;
    el.ontouchstart = imce.eTreeTouchstart;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Tree resizer
    el = imce.treeResizerEl = createEl('<div id="imce-tree-resizer"></div>');
    el.onmousedown = imce.eTreeResizerMousedown;
    el.ontouchstart = imce.eTreeResizerTouchstart;
    imce.bodyEl.appendChild(el);
    // Content
    el = imce.contentEl = createEl('<div id="imce-content"></div>');
    el.onmousedown = imce.eContentMousedown;
    el.ontouchstart = imce.eContentTouchstart;
    el.onkeydown = imce.eContentKeydown;
    el.onscroll = imce.eContentScroll;
    el.tabIndex = 0;
    imce.bodyEl.appendChild(el);
    // Content header
    el = imce.contentHeaderEl = imce.createEl('<div class="imce-content-header"><div class="imce-item"><div class="imce-item-date" data-sort="date">' + Drupal.t('Date') + '</div><div class="imce-item-height" data-sort="height">' + Drupal.t('Height') + '</div><div class="imce-item-width" data-sort="width">' + Drupal.t('Width') + '</div><div class="imce-item-size" data-sort="size">' + Drupal.t('Size') + '</div><div class="imce-item-icon imce-ficon" data-sort="ext"></div><div class="imce-item-name" data-sort="name">' + Drupal.t('Name') + '</div></div></div>');
    el.onclick = imce.eContentHeaderClick;
    imce.contentEl.appendChild(el);
    // Content status
    el = imce.contentStatusEl = imce.createEl('<div class="imce-content-status"></div>');
    imce.contentEl.appendChild(el);
    // Body resizer
    el = imce.bodyResizerEl = createEl('<div id="imce-body-resizer"></div>');
    el.onmousedown = imce.eBodyResizerMousedown;
    el.ontouchstart = imce.eBodyResizerTouchstart;
    imce.fmEl.appendChild(el);
    // Preview
    imce.fmEl.appendChild(imce.previewEl = createEl('<div id="imce-preview"></div>'));
    return el;
  };

  /**
   * Init folder tree.
   */
  imce.initTree = function () {
    var path;
    var folders = imce.getConf('folders');
    // Create root
    var scheme = imce.getConf('scheme');
    var root = new imce.Folder(scheme ? scheme + '://' : '<' + Drupal.t('root') + '>');
    root.setPath('.');
    root.branchEl.className += ' root';
    imce.treeEl.appendChild(root.branchEl);
    // Create predefined folders.
    for (path in folders) {
      if (imce.owns(folders, path)) {
        imce.addFolder(path, folders[path]);
      }
    }
  };

  /**
   * Returns a folder by path.
   */
  imce.getFolder = function (path) {
    if (imce.owns(imce.tree, path)) {
      return imce.tree[path];
    }
  };

  /**
   * Returns an item by path.
   */
  imce.getItem = function (path) {
    var Folder;
    var parts = imce.splitPath(path);
    if (parts) {
      if (Folder = imce.getFolder(parts[0])) {
        return Folder.getItem(parts[1]);
      }
    }
  };

  /**
   * Adds a folder to the tree.
   */
  imce.addFolder = function (path, conf) {
    var parts;
    var parent;
    var Folder = imce.getFolder(path);
    // Existing
    if (Folder) {
      if (conf) {
        Folder.setConf(conf);
      }
      return Folder;
    }
    // New. Append to the parent.
    if (parts = imce.splitPath(path)) {
      if (parent = imce.addFolder(parts[0])) {
        Folder = new imce.Folder(parts[1], conf);
        parent.appendItem(Folder);
        return Folder;
      }
    }
  };

  /**
   * Add a toolbar button.
   */
  imce.addTbb = function (id, opt) {
    return imce.getTbb(id) || new imce.Tbb(id, opt);
  };

  /**
   * Returns a toolbar button.
   */
  imce.getTbb = function (id) {
    return imce.toolbarButtons[id];
  };

  /**
   * Returns a configuration option.
   */
  imce.getConf = function (name, defaultValue) {
    var value;
    var conf = imce.conf;
    if (!name) {
      return conf;
    }
    value = conf[name];
    return value == null ? defaultValue : value;
  };


  /**
   * Returns a copy of selected items.
   */
  imce.getSelection = function () {
    return imce.selection.slice(0);
  };

  /**
   * Counts selected items.
   */
  imce.countSelection = function () {
    return this.selection.length;
  };

  /**
   * Returns the selected items grouped by parent folder and type.
   */
  imce.groupSelection = function () {
    return imce.groupItems(imce.selection);
  };

  /**
   * Select all items in the active folder.
   */
  imce.selectAll = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      Folder.selectAll();
    }
  };

  /**
   * Deselects all items.
   */
  imce.deselectAll = function () {
    var i;
    var arr = imce.getSelection();
    for (i in arr) {
      if (imce.owns(arr, i)) {
        arr[i].deselect();
      }
    }
  };

  /**
   * Returns last selected item.
   */
  imce.getLastSelected = function () {
    var arr = imce.selection;
    var len = arr.length;
    if (len) {
      return arr[len - 1];
    }
  };

  /**
   * Adds an item to the selection.
   */
  imce.selectItem = function (Item) {
    if (!Item.selected) {
      var arr = imce.selection;
      var oldlen = arr.length;
      arr.push(Item);
      Item.setState('selected');
      if (oldlen < 2) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Removes an item from the selection.
   */
  imce.deselectItem = function (Item) {
    if (Item.selected) {
      var arr = imce.selection;
      var i = $.inArray(Item, arr);
      Item.unsetState('selected');
      if (i !== -1) {
        arr.splice(i, 1);
        if (arr.length < 2) {
          imce.updatePreview();
        }
      }
    }
  };


  /**
   * Checks external application integration by URL parameters.
   *
   * Ex-1: http://example.com/imce?sendto=HANDLER
   * Creates a sendto operation that calls HANDLER(File, imceWin) of the parent window.
   * Ex-2: http://example.com/imce?urlField=FIELD-ID
   * Creates a sendto operation that fills the field in parent window with the selected file's URL.
   * Ex-3: http://example.com/imce?oninit=HANDLER
   * Calls HANDLER() with imce context when the UI is ready.
   */
  imce.checkIntegration = function () {
    var query = imce.getQuery();
    var handler;
    var urlField;
    var parentWin = window.opener || window.parent;
    if (imce.parentWin = parentWin) {
      // Check sendto handler
      if (handler = imce.resolveHandler(query.sendto, parentWin)) {
        imce.sendtoHandler = handler;
      }
      // Check url field
      else if (urlField = query.urlField) {
        if (urlField = parentWin.document.getElementById(urlField)) {
          imce.sendtoHandler = function (Item, win) {
            try {
              imce.parentWin.focus();
              (imce.parentWin.jQuery||$)(urlField).val(Item.getUrl()).blur().change().focus();
            }
            catch (err) {
              imce.delayError(err);
            }
            win.close();
          };
        }
      }
      // Check init handler
      if (handler = imce.resolveHandler(query.oninit, parentWin)) {
        imce.bind('init', handler);
      }
      // Store sendto type
      if (imce.sendtoHandler && query.type) {
        imce.sendtoType = query.type;
      }
    }
  };

  /**
   * Creates the sendto toolbar button.
   */
  imce.createSendtoTbb = function (title, desc) {
    if (imce.sendtoHandler && !imce.getTbb('sendto')) {
      return imce.addTbb('sendto', {
        title: title || Drupal.t('Select'),
        tooltip: desc || Drupal.t('Use the selected file.'),
        handler: function () {
          imce.runSendtoHandler();
        },
        icon: 'check'
      });
    }
  };

  /**
   * Runs custom sendto handler on the first selected item.
   */
  imce.runSendtoHandler = function (items) {
    var handler = imce.sendtoHandler;
    if (handler) {
      var Item;
      var imgType = imce.sendtoType === 'image';
      items = items || imce.getSelection();
      for (var i in items) {
        if (imce.owns(items, i)) {
          Item = items[i];
          if (imgType ? Item.isImageSource() : Item.isFile) {
            return handler(Item, window);
          }
        }
      }
    }
  };

  /**
   * Default handler for activateFolder event.
   */
  imce.defaultActivateFolder = function (Folder, oldFolder) {
    // Enable/disable toolbar buttons by permission.
    var i;
    var j;
    var Tbb;
    var perm;
    var disabled;
    var buttons = imce.toolbarButtons;
    for (i in buttons) {
      if (!imce.owns(buttons, i)) {
        continue;
      }
      Tbb = buttons[i];
      if (perm = Tbb.permission) {
        perm = perm.split('|');
        disabled = true;
        for (j in perm) {
          if (Folder.getPermission(perm[j])) {
            disabled = false;
            break;
          }
        }
        Tbb.setDisabled(disabled);
      }
    }
  };


  /**
   * Updates the active sort state in the content header.
   */
  imce.updateHeader = function () {
    var newsort = imce.activeFolder.activeSort;
    var oldsort = imce.activeSort || {};
    var el = imce.contentHeaderEl;
    // Check if the sort has changed.
    if (newsort && (newsort.key !== oldsort.key || newsort.desc !== oldsort.desc)) {
      // Deactivate existing column
      if (oldsort.key) {
        $('[data-sort="' + oldsort.key + '"]', el).removeClass('sorted ' + (oldsort.desc ? 'desc' : 'asc'));
      }
      // Activate new column
      $('[data-sort="' + newsort.key + '"]', el).addClass('sorted ' + (newsort.desc ? 'desc' : 'asc'));
      // Store the values
      imce.activeSort = newsort;
    }
  };

  /**
   * Schedule preview updating.
   */
  imce.updatePreview = function () {
    clearTimeout(imce.previewTimer);
    imce.previewTimer = setTimeout(imce.doUpdatePreview, 100);
  };

  /**
   * Set preview of currently selected item.
   */
  imce.doUpdatePreview = function () {
    imce.previewItem(imce.countSelection() === 1 ? imce.getLastSelected() : null);
  };

  /**
   * Sets/clears item preview.
   */
  imce.previewItem = function (Item) {
    var currentItem = imce.previewingItem;
    if (imce.previewingItem = Item) {
      $(imce.previewEl).html(Item.createPreviewEl());
      imce.trigger('previewItem', Item);
    }
    else if (currentItem) {
      imce.previewEl.innerHTML = '';
    }
  };

  /**
   * Schedule status update.
   */
  imce.updateStatus = function () {
    clearTimeout(imce.statusTimer);
    imce.statusTimer = setTimeout(imce.doUpdateStatus, 100);
  };

  /**
   * Updates active folder status.
   */
  imce.doUpdateStatus = function () {
    var Folder = imce.activeFolder;
    if (Folder) {
      $(imce.contentStatusEl).html(Folder.formatStatus());
    }
  };


  /**
   * Returns name filtering regexp.
   */
  imce.getNameFilter = function () {
    var filters = imce.getConf('name_filters', []);
    // Dot files
    if (!imce.getConf('allow_dot_files')) {
      filters.push('^\\.|\\.$');
    }
    return filters.length ? new RegExp(filters.join('|')) : false;
  };

  /**
   * Groups an array of items by parent folder and type.
   */
  imce.groupItems = function (items) {
    var i;
    var Item;
    var path;
    var selected;
    var key;
    var names;
    var group = {};
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      path = Item.parent.getPath();
      selected = group[path] = imce.owns(group, path) ? group[path] : {};
      key = Item.isFolder ? 'subfolders' : 'files';
      names = selected[key] = selected[key] || {};
      names[Item.name] = Item;
    }
    return group;
  };

  /**
   * Checks parent folder permissions of the given items.
   */
  imce.validatePermissions = function (items, filePerm, subfolderPerm) {
    var path;
    var Folder;
    var selected;
    var groups = imce.groupItems(items);
    for (path in groups) {
      if (!imce.owns(groups, path)) {
        continue;
      }
      Folder = imce.getFolder(path);
      selected = groups[path];
      // Check file permission if the selection contains files
      if (selected.files && (filePerm == null || !Folder.getPermission(filePerm))) {
        return false;
      }
      // Check folder permission if the selection contains folders
      if (selected.subfolders && (subfolderPerm == null || !Folder.getPermission(subfolderPerm))) {
        return false;
      }
    }
    return true;
  };

  /**
   * Checks if items contain any predefined folder.
   */
  imce.validatePredefinedPath = function (items) {
    var i;
    var Item;
    var Folder;
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      if (Item.isFolder) {
        if (Folder = Item.hasPredefinedPath()) {
          imce.setMessage(Drupal.t('%path is a predefined path and can not be modified.', {'%path': Folder.getPath()}));
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Validates the number of items.
   */
  imce.validateCount = function (items) {
    if (!items.length) {
      imce.setMessage(Drupal.t('Please select a file.'));
      return false;
    }
    return true;
  };

  /**
   * Validates item extensions against an allowed list.
   */
  imce.validateExtensions = function (items, exts) {
    for (var i in items) {
      if (imce.owns(items, i) && !imce.validateExtension(items[i].ext, exts)) {
        return false;
      }
    }
    return true;
  };

  /**
   * Validates an extension against an allowed list.
   */
  imce.validateExtension = function (ext, exts) {
    if (!ext || $.inArray(ext.toLowerCase(), exts.toLowerCase().split(/[\s,]+/)) === -1) {
      imce.setMessage(Drupal.t('Only files with the following extensions are allowed: %files-allowed.', {'%files-allowed': exts}));
      return false;
    }
    return true;
  };

  /**
   * Validates a file name.
   */
  imce.validateFileName = function (name) {
    // Basic validation
    if (!name || name === '.' || name === '..' || !name.length || name.length > 240) {
      return false;
    }
    // Test name filters
    var regex = imce.getNameFilter();
    if (regex && regex.test(name)) {
      imce.setMessage(Drupal.t('%filename is not allowed.', {'%filename': name}));
      return false;
    }
    // Test chars forbidden in various operating systems.
    if (/^\s|\s$|[\/\\:\*\?\x22<>\|\x00-\x1F]/.test(name)) {
      imce.setMessage(Drupal.t('%filename contains invalid characters. Use only alphanumeric characters for better portability.', {'%filename': name}));
      return false;
    }
    return true;
  };

  /**
   * Validates min/max image dimensions.
   */
  imce.validateDimensions = function (items, width, height) {
    // Check min dimensions
    if (width < 1 || height < 1) {
      return false;
    }
    // Check max dimensions.
    var maxwidth = imce.getConf('maxwidth');
    var maxheight = imce.getConf('maxheight');
    if (maxwidth && width > maxwidth || maxheight && height > maxheight) {
      imce.setMessage(Drupal.t('Image dimensions must be smaller than %dimensions pixels.', {'%dimensions': maxwidth + 'x' + maxwidth}));
      return false;
    }
    return true;
  };

  /**
   * Checks if all the selected items are images.
   */
  imce.validateImageTypes = function (items) {
    var Item = imce.getFirstItem(items, 'width', false);
    if (Item) {
      imce.setMessage(Drupal.t('%name is not an image.', {'%name': Item.name}));
      return false;
    }
    return true;
  };


  /**
   * Keydown event for the file manager.
   */
  imce.eFmKeydown = function (event) {
    return imce.eFireShortcut.call(this, event);
  };

  /**
   * Refresh handler for the file manager.
   */
  imce.eFmRefresh = function () {
    imce.activeFolder.load();
  };

  /**
   * Mousedown event for folder tree.
   */
  imce.eTreeMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for folder tree.
   */
  imce.eTreeTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for folder tree.
   */
  imce.eTreeKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'tree');
  };

  /**
   * Tree shortcut: Enter.
   */
  imce.eTreeEnter = function () {
    imce.activeFolder.open();
  };

  /**
   * Tree shortcut: UP.
   */
  imce.eTreeUp = function (e) {
    var Folder = imce.activeFolder;
    var prvEl;
    var prvFolder;
    if (prvEl = Folder.branchEl.previousSibling) {
      if (prvFolder = prvEl.Folder) {
        while (prvFolder.expanded) {
          if (prvEl = prvFolder.subtreeEl.lastChild) {
            prvFolder = prvEl.Folder;
          }
        }
      }
    }
    else {
      prvFolder = Folder.parent;
    }
    if (prvFolder) {
      prvFolder.activate();
      imce.scrollToEl(prvFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: DOWN.
   */
  imce.eTreeDown = function (e) {
    var Folder = imce.activeFolder;
    var nextEl;
    var nextFolder;
    if (Folder.expanded && (nextEl = Folder.subtreeEl.firstChild)) {
      nextFolder = nextEl.Folder;
    }
    else {
      // noinspection Eslint
      do {
        if (nextEl = Folder.branchEl.nextSibling) {
          nextFolder = nextEl.Folder;
          break;
        }
      } while (Folder = Folder.parent);
    }
    if (nextFolder) {
      nextFolder.activate();
      imce.scrollToEl(nextFolder.branchEl, imce.treeEl);
    }
  };

  /**
   * Tree shortcut: LEFT/RIGHT.
   */
  imce.eTreeLR = function (e) {
    var Folder = imce.activeFolder;
    if (e.keyCode === 39 ^ Folder.expanded) {
      $(Folder.branchToggleEl).click();
    }
  };

  /**
   * Mousedown event for tree resizer.
   */
  imce.eTreeResizerMousedown = function (event) {
    return imce.eTreeResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for tree resizer.
   */
  imce.eTreeResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eTreeResizerDown, this);
  };

  /**
   * Common Down event for tree resizer.
   */
  imce.eTreeResizerDown = function (e, isTouch) {
    this.startX = e.pageX;
    this.startW = $(imce.treeEl).width();
    this.maxW = this.startW + $(imce.contentEl).width();
    imce.bindDragDrop(imce.eTreeResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for tree resizer.
   */
  imce.eTreeResizerDrag = function (e) {
    var el = imce.treeResizerEl;
    $(imce.treeEl).width(Math.min(el.maxW, Math.max(el.startW + e.pageX - el.startX, 0)));
    e.preventDefault();
  };

  /**
   * Mousedown event for content area.
   */
  imce.eContentMousedown = function (event) {
    // Manually focus as the browser default might have been prevented.
    this.focus();
  };

  /**
   * Touchstart event for content area.
   */
  imce.eContentTouchstart = function (event) {
    this.focus();
  };

  /**
   * Keydown event for content area.
   */
  imce.eContentKeydown = function (event) {
    return imce.eFireShortcut.call(this, event, 'content');
  };

  /**
   * Scroll event for content area.
   */
  imce.eContentScroll = function (event) {
    imce.updateContentPositions();
    setTimeout(imce.updateContentPositions);
  };

  /**
   * Click event for content header.
   */
  imce.eContentHeaderClick = function (event) {
    var key;
    var e = imce.eFix(event);
    var Folder = imce.activeFolder;
    var sort = Folder.activeSort || {};
    if (key = e.target.getAttribute('data-sort')) {
      Folder.sortItems(key, key === sort.key ? !sort.desc : sort.desc);
    }
  };

  /**
   * Update content header position on content scroll.
   */
  imce.updateContentPositions = function () {
    var top = imce.contentEl.scrollTop;
    imce.contentHeaderEl.style.top = top + 'px';
    imce.contentStatusEl.style.bottom = -top + 'px';
  };

  /**
   * Content shortcut: ENTER.
   */
  imce.eContentEnter = function (e) {
    var Item = imce.getLastSelected();
    if (Item) {
      Item.dblClick();
    }
  };

  /**
   * Content shortcut: Ctrl+A.
   */
  imce.eContentCtrlA = function (e) {
    imce.selectAll();
  };

  /**
   * Content shortcut: LEFT/RIGHT/UP/DOWN
   */
  imce.eContentArrow = function (e) {
    var Item;
    var i = 0;
    var Folder = imce.activeFolder;
    var key = e.keyCode;
    if (Item = imce.getLastSelected()) {
      i = Folder.indexOf(Item) + (key % 2 ? key - 38 : imce.countElPerRow(Item.el) * (key - 39));
    }
    if (Item = Folder.getItemAt(i)) {
      Item.click(e);
      Item.scrollIntoView();
    }
  };

  /**
   * Mousedown event for body resizer.
   */
  imce.eBodyResizerMousedown = function (event) {
    return imce.eBodyResizerDown.call(this, imce.eFix(event));
  };

  /**
   * Touch start event for body resizer.
   */
  imce.eBodyResizerTouchstart = function (event) {
    return imce.eCommonTouchstart(event, imce.eBodyResizerDown, this);
  };

  /**
   * Common Down event for body resizer.
   */
  imce.eBodyResizerDown = function (e, isTouch) {
    this.startY = e.pageY;
    this.startH = $(imce.bodyEl).height();
    this.maxH = this.startH + $(imce.previewEl).height();
    imce.bindDragDrop(imce.eBodyResizerDrag, null, null, isTouch);
    return false;
  };

  /**
   * Drag event for body resizer.
   */
  imce.eBodyResizerDrag = function (e) {
    var el = imce.bodyResizerEl;
    var bodyH = Math.min(Math.max(el.startH + e.pageY - el.startY, 0), el.maxH);
    $(imce.bodyEl).height(bodyH);
    $(imce.previewEl).height(el.maxH - bodyH);
    e.preventDefault();
  };

  /**
   * Beforeunload event for window.
   */
  imce.eWinBeforeunload = function (e) {
    // Store active sort.
    var data = {};
    if (data.activeSort = imce.activeSort) {
      imce.trigger('storeLocalData', data);
      try {
        localStorage.setItem('imce.local', JSON.stringify(data));
      }
      catch (err) {
        imce.delayError(err);
      }
    }
  };

  /**
   * Resize event for window.
   */
  imce.eWinResize = function (e) {
    var pdiff;
    var diff = imce.getWindowSize().height - imce.fmEl.offsetHeight;
    // Distribute the excess space to the body and preview elements.
    if (diff) {
      var $bodyEl = $(imce.bodyEl);
      var $prvEl = $(imce.previewEl);
      if ($prvEl[0].offsetHeight) {
        pdiff = parseInt(diff / 2);
        diff -= pdiff;
        $prvEl.height($prvEl.height() + pdiff);
      }
      $bodyEl.height($bodyEl.height() + diff);
    }
  };


  /**
   * Binds an handler by type.
   */
  imce.bind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (!handlers) {
      handlers = events[type] = {};
    }
    handlers['' + handler] = handler;
  };

  /**
   * Unbinds an handler by type.
   */
  imce.unbind = function (type, handler) {
    var events = imce.events;
    var handlers = events[type];
    if (handlers) {
      if (1 in arguments) {
        delete handlers['' + handler];
      }
      else {
        delete events[type];
      }
    }
  };

  /**
   * Triggers handlers by type.
   */
  imce.trigger = function (type) {
    var i;
    var handler;
    var handlers = imce.events[type];
    var ret = [];
    if (handlers) {
      for (i in handlers) {
        if (handler = handlers[i]) {
          if (handler.apply) {
            ret.push(handler.apply(imce, Array.prototype.slice.call(arguments, 1)));
          }
        }
      }
    }
    return ret;
  };


  /**
   * Adds a shortcut handler to an area.
   */
  imce.addShortcut = function (shortcut, handler, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      shortcuts[shortcut.toUpperCase()] = handler;
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      return shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Removes a shortcut handler.
   */
  imce.removeShortcut = function (shortcut, area) {
    var shortcuts;
    if (shortcuts = imce.getAreaShortcuts(area)) {
      delete shortcuts[shortcut.toUpperCase()];
    }
  };

  /**
   * Executes a shortcut handler.
   * Returns true if shortcut exists and is executed successfully.
   */
  imce.fireShortcut = function (shortcut, area) {
    var handler = imce.getShortcut(shortcut, area);
    if (handler) {
      // DOM element
      if (handler.click) {
        handler.click();
        return true;
      }
      // Callback
      if (handler.apply) {
        // Shortcuts returning false are considered disabled.
        return handler.apply(this, Array.prototype.slice.call(arguments, 2)) !== false;
      }
    }
  };

  /**
   * Returns a shortcut handler.
   */
  imce.getAreaShortcuts = function (area) {
    if (!area) {
      area = 'fm';
    }
    return imce.shortcuts[area];
  };


  /**
   * Builds a shortcut string from an event.
   */
  imce.eBuildShortcut = function (e) {
    var symbol;
    var key = e.keyCode;
    var shortcut = '';
    if (key && (symbol = imce.getKeySymbols(key))) {
      if (e.ctrlKey) {
        shortcut += 'CTRL+';
      }
      if (e.altKey) {
        shortcut += 'ALT+';
      }
      if (e.shiftKey) {
        shortcut += 'SHIFT+';
      }
      shortcut += symbol;
    }
    return shortcut;
  };

  /**
   * Event helper for imce shortcut firing.
   */
  imce.eFireShortcut = function (event, area) {
    var e = event || window.event;
    var shortcut = imce.eBuildShortcut(e);
    // Prevent default if shortcut is executed.
    if (shortcut) {
      e = $.event.fix(e);
      if (imce.fireShortcut.call(this, shortcut, area, e)) {
        e.stopPropagation();
        return false;
      }
    }
  };

  /**
   * Returns key symbols allowed in shortcuts.
   */
  imce.getKeySymbols = function (key) {
    var i;
    var symbols = imce.keySymbols;
    if (!symbols) {
      // Custom keys
      symbols = imce.keySymbols = {
        8: 'BACKSPACE',
        9: 'TAB',
        13: 'ENTER',
        27: 'ESC',
        32: 'SPACE',
        37: 'LEFT',
        38: 'UP',
        39: 'RIGHT',
        40: 'DOWN',
        46: 'DEL'
      };
      // Add numbers
      for (i = 0; i < 10; i++) {
        symbols[48 + i] = '' + i;
      }
      // Add letters
      for (i = 65; i < 91; i++) {
        symbols[i] = String.fromCharCode(i);
      }
      // Add function keys
      for (i = 1; i < 13; i++) {
        symbols[111 + i] = 'F' + i;
      }
    }
    return (0 in arguments) ? symbols[key] : symbols;
  };


  /**
   * Creates an ajax request for a specific operation.
   */
  imce.ajax = function (jsop, opt) {
    return $.ajax(imce.ajaxPrepare(jsop, opt));
  };

  /**
   * Prepares ajax options.
   */
  imce.ajaxPrepare = function (jsop, opt) {
    // Prepare data
    var path;
    var Folder = opt && opt.activeFolder != null ? opt.activeFolder : imce.activeFolder;
    var data = {jsop: jsop, token: imce.getConf('token')};
    if (Folder) {
      if (path = Folder.getPath()) {
        data.active_path = path;
      }
    }
    // Extend defaults
    return $.extend(true, imce.ajaxDefaults(), {data: data, activeFolder: Folder}, opt);
  };

  /**
   * Returns ajax default options.
   */
  imce.ajaxDefaults = function () {
    return {
      url: imce.getConf('ajax_url'),
      type: 'POST',
      dataType: 'json',
      beforeSend: imce.ajaxBeforeSend,
      success: imce.ajaxSuccess,
      error: imce.ajaxError,
      complete: imce.ajaxComplete
    };
  };

  /**
   * Creates an ajax request for a specific operation on the given items.
   */
  imce.ajaxItems = function (jsop, items, opt) {
    return imce.ajax(jsop, $.extend(true, imce.ajaxItemsOpt(items), opt));
  };

  /**
   * Creates an ajax options object including the items as the selection data.
   */
  imce.ajaxItemsOpt = function (items) {
    return {data: {selection: imce.getItemPaths(items)}};
  };

  /**
   * Default before send handler.
   */
  imce.ajaxBeforeSend = function (xhr, opt) {
    var handler;
    var Folder;
    if (handler = opt.customBeforeSend) {
      if (handler.apply(this, arguments) === false) {
        opt.activeFolder = null;
        return false;
      }
    }
    if (Folder = opt.activeFolder) {
      Folder.setBusy(true);
    }
  };

  /**
   * Default ajax success handler.
   */
  imce.ajaxSuccess = function (response, status) {
    var handler;
    var opt = this;
    // Make the response available in complete handlers.
    opt.response = response;
    imce.ajaxProcessResponse(response);
    if (handler = opt.customSuccess) {
      handler.apply(opt, arguments);
    }
  };

  /**
   * Default ajax complete handler.
   */
  imce.ajaxComplete = function (xhr, status) {
    var Folder;
    var handler;
    var opt = this;
    if (Folder = opt.activeFolder) {
      Folder.setBusy(false);
    }
    if (handler = opt.customComplete) {
      handler.apply(opt, arguments);
    }
    opt.response = opt.activeFolder = null;
  };

  /**
   * Default ajax error handler.
   */
  imce.ajaxError = function (xhr, status, e) {
    imce.setMessage('<pre class="imce-ajax-error">' + Drupal.checkPlain(imce.ajaxErrorMessage(xhr, this.url)) + '</pre>');
  };

  /**
   * Processes the ajax response.
   */
  imce.ajaxProcessResponse = function (response) {
    if (response) {
      imce.ajaxProcessRemoved(response);
      imce.ajaxProcessAdded(response);
      imce.ajaxProcessMessages(response);
    }
  };

  /**
   * Processes the added items in the response.
   */
  imce.ajaxProcessAdded = function (response) {
    var path;
    var Folder;
    var added;
    if (added = response.added) {
      for (path in added) {
        if (Folder = imce.addFolder(path)) {
          Folder.addContent(added[path], true);
          imce.contentEl.focus();
        }
      }
    }
  };

  /**
   * Processes the removed items in the response.
   */
  imce.ajaxProcessRemoved = function (response) {
    var i;
    var Item;
    var paths = response.removed;
    if (paths) {
      for (i in paths) {
        if (Item = imce.getItem(paths[i])) {
          Item.remove();
        }
      }
    }
  };

  /**
   * Processes the messages in the response.
   */
  imce.ajaxProcessMessages = function (response) {
    var i;
    var type;
    var msgs = response.messages;
    if (msgs) {
      for (type in msgs) {
        if (imce.owns(msgs, type)) {
          for (i in msgs[type]) {
            if (msgs[type].hasOwnProperty(i)) {
              imce.setMessage(msgs[type][i], type);
            }
          }
        }
      }
    }
  };

  /**
   * Generates an ajax error message.
   */
  imce.ajaxErrorMessage = function (xhr, url) {
    var msg = Drupal.t('An AJAX HTTP error occurred.');
    msg += '\n' + Drupal.t('Path: !uri', {'!uri': url});
    msg += '\n' + Drupal.t('HTTP Result Code: !status', {'!status': xhr.status || 0});
    msg += '\n' + Drupal.t('StatusText: !statusText', {'!statusText': xhr.statusText || 'N/A'});
    msg += '\n' + Drupal.t('ResponseText: !responseText', {'!responseText': xhr.responseText || 'N/A'});
    return msg;
  };

  /**
   * Returns an array of item paths.
   */
  imce.getItemPaths = function (items) {
    return $.map(items, imce.getItemPath);
  };

  /**
   * Returns the path of an item.
   */
  imce.getItemPath = function (Item) {
    return Item.getPath();
  };


  /**
   * Set a status message.
   */
  imce.setMessage = function (msg, type) {
    if (!type) {
      type = 'error';
    }
    var mq = imce.messageQueue;
    var len = mq.length;
    var msgId = msg + ':' + type;
    // Skip if it's identical to the last message
    if (len && mq[len - 1].msgId === msgId) {
      return false;
    }
    // Add the message
    mq[len] = imce.createMessageEl(msg, type);
    mq[len].msgId = msgId;
    // Schedule the processing at a later time to queue new messages.
    if (!imce.pmqScheduled) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 100);
    }
    return false;
  };

  /**
   * Process message queue.
   */
  imce.processMessageQueue = function () {
    var mq = imce.messageQueue;
    if (mq.length) {
      // Display all messages
      $(imce.createMessagePopupEl()).html(mq).fadeIn(200);
      // Empty array.
      mq.length = 0;
      // Mousedown close
      $(document).bind('mousedown', imce.eMPopDocMousedown);
      // Auto close
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2500);
    }
  };

  /**
   * Closes currently open message popup.
   */
  imce.mPopClose = function () {
    // Time up but still hovering. Do not close. A new timer will be set on mouseout.
    if (imce.mPopHovering) {
      imce.mPopCloseTimerUp = 1;
      return imce.mPopCloseTimerUp;
    }
    // Time up or mousedown
    clearTimeout(imce.mPopCloseTimer);
    imce.mPopCloseTimerUp = 0;
    $(document).unbind('mousedown', imce.eMPopDocMousedown);
    $(imce.messagePopupEl).fadeOut(400, imce.processMessageQueueNext);
  };

  /**
   * Continue processing the remaining messages.
   */
  imce.processMessageQueueNext = function () {
    imce.pmqScheduled = 0;
    if (imce.messageQueue.length) {
      imce.pmqScheduled = setTimeout(imce.processMessageQueue, 250);
    }
  };

  /**
   * Mouseover event for message popup.
   */
  imce.eMPopMouseenter = function (e) {
    imce.mPopHovering = 1;
    // Clear the shorter timer set on mouseleave
    if (imce.mPopCloseTimerUp) {
      clearTimeout(imce.mPopCloseTimer);
    }
  };

  /**
   * Mouseout event for message popup.
   */
  imce.eMPopMouseleave = function (e) {
    imce.mPopHovering = 0;
    // Set a shorter close timer if the long time is up
    if (imce.mPopCloseTimerUp) {
      imce.mPopCloseTimer = setTimeout(imce.mPopClose, 2000);
    }
  };

  /**
   * Mousedown event for document in order to close message popup.
   */
  imce.eMPopDocMousedown = function (e) {
    // Close the popup if the mousedown is outside of it.
    if (!imce.mPopHovering) {
      imce.mPopClose();
    }
  };

  /**
   * Creates a message element.
   */
  imce.createMessageEl = function (msg, type) {
    var el = imce.createEl('<div class="imce-message imce-ficon"><div class="imce-message-content"></div></div>');
    el.className += ' ' + type;
    el.firstChild.innerHTML = msg;
    return el;
  };

  /**
   * Creates the message popup element.
   */
  imce.createMessagePopupEl = function () {
    var el = imce.messagePopupEl;
    if (!el) {
      el = imce.messagePopupEl = imce.createLayer('imce-message-popup', imce.fmEl);
      $(el).hover(imce.eMPopMouseenter, imce.eMPopMouseleave);
    }
    return el;
  };


  /**
   * Checks a permission in a folder conf.
   */
  imce.permissionInFolderConf = function (permission, folderConf) {
    var permissions = folderConf && folderConf.permissions;
    return !!(permissions && ((permission in permissions) ? permissions[permission] : permissions.all));
  };

  /**
   * Checks if a permission exists in any of the predefined folders.
   */
  imce.hasPermission = function (permission, conf) {
    var i;
    var folders = (conf || imce.conf).folders;
    if (folders) {
      for (i in folders) {
        if (imce.permissionInFolderConf(permission, folders[i])) {
          return true;
        }
      }
    }
    return false;
  };

  /**
   * Sorting helpers.
   */
  imce.sortText = function (a, b) {
    return a.toLowerCase() < b.toLowerCase() ? -1 : 1;
  };
  imce.sortNum = function (a, b) {
    return (a || 0) - (b || 0);
  };
  imce.sortNumericProperty = function (a, b, prop) {
    // Do not change sort within folders
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortNum(a[prop] || 0, b[prop] || 0);
    }
    return result;
  };
  imce.sortBranchName = function (a, b) {
    return imce.sortText(a.name, b.name);
  };

  /**
   * Property sorters.
   */
  imce.sorters.name = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = imce.sortText(a.name, b.name);
    }
    return result;
  };
  imce.sorters.date = function (a, b) {
    return imce.sortNumericProperty(a, b, 'date');
  };
  imce.sorters.size = function (a, b) {
    return imce.sortNumericProperty(a, b, 'size');
  };
  imce.sorters.width = function (a, b) {
    return imce.sortNumericProperty(a, b, 'width');
  };
  imce.sorters.height = function (a, b) {
    return imce.sortNumericProperty(a, b, 'height');
  };
  imce.sorters.ext = function (a, b) {
    var result = (a.isFolder ? -1 : 1);
    if (a.isFolder === b.isFolder) {
      result = (a.isFolder ? 0 : imce.sortText(a.ext || '', b.ext || ''));
    }
    return result;
  };

  /**
   * Splits a path into dirpath and filename.
   */
  imce.splitPath = function (path) {
    if (typeof path === 'string' && path !== '') {
      var parts = path.split('/');
      var filename = parts.pop();
      var dirpath = parts.join('/');
      if (filename !== '') {
        return [dirpath === '' ? '.' : dirpath, filename];
      }
    }
  };

  /**
   * Creates a file path by joining a folder path and a filename.
   */
  imce.joinPaths = function (dirpath, filename) {
    if (dirpath === '.') {
      return filename;
    }
    if (filename === '.') {
      return dirpath;
    }
    if (dirpath.substr(-1) !== '/') {
      dirpath += '/';
    }
    return dirpath + filename;
  };

  /**
   * Returns query parameters from the current URL.
   */
  imce.getQuery = function (name) {
    var i;
    var part;
    var parts;
    var str;
    var query = imce.query;
    if (!query) {
      query = imce.query = {};
      if (str = location.search) {
        parts = str.substr(1).split('&');
        for (i in parts) {
          if (imce.owns(parts, i)) {
            part = parts[i].split('=');
            query[imce.decode(part[0])] = part[1] ? imce.decode(part[1]) : '';
          }
        }
      }
    }
    return name ? query[name] : query;
  };

  /**
   * Wrapper around decodeURIComponent.
   * Avoids malformed uri exception.
   */
  imce.decode = function (str) {
    try {
      str = decodeURIComponent(str);
    }
    catch (err) {
      imce.delayError(err);
    }
    return str;
  };

  /**
   * Throws an error after a minimum delay.
   */
  imce.delayError = function (err) {
    setTimeout(function () {
      throw err;
    });
  };

  /**
   * Formats item date.
   */
  imce.formatDate = function (timestamp, dayOnly) {
    var D;
    var p0;
    var ret = '';
    if (timestamp) {
      D = new Date(timestamp * 1000);
      p0 = imce.prependZero;
      ret = D.getFullYear() + '-' + p0(D.getMonth() + 1) + '-' + p0(D.getDate());
      if (!dayOnly) {
        ret += ' ' + p0(D.getHours()) + ':' + p0(D.getMinutes());
      }
    }
    return ret;
  };

  /**
   * Formats item size.
   */
  imce.formatSize = function (size) {
    if (size == null) {
      return '';
    }
    if (!size || size < 100) {
      return Drupal.formatPlural(size, '1 byte', '@count bytes', {'@count': size || 0});
    }
    if (size < 1048576) {
      return Drupal.t('@size KB', {'@size': imce.round(size / 1024, 1)});
    }
    return Drupal.t('@size MB', {'@size': imce.round(size / 1048576, 1)});
  };

  /**
   * Formats content items status.
   */
  imce.formatItemsStatus = function (count, size) {
    return Drupal.t('!items (!size)', {
      '!items': Drupal.formatPlural(count, '1 item', '@count items'),
      '!size': imce.formatSize(size)
    });
  };

  /**
   * Prepends 0 to numbers smaller than 10.
   */
  imce.prependZero = function (num) {
    return num < 10 ? '0' + num : num;
  };

  /**
   * Rounds a number to the given precision
   */
  imce.round = function (num, precision) {
    var n = Math.pow(10, precision);
    return Math.round(num * n) / n;
  };

  /**
   * Returns the extension of a file name.
   */
  imce.getExt = function (name) {
    var pos = name.lastIndexOf('.');
    return pos === -1 ? '' : name.substr(pos + 1);
  };

  /**
   * Checks if an object owns a property.
   */
  imce.owns = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };

  /**
   * Returns the first item that has a property.
   */
  imce.getFirstItem = function (items, prop, state) {
    var i;
    var item;
    if (typeof state === "undefined") {
      state = true;
    }
    for (i in items) {
      if (imce.owns(items, i)) {
        item = items[i];
        if (!prop || (item[prop] ? state : !state)) {
          return item;
        }
      }
    }
  };

  /**
   * Resolves a string to a handler under the given scope.
   */
  imce.resolveHandler = function (str, scope) {
    if (!str) {
      return;
    }
    var i;
    var obj = scope || window;
    var parts = str.split('.');
    var len = parts.length;
    for (i = 0; i < len && (obj = obj[parts[i]]); i++) {
      // empty
    }
    return i === len && obj && obj.call && obj.apply ? obj : false;
  };

  /**
   * Creates a DOM element from html string.
   */
  imce.createEl = function (html) {
    var el;
    var div = imce._div;
    if (!div) {
      div = imce._div = document.createElement('div');
    }
    div.innerHTML = html;
    el = div.firstChild;
    div.removeChild(el);
    return el;
  };

  /**
   * Creates a layer element.
   */
  imce.createLayer = function (cname, parent) {
    var layer = imce.createEl('<div class="imce-layer"></div>');
    if (cname) {
      layer.className += ' ' + cname;
    }
    if (parent !== false) {
      (parent || document.body).appendChild(layer);
    }
    return layer;
  };

  /**
   * Removes element without removing events.
   */
  imce.removeEl = function (el) {
    var parent = el.parentNode;
    if (parent) {
      parent.removeChild(el);
    }
  };

  /**
   * Returns window inner size.
   */
  imce.getWindowSize = function () {
    return {
      width: window.innerWidth || document.documentElement.clientWidth,
      height: window.innerHeight || document.documentElement.clientHeight
    };
  };

  /**
   * Returns scroll values of the window.
   */
  imce.getWindowScroll = function () {
    if (typeof window.pageXOffset === "undefined") {
      var el = document.documentElement;
      return {left: el.scrollLeft, top: el.scrollTop};
    }
    return {left: window.pageXOffset, top: window.pageYOffset};
  };

  /**
   * Fixes and converts an event into jQuery event.
   */
  imce.eFix = function (event) {
    return $.event.fix(event || window.event);
  };

  /**
   * Scroll an element into view inside the scrollable wrapper.
   */
  imce.scrollToEl = function (el, wrpEl, diffTop, diffBottom) {
    if (el.offsetWidth && wrpEl.scrollHeight > wrpEl.clientHeight) {
      var elTop = $(el).offset().top;
      var elBottom = elTop + el.offsetHeight;
      var wrpTop = $(wrpEl).offset().top;
      var wrpBottom = wrpTop + wrpEl.offsetHeight;
      wrpTop += diffTop || 0;
      wrpBottom -= diffBottom || 0;
      // Check top positions
      if (elTop < wrpTop) {
        wrpEl.scrollTop -= wrpTop - elTop + 10;
      }
      else if (wrpBottom < elBottom) {
        // Consider el height might be bigger than the wrapper height.
        // Get the minimum among top space and required scroll.
        wrpEl.scrollTop += Math.min(elBottom - wrpBottom + 10, elTop - wrpTop - 10);
      }
    }
  };

  /**
   * Returns number of the elements that can fit in a row inside the parent.
   */
  imce.countElPerRow = function (el) {
    return Math.max(1, parseInt(el.parentNode.clientWidth / $(el).outerWidth(true)));
  };

  /**
   * Makes the element stay inside window boundaries.
   */
  imce.fixPosition = function (el) {
    var pos = $(el).offset();
    var winSize = imce.getWindowSize();
    var winScroll = imce.getWindowScroll();
    var scrollbar = 18;
    var extraX = pos.left - winScroll.left + el.offsetWidth - winSize.width + scrollbar;
    var extraY = pos.top - winScroll.top + el.offsetHeight - winSize.height + scrollbar;
    // Shift to left
    if (extraX > 0) {
      el.style.left = Math.max(0, pos.left - extraX) + 'px';
    }
    // Shift to top
    if (extraY > 0) {
      el.style.top = Math.max(0, pos.top - extraY) + 'px';
    }
  };


  /**
   * Bind drag drop callbacks to the document
   */
  imce.bindDragDrop = function (drag, drop, data, isTouch) {
    var edata = {drag: drag, drop: drop, data: data, isTouch: isTouch};
    $(document).bind(isTouch ? 'touchmove' : 'mousemove', edata, imce.eDocDrag).bind(isTouch ? 'touchend' : 'mouseup', edata, imce.eDocDrop);
  };

  /**
   * Default drag event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrag = function (e) {
    var edata = e.data;
    // Call custom drag event if set.
    if (edata.drag) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drag.call(this, e);
    }
  };

  /**
   * Default drop event for document which is set by imce.bindDragDrop
   */
  imce.eDocDrop = function (e) {
    var edata = e.data;
    $(document).unbind(edata.isTouch ? 'touchmove' : 'mousemove', imce.eDocDrag).unbind(edata.isTouch ? 'touchend' : 'mouseup', imce.eDocDrop);
    // Call custom drop event if set.
    if (edata.drop) {
      // Fix touch event
      if (edata.isTouch) {
        e = imce.eTouchFix(e, e.originalEvent.changedTouches[0]);
      }
      return edata.drop.call(this, e);
    }
  };

  /**
   * Fix touch events
   */
  imce.eTouchFix = function (e, touch) {
    // Make sure e is a jquery event object that is writable.
    e = $.event.fix(e);
    if (touch && typeof touch.pageX !== "undefined") {
      e.pageX = touch.pageX;
      e.pageY = touch.pageY;
      e.clientX = touch.clientX;
      e.clientY = touch.clientY;
    }
    return e;
  };

  /**
   * Common touchstart event.
   */
  imce.eCommonTouchstart = function (event, callback, context) {
    var touch;
    var touches = event.changedTouches;
    // Skip event for multi-touch
    if (touches && (touch = touches[0]) && !touches[1]) {
      if (callback && callback.call) {
        return callback.call(context || this, imce.eTouchFix(event, touch), true);
      }
      // Prevent default.
      return false;
    }
  };

})(jQuery, Drupal);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Item object.
   */

  /**
   * Imce Item.
   */
  imce.Item = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype.
   */
  var Item = imce.Item.prototype;

  /**
   * Constructs Imce Item.
   */
  Item.construct = function (name) {
    this.createEl();
    this.setName(name);
  };

  /**
   * Creates Item elements.
   */
  Item.createEl = function () {
    var el;
    var children;
    var Item = this;
    if (!Item.el) {
      el = Item.el = imce.createEl('<div class="imce-item"><div class="imce-item-date"></div><div class="imce-item-height"></div><div class="imce-item-width"></div><div class="imce-item-size"></div><div class="imce-item-icon imce-ficon"></div><div class="imce-item-name"></div></div>');
      el.onmousedown = imce.eItemMousedown;
      el.ondblclick = imce.eItemDblclick;
      el.Item = Item;
      children = el.children;
      Item.dateEl = children[0];
      Item.heightEl = children[1];
      Item.widthEl = children[2];
      Item.sizeEl = children[3];
      Item.iconEl = children[4];
      Item.nameEl = children[5];
    }
  };

  /**
   * Appends the item to a parent.
   */
  Item.appendTo = function (parent) {
    parent.appendItem(this);
  };

  /**
   * Removes the item.
   */
  Item.remove = function (shallow) {
    if (this.parent) {
      this.parent.removeItem(this, shallow);
    }
  };

  /**
   * Item click handler.
   */
  Item.click = function (e) {
    var Item = this;
    if (e) {
      // Range select
      if (e.shiftKey) {
        var Folder = imce.activeFolder;
        var lastItem = imce.getLastSelected();
        var start = lastItem ? Folder.indexOf(lastItem) : -1;
        var end = Folder.indexOf(Item);
        var step = start < end ? 1 : -1;
        while (start !== end) {
          Folder.getItemAt(start += step).select();
        }
        return;
      }
      // Toggle select
      if (e.ctrlKey) {
        return Item.toggleSelect();
      }
    }
    var i;
    var selection = imce.getSelection();
    for (i in selection) {
      if (imce.owns(selection, i) && selection[i] !== Item) {
        selection[i].deselect();
      }
    }
    Item.select();
  };

  /**
   * Double click handler.
   */
  Item.dblClick = function () {
    if (imce.sendtoHandler) {
      imce.runSendtoHandler([this]);
    }
    else {
      this.open();
    }
  };

  /**
   * Opens item.
   */
  Item.open = function () {
    var url = this.getUrl();
    if (url) {
      window.open(url);
    }
  };

  /**
   * Selects item.
   */
  Item.select = function () {
    imce.selectItem(this);
  };

  /**
   * Deselects item.
   */
  Item.deselect = function () {
    imce.deselectItem(this);
  };

  /**
   * Toggles select.
   */
  Item.toggleSelect = function () {
    if (this.selected) {
      this.deselect();
    }
    else {
      this.select();
    }
  };

  /**
   * Sets/unsets the item busy.
   */
  Item.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Sets/unsets the item disabled.
   */
  Item.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Checks if the item is ready for an operation.
   */
  Item.isReady = function () {
    return !this.disabled && !this.busy;
  };

  /**
   * Returns item path relative to the root.
   */
  Item.getPath = function () {
    var parent;
    var path = this.path;
    if (path) {
      return path;
    }
    if (parent = this.parent) {
      if (path = parent.getPath()) {
        return imce.joinPaths(path, this.name);
      }
    }
  };

  /**
   * Returns item uri.
   */
  Item.getUri = function () {
    var path = this.getPath();
    if (path) {
      return imce.joinPaths(imce.getConf('root_uri', '/'), path);
    }
  };

  /**
   * Returns item url.
   * Uncached parameter allows unique urls per size+date which is useful to display resized/cropped images
   */
  Item.getUrl = function (absolute, uncached) {
    var rootUrl;
    var url = '';
    if (rootUrl = imce.getConf('root_url')) {
      url = imce.joinPaths(rootUrl, encodeURIComponent(this.getPath()).replace(/%2F/g, '/'));
      if (absolute && url.charAt(0) === '/' && url.charAt(1) !== '/') {
        url = location.protocol + '//' + location.host + url;
      }
      if (uncached) {
        url += (url.indexOf('?') === -1 ? '?' : '&') + ('s' + this.size) + ('d' + this.date);
      }
    }
    return url;
  };

  /**
   * Formats item uri.
   */
  Item.formatUri = function () {
    return Drupal.checkPlain(this.getUri());
  };

  /**
   * Formats item path.
   */
  Item.formatPath = function () {
    return Drupal.checkPlain(this.path === '.' ? this.name : this.getPath());
  };

  /**
   * Formats item name.
   */
  Item.formatName = function () {
    return Drupal.checkPlain(this.name);
  };

  /**
   * Formats item size.
   */
  Item.formatSize = function () {
    return imce.formatSize(this.size);
  };

  /**
   * Formats item date.
   */
  Item.formatDate = function (dayOnly) {
    return imce.formatDate(this.date, dayOnly);
  };

  /**
   * Formats item width.
   */
  Item.formatWidth = function () {
    return this.width ? this.width * 1 + '' : '';
  };

  /**
   * Formats item height.
   */
  Item.formatHeight = function () {
    return this.height ? this.height * 1 + '' : '';
  };

  /**
   * Formats item dimensions.
   */
  Item.formatDimensions = function () {
    return this.width ? this.width * 1 + 'x' + this.height * 1 : '';
  };

  /**
   * Adds new item properties.
   * Fires property change events for changed properties.
   */
  Item.extend = function (props) {
    if (props) {
      for (var i in props) {
        if (!imce.owns(props, i)) {
          continue;
        }
        this.setProperty(i, props[i]);
      }
    }
  };

  /**
   * Sets property value and trigger change events.
   */
  Item.setProperty = function (prop, val) {
    var oldval = this[prop];
    if (oldval !== val) {
      this[prop] = val;
      this.triggerPropertyChange(prop, oldval);
    }
  };

  /**
   * Sets item name.
   */
  Item.setName = function (name) {
    this.setProperty('name', name);
  };

  /**
   * Triggers property change handlers.
   */
  Item.triggerPropertyChange = function (prop, oldval) {
    var method = 'on' + prop.charAt(0).toUpperCase() + prop.substr(1) + 'Change';
    if (this[method]) {
      this[method](oldval);
      if (this === imce.previewingItem) {
        imce.updatePreview();
      }
    }
  };

  /**
   * Name change handler.
   */
  Item.onNameChange = function (oldname) {
    var Item = this;
    Item.nameEl.innerHTML = Item.formatName();
    if (Item.parent) {
      Item.parent.onItemNameChange(Item, oldname);
    }
  };

  /**
   * Size change handler.
   */
  Item.onSizeChange = function (oldval) {
    this.sizeEl.innerHTML = this.formatSize();
  };

  /**
   * Date change handler.
   */
  Item.onDateChange = function (oldval) {
    this.dateEl.innerHTML = this.formatDate(true);
    this.dateEl.title = this.formatDate();
  };

  /**
   * Width change handler.
   */
  Item.onWidthChange = function (oldval) {
    this.widthEl.innerHTML = this.formatWidth();
  };

  /**
   * Height change handler.
   */
  Item.onHeightChange = function (oldval) {
    this.heightEl.innerHTML = this.formatHeight();
  };


  /**
   * Creates preview element.
   */
  Item.createPreviewEl = function () {
    var el;
    var Item = this;
    var prvEl = imce.createEl('<div class="imce-item-preview"></div>');
    // Info
    var infoEl = imce.createEl('<div class="imce-preview-info"></div>');
    prvEl.appendChild(infoEl);
    // Folder
    if (Item.isFolder) {
      infoEl.appendChild(imce.createEl('<div class="path">' + Item.formatUri() + '</div>'));
      prvEl.className += ' folder';
    }
    // File
    else {
      var url = Item.getUrl(true);
      infoEl.appendChild(imce.createEl('<div class="url"><a href="' + url + '" target="_blank">' + url + '</a></div>'));
    }
    // Size
    if (Item.size) {
      infoEl.appendChild(imce.createEl('<div class="size">' + Item.formatSize() + '</div>'));
    }
    // Dimensions
    if (Item.width) {
      infoEl.appendChild(imce.createEl('<div class="dimensions">' + Item.formatDimensions() + '</div>'));
    }
    // Date
    if (Item.date) {
      infoEl.appendChild(imce.createEl('<div class="date">' + Item.formatDate() + '</div>'));
    }
    // Image
    if (Item.isImageSource() && imce.getConf('preview_images', 1)) {
      el = imce.createEl('<div class="imce-preview-image"><img src="' + Item.getUrl(false, true) + '"></div>');
      prvEl.appendChild(el);
      prvEl.className += ' image';
      el.firstChild.onclick = imce.ePrvImgClick;
    }
    return prvEl;
  };

  /**
   * Sets a state by name.
   */
  Item.setState = function (name) {
    var el;
    var Item = this;
    if (!Item[name]) {
      Item[name] = true;
      $(Item.el).addClass(name);
      if (el = Item.branchEl) {
        $(el).addClass(name);
      }
    }
  };

  /**
   * Unsets a state by name.
   */
  Item.unsetState = function (name) {
    var el;
    var Item = this;
    if (Item[name]) {
      Item[name] = false;
      $(Item.el).removeClass(name);
      if (el = Item.branchEl) {
        $(el).removeClass(name);
      }
    }
  };

  /**
   * Toggles a state by name.
   */
  Item.toggleState = function (name, state) {
    if (state == null) {
      state = !this[name];
    }
    this[state ? 'setState' : 'unsetState'](name);
  };

  /**
   * Scroll the item element into view.
   */
  Item.scrollIntoView = function () {
    imce.scrollToEl(this.el, imce.contentEl, imce.contentHeaderEl.offsetHeight, imce.contentStatusEl.offsetHeight);
  };

  /**
   * Check if the item can be used as an image source.
   */
  Item.isImageSource = function() {
    return this.width || this.ext && this.ext.toLowerCase() === 'svg';
  };


  /**
   * Mousedown event for items.
   */
  imce.eItemMousedown = function (event) {
    var e = imce.eFix(event);
    this.Item.click(e);
    return !(e.ctrlKey || e.shiftKey);
  };

  /**
   * Double-click event for items.
   */
  imce.eItemDblclick = function (event) {
    this.Item.dblClick();
    return false;
  };

  /**
   * Click event for preview image.
   */
  imce.ePrvImgClick = function () {
    var Item = imce.previewingItem;
    if (Item) {
      Item.dblClick();
    }
    return false;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce File object.
   */

  /**
   * File.
   */
  imce.File = function (name) {
    this.construct(name);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * File prototype extends Item prototype.
   */
  var File = $.extend(imce.File.prototype, ItemProto);

  /**
   * Initialize the file object.
   */
  File.construct = function (name) {
    this.isFile = true;
    this.type = 'file';
    ItemProto.construct.apply(this, arguments);
  };

  /**
   * Initialize DOM elements.
   */
  File.createEl = function () {
    if (!this.el) {
      ItemProto.createEl.apply(this, arguments);
      this.el.className += ' file';
    }
  };

  /**
   * Name change handler.
   */
  File.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    // Get the new extension
    var File = this;
    var newext = imce.getExt(File.name);
    // Check if the extension has changed
    if (File.ext !== newext) {
      // Remove the classname of old ext
      if (File.ext != null) {
        if (File.ext) {
          $(File.el).removeClass('file-' + File.ext.toLowerCase());
        }
      }
      // Add the classname for new ext
      if (newext) {
        File.el.className += ' file-' + newext.toLowerCase();
      }
      File.ext = newext;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Folder object.
   */

  /**
   * Folder.
   */
  imce.Folder = function (name, conf) {
    this.construct(name, conf);
  };

  /**
   * Item prototype
   */
  var ItemProto = imce.Item.prototype;

  /**
   * Folder prototype extends Item prototype.
   */
  var Folder = $.extend(imce.Folder.prototype, ItemProto);

  /**
   * Constructs the Folder.
   */
  Folder.construct = function (name, conf) {
    var Folder = this;
    Folder.isFolder = true;
    Folder.type = 'folder';
    Folder.items = [];
    Folder.files = {};
    Folder.subfolders = {};
    ItemProto.construct.apply(Folder, arguments);
    Folder.setConf(conf);
  };

  /**
   * Creates folder elements.
   */
  Folder.createEl = function () {
    var nameEl;
    var toggleEl;
    var branchEl;
    var Folder = this;
    if (!Folder.el) {
      // Item elements.
      ItemProto.createEl.apply(Folder, arguments);
      Folder.el.className += ' folder';
      // Folder elements
      Folder.contentEl = imce.createEl('<div class="imce-folder-content clearfix"></div>');
      Folder.subtreeEl = imce.createEl('<div class="imce-subtree"></div>');
      branchEl = Folder.branchEl = imce.createEl('<div class="imce-branch"><span class="imce-branch-toggle"></span><span class="imce-branch-name imce-ficon"></span></div>');
      toggleEl = Folder.branchToggleEl = branchEl.firstChild;
      toggleEl.onclick = imce.eBranchToggleClick;
      nameEl = Folder.branchNameEl = branchEl.children[1];
      nameEl.onclick = imce.eBranchNameClick;
      branchEl.Folder = nameEl.Folder = toggleEl.Folder = Folder;
    }
  };

  /**
   * Sets the folder content.
   */
  Folder.setContent = function (content) {
    var i;
    var Item;
    var list;
    var Folder = this;
    var items = Folder.getItems();
    // Remove the items that no longer exist.
    for (i in items) {
      if (!imce.owns(items, i)) {
        continue;
      }
      Item = items[i];
      list = Item.isFolder ? content.subfolders : content.files;
      // Existing item is not in the list
      if (!list || !imce.owns(list, Item.name)) {
        // Make sure it's not (parent of) a predefined folder
        if (!Item.isFolder || !Item.hasPredefinedPath()) {
          Folder.removeItem(Item);
        }
      }
    }
    Folder.extend(content.props);
    Folder.addContent(content);
    Folder.content = content;
    Folder.updateSubtree();
  };

  /**
   * Adds new files and subfolders.
   */
  Folder.addContent = function (content, selectNew) {
    var Folder = this;
    var files = content.files;
    var subfolders = content.subfolders;
    if (!files && !subfolders) {
      return;
    }
    // Add items
    Folder.addItems(files, 'file');
    Folder.addItems(subfolders, 'folder');
    // Update sort
    if (Folder.active) {
      Folder.sortItems();
    }
    else {
      Folder.needSort = 1;
    }
    Folder.sortTree();
    // Select new items.
    if (selectNew && Folder.active) {
      var name;
      var fname;
      var sname;
      imce.deselectAll();
      if (files) {
        for (fname in files) {
          if (!imce.owns(files, fname)) {
            continue;
          }
          Folder.getItem(fname).select();
        }
      }
      if (subfolders) {
        for (sname in subfolders) {
          if (!imce.owns(subfolders, sname)) {
            continue;
          }
          Folder.getItem(sname).select();
        }
      }
      // Scroll the last item into view
      if (name = (fname || sname)) {
        Folder.getItem(name).scrollIntoView();
      }
    }
  };

  /**
   * Add a list of items of a specific type.
   */
  Folder.addItems = function (items, type) {
    var Item;
    var name;
    var Type = type === 'folder' ? imce.Folder : imce.File;
    if (items) {
      for (name in items) {
        // Update
        if (Item = this.getItem(name)) {
          Item.extend(items[name]);
          this.updateStatus();
        }
        // Insert
        else {
          Item = new Type(name);
          Item.extend(items[name]);
          this.appendItem(Item);
        }
      }
    }
  };

  /**
   * Returns a copy of items array.
   */
  Folder.getItems = function () {
    return this.items.slice(0);
  };

  /**
   * Append an item to the folder.
   */
  Folder.appendItem = function (Item) {
    var Folder = this;
    var name = Item.name;
    var existing;
    if (!Folder.validateAppend(Item)) {
      return;
    }
    // Remove the item from old parent
    Item.remove(true);
    // Remove existing item with the same name
    if (existing = Folder.getItem(name)) {
      existing.remove();
    }
    // Append item.
    Folder.items.push(Item);
    Item.parent = Folder;
    Folder.contentEl.appendChild(Item.el);
    // Append subfolder
    if (Item.isFolder) {
      Folder.prepareSubtree();
      Folder.subtreeEl.appendChild(Item.branchEl);
      Folder.subfolders[name] = Item;
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + Item.name);
    }
    // Append file
    else {
      Folder.files[name] = Item;
    }
    // Update status.
    Folder.updateStatus();
  };

  /**
   * Remove an item from the folder.
   */
  Folder.removeItem = function (Item, shallow, i) {
    var name = Item.name;
    var Folder = this;
    // Check if the item is a child
    if (Item.parent !== Folder) {
      return;
    }
    // Deep removal
    if (!shallow) {
      // Remove all descendants of the subfolder.
      if (Item.isFolder) {
        for (i in Item.items) {
          if (!imce.owns(Item.items, i)) {
            continue;
          }
          Item.removeItem(Item.items[i]);
        }
      }
    }
    // Set item free.
    Item.deselect();
    Item.setBusy(false);
    // Remove subfolder
    if (Item.isFolder) {
      if (Item.active) {
        Folder.activate();
      }
      Item.setPath(null);
      delete Folder.subfolders[name];
      imce.removeEl(Item.branchEl);
      Folder.updateSubtree();
    }
    // Remove file
    else {
      delete Folder.files[name];
    }
    // Remove item
    Folder.items.splice(!i ? Folder.indexOf(Item) : i, 1);
    delete Item.parent;
    imce.removeEl(Item.el);
    Folder.updateStatus();
  };

  /**
   * Set folder path.
   * Register the folder to the tree.
   */
  Folder.setPath = function (newpath) {
    var i;
    var Folder = this;
    var oldpath = Folder.path;
    var subfolders = Folder.subfolders;
    if (oldpath !== newpath) {
      // Remove
      if (newpath == null) {
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(null);
        }
        delete imce.tree[oldpath];
        delete Folder.path;
      }
      // Add
      else {
        Folder.path = newpath;
        imce.tree[newpath] = Folder;
        Folder.setDisabled(!Folder.getConf());
        for (i in subfolders) {
          if (!imce.owns(subfolders, i)) {
            continue;
          }
          subfolders[i].setPath(newpath + '/' + subfolders[i].name);
        }
        Folder.updateStatus();
      }
    }
  };

  /**
   * Returns a permission value.
   */
  Folder.getPermission = function (name) {
    return imce.permissionInFolderConf(name, this.getConf());
  };

  /**
   * Returns folder configuration.
   */
  Folder.getConf = function () {
    var conf = this.conf;
    var parent;
    if (conf) {
      return conf;
    }
    if (parent = this.parent) {
      if (conf = parent.getConf()) {
        if (imce.permissionInFolderConf('browse_subfolders', conf)) {
          return $.extend({inherited: true}, conf);
        }
      }
    }
  };

  /**
   * Sets folder configuration.
   */
  Folder.setConf = function (conf) {
    if (this.conf !== conf) {
      this.conf = conf;
      this.setDisabled(!this.getConf());
    }
  };

  /**
   * Open folder.
   */
  Folder.open = function (refresh) {
    if (refresh || !this.content) {
      this.load();
    }
    this.activate();
  };

  /**
   * Dynamically load folder contents.
   */
  Folder.load = function () {
    if (this.isReady()) {
      this.setLoading(true);
      imce.ajax('browse', {
        activeFolder: this,
        customComplete: imce.xFolderLoadComplete
      });
    }
  };

  /**
   * Activate folder.
   */
  Folder.activate = function () {
    var Folder = this;
    var oldFolder = imce.activeFolder;
    var parent = Folder.parent;
    if (!Folder.active) {
      // Deactivate the old dir.
      if (oldFolder) {
        oldFolder.deactivate();
      }
      // Check sort
      if (Folder.needSort) {
        Folder.sortItems();
      }
      imce.activeFolder = Folder;
      Folder.active = true;
      $(Folder.branchEl).addClass('active');
      // Add the content to the dom if it is fully loaded.
      if (!Folder.loading) {
        Folder.addContentToDom();
      }
      Folder.setContentVisibility(true);
      // Expand parents if collapsed.
      while (parent) {
        parent.expand();
        parent = parent.parent;
      }
      // Update status and header
      Folder.updateHeader();
      Folder.updateStatus();
      // Trigger activateFolder handlers.
      imce.trigger('activateFolder', Folder, oldFolder);
    }
  };

  /**
   * Deactivate folder.
   */
  Folder.deactivate = function () {
    var Folder = this;
    if (Folder.active) {
      Folder.setContentVisibility(false);
      imce.deselectAll();
      imce.activeFolder = null;
      Folder.active = false;
      $(Folder.branchEl).removeClass('active');
    }
  };

  /**
   * Set loading state.
   */
  Folder.setLoading = function (state) {
    var Folder = this;
    if (state) {
      if (!Folder.loading) {
        Folder.setBusy(true);
        Folder.setState('loading');
        if (Folder.active) {
          imce.deselectAll();
        }
      }
    }
    else if (Folder.loading) {
      Folder.setBusy(false);
      Folder.unsetState('loading');
      if (Folder.active) {
        Folder.addContentToDom();
      }
    }
  };

  /**
   * Returns an item by name.
   */
  Folder.getItem = function (name) {
    var Folder = this;
    if (imce.owns(Folder.files, name)) {
      return Folder.files[name];
    }
    if (imce.owns(Folder.subfolders, name)) {
      return Folder.subfolders[name];
    }
  };

  /**
   * Returns an item by index.
   */
  Folder.getItemAt = function (i) {
    return this.items[i];
  };

  /**
   * Returns the index of an item.
   */
  Folder.indexOf = function (Item) {
    return $.inArray(Item, this.items);
  };

  /**
   * Selects all items.
   */
  Folder.selectAll = function () {
    for (var i in this.items) {
      if (!imce.owns(this.items, i)) {
        continue;
      }
      this.items[i].select();
    }
  };

  /**
   * Returns the number of items.
   */
  Folder.countItems = function () {
    return this.items.length;
  };

  /**
   * Returns the number of subfolders.
   */
  Folder.countSubfolders = function () {
    var i;
    var count = 0;
    for (i in this.subfolders) {
      if (!imce.owns(this.subfolders, i)) {
        continue;
      }
      count++;
    }
    return count;
  };

  /**
   * Name change handler.
   */
  Folder.onNameChange = function (oldval) {
    ItemProto.onNameChange.apply(this, arguments);
    this.branchNameEl.innerHTML = Drupal.checkPlain(this.name);
  };

  /**
   * Item name change handler.
   * Triggered by imce.Item.onNameChange()
   */
  Folder.onItemNameChange = function (Item, oldname) {
    var Folder = this;
    var name = Item.name;
    var group = Item.isFolder ? Folder.subfolders : Folder.files;
    delete group[oldname];
    group[name] = Item;
    // Set folder path
    if (Item.isFolder) {
      Item.setPath((Folder.parent ? Folder.path + '/' : '') + name);
    }
  };

  /**
   * Double-click handler.
   */
  Folder.dblClick = function () {
    this.open();
  };

  /**
   * Inserts the content element into the main content area.
   */
  Folder.addContentToDom = function () {
    var el = this.contentEl;
    var parentEl = imce.contentEl;
    if (el.parentNode !== parentEl) {
      parentEl.appendChild(el);
    }
  };

  /**
   * Sets visibility of the content element.
   */
  Folder.setContentVisibility = function (show) {
    var el = this.contentEl;
    el.style.display = show ? '' : 'none';
    if (el.scrollTop) {
      el.scrollTop = 0;
    }
  };

  /**
   * Prepares for subfolder appending.
   */
  Folder.prepareSubtree = function () {
    var Folder = this;
    if (Folder.subtreeEl.parentNode !== Folder.branchEl) {
      Folder.branchEl.appendChild(Folder.subtreeEl);
      $(Folder.branchEl).removeClass('leaf');
      // Prevent expanding of inactive dirs except the first activated dir on init
      if (!Folder.active && imce.activeFolder) {
        Folder.expanded = true;
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
  };

  /**
   * Check and remove subtree element if it's empty.
   */
  Folder.updateSubtree = function () {
    if (!this.countSubfolders()) {
      this.shrink();
      imce.removeEl(this.subtreeEl);
      $(this.branchEl).addClass('leaf');
    }
  };

  /**
   * Expands the subtree.
   */
  Folder.expand = function () {
    if (!this.expanded) {
      this.expanded = true;
      $(this.branchEl).addClass('expanded');
      $(this.subtreeEl).show();
    }
  };

  /**
   * Shrinks the subtree.
   */
  Folder.shrink = function () {
    if (this.expanded) {
      this.expanded = false;
      $(this.branchEl).removeClass('expanded');
      $(this.subtreeEl).hide();
    }
  };

  /**
   * Update folder status.
   */
  Folder.updateStatus = function () {
    if (this.active) {
      imce.updateStatus();
    }
  };

  /**
   * Update header sort.
   */
  Folder.updateHeader = function () {
    if (this.active) {
      imce.updateHeader();
    }
  };

  /**
   * Sort folder items by an item property.
   */
  Folder.sortItems = function (key, desc) {
    var i;
    var sorter;
    var Folder = this;
    var items = Folder.items;
    var active = Folder.activeSort || imce.activeSort || imce.local.activeSort || {};
    if (key == null) {
      key = active.key || 'name';
    }
    if (desc == null) {
      desc = !!active.desc;
    }
    // Remove lazy sort flag.
    Folder.needSort = 0;
    // Check sorter
    if (sorter = imce.sorters[key]) {
      items.sort(sorter);
      if (desc) {
        items.reverse();
      }
      for (i in items) {
        if (!imce.owns(items, i)) {
          continue;
        }
        this.contentEl.appendChild(items[i].el);
      }
      Folder.activeSort = {key: key, desc: desc};
      Folder.updateHeader();
    }
  };

  /**
   * Sorts folder tree elements by name.
   */
  Folder.sortTree = function () {
    var i;
    var Folder = this;
    var subfolders = Folder.subfolders;
    var arr = [];
    for (i in subfolders) {
      if (!imce.owns(subfolders, i)) {
        continue;
      }
      arr.push(subfolders[i]);
    }
    if (arr.length > 1) {
      arr.sort(imce.sortBranchName);
      for (i in arr) {
        if (!imce.owns(arr, i)) {
          continue;
        }
        Folder.subtreeEl.appendChild(arr[i].branchEl);
      }
    }
  };

  /**
   * Check if the item can be appended to the folder.
   */
  Folder.validateAppend = function (Item, copy) {
    // Disallow self appending
    if (Item === this) {
      return false;
    }
    var parent = Item.parent;
    // Allow orphan appending
    if (!parent) {
      return true;
    }
    // Disallow re-appending children
    if (!copy && parent === this) {
      return false;
    }
    // Disallow (grand)parents appending
    if (Item.isFolder) {
      for (parent = this.parent; parent; parent = parent.parent) {
        if (parent === Item) {
          return false;
        }
      }
    }
    return true;
  };

  /**
   * Checks if the folder is predefined.
   */
  Folder.isPredefined = function () {
    return !!this.conf;
  };

  /**
   * Returns the first predefined descendent including itself.
   */
  Folder.hasPredefinedPath = function () {
    if (this.isPredefined()) {
      return this;
    }
    var i;
    var Folder;
    var subfolders = this.subfolders;
    for (i in subfolders) {
      if (Folder = subfolders[i].hasPredefinedPath()) {
        return Folder;
      }
    }
    return false;
  };

  /**
   * Returns status text.
   */
  Folder.formatStatus = function () {
    return '<div class="items">' + imce.formatItemsStatus(this.countItems(), this.getSize()) + '</div>';
  };

  /**
   * Returns the size of the folder.
   */
  Folder.getSize = function () {
    var i;
    var size = 0;
    var files = this.files;
    for (i in files) {
      if (!imce.owns(files, i)) {
        continue;
      }
      size += files[i].size || 0;
    }
    return size;
  };


  /**
   * Click event for branch name.
   */
  imce.eBranchNameClick = function (event) {
    this.Folder.open();
    return false;
  };


  /**
   * Click event for branch toggle.
   */
  imce.eBranchToggleClick = function (event) {
    var Folder = this.Folder;
    if (Folder.countSubfolders()) {
      if (Folder.expanded) {
        Folder.shrink();
      }
      else {
        Folder.expand();
      }
    }
    else {
      Folder.open();
    }
    return false;
  };

  /**
   * Ajax complete handler for folder loading.
   */
  imce.xFolderLoadComplete = function (xhr, status) {
    var content;
    var opt = this;
    var Folder = opt.activeFolder;
    var response = opt.response;
    if (response && (content = response.content)) {
      Folder.setContent(content);
    }
    Folder.setLoading(false);
    if (Folder.countSubfolders()) {
      Folder.expand();
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Toolbar Button object.
   */

  /**
   * Toolbar button constructor.
   */
  imce.Tbb = function (id, opt) {
    this.construct(id, opt);
  };

  /**
   * Toolbar button prototype.
   */
  var Tbb = imce.Tbb.prototype;

  /**
   * Constructs button object.
   */
  Tbb.construct = function (id, opt) {
    var Tbb = imce.toolbarButtons[id] = this;
    Tbb.id = id;
    $.extend(Tbb, opt);
    // Append or prepend the element.
    var el = Tbb.createEl();
    var parent = imce.toolbarEl;
    if (Tbb.prepend && parent.firstChild) {
      parent.insertBefore(el, parent.firstChild);
    }
    else {
      parent.appendChild(el);
    }
    // Add shortcut
    if (Tbb.shortcut) {
      imce.addShortcut(Tbb.shortcut, el);
    }
  };

  /**
   * Creates toolbar button element.
   */
  Tbb.createEl = function () {
    var Tbb = this;
    var el = Tbb.el;
    var icon;
    if (!el) {
      el = Tbb.el = imce.createEl('<span class="imce-tbb imce-ficon" role="button"><span class="imce-tbb-title"></span></span>');
      if (icon = Tbb.icon) {
        el.className += ' imce-ficon-' + icon;
      }
      el.className += ' imce-tbb--' + Tbb.id;
      el.title = (Tbb.tooltip || Tbb.title) + (Tbb.shortcut ? ' (' + Tbb.shortcut + ')' : '');
      el.onclick = imce.eTbbClick;
      el.Tbb = Tbb;
      el.firstChild.innerHTML = Tbb.title;
    }
    return el;
  };

  /**
   * Create item popup.
   */
  Tbb.createPopupEl = function () {
    var Tbb = this;
    var el = Tbb.popupEl;
    if (!el) {
      el = Tbb.popupEl = imce.createLayer('imce-tbb-popup');
      el.className += ' imce-tbb-popup--' + Tbb.id;
      el.onkeydown = imce.eTbbPopupKeydown;
      el.Tbb = Tbb;
      if (Tbb.content) {
        el.appendChild(Tbb.content);
      }
    }
    return el;
  };

  /**
   * Open item popup.
   */
  Tbb.openPopup = function (autoclose) {
    var Tbb = this;
    if (!Tbb.active) {
      Tbb.createPopupEl();
      Tbb.setActive(true);
      var popupEl = Tbb.popupEl;
      var $el = $(Tbb.el);
      var css = $el.offset();
      css.top += $el.outerHeight(true);
      $(popupEl).css(css).fadeIn();
      imce.fixPosition(popupEl);
      // Focus on first input
      $('form').find('input,select,textarea').filter(':visible').eq(0).focus();
      if (autoclose) {
        $(document).bind('mousedown', {Tbb: Tbb}, imce.eTbbDocMousedown);
      }
      if (Tbb.onopen) {
        Tbb.onopen.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Close item popup.
   */
  Tbb.closePopup = function () {
    var Tbb = this;
    if (Tbb.popupEl && Tbb.active) {
      Tbb.setActive(false);
      $(Tbb.popupEl).hide();
      imce.contentEl.focus();
      if (Tbb.onclose) {
        Tbb.onclose.apply(Tbb, arguments);
      }
    }
  };

  /**
   * Set active state of the item.
   */
  Tbb.setActive = function (state) {
    this.toggleState('active', !!state);
  };

  /**
   * Set busy state of the item.
   */
  Tbb.setBusy = function (state) {
    this.toggleState('busy', !!state);
  };

  /**
   * Set disabled state of the item.
   */
  Tbb.setDisabled = function (state) {
    this.toggleState('disabled', !!state);
  };

  /**
   * Set/unset a state by name.
   */
  Tbb.toggleState = function (name, state) {
    var Tbb = this;
    var oldState = Tbb[name];
    if (state == null) {
      state = !oldState;
    }
    if (state) {
      if (!oldState) {
        Tbb[name] = true;
        $(Tbb.el).addClass(name);
      }
    }
    else if (oldState) {
      Tbb[name] = false;
      $(Tbb.el).removeClass(name);
    }
  };

  /**
   * Trigger click handler of the button.
   */
  Tbb.click = function (event) {
    var Tbb = this;
    if (!Tbb.disabled) {
      if (Tbb.handler && !Tbb.busy) {
        Tbb.handler.call(Tbb, imce.eFix(event));
      }
      if (Tbb.content) {
        Tbb.openPopup(true);
      }
    }
  };


  /**
   * Click event for toolbar buttons.
   */
  imce.eTbbClick = function (event) {
    this.Tbb.click(event);
  };

  /**
   * Mousedown event for document in order to close toolbar button popup.
   */
  imce.eTbbDocMousedown = function (e) {
    var Tbb = e.data.Tbb;
    var el = Tbb.popupEl;
    if (el !== e.target && !$.contains(el, e.target)) {
      Tbb.closePopup();
      $(document).unbind('mousedown', imce.eTbbDocMousedown);
    }
  };

  /**
   * Keydown event for toolbar button popup.
   */
  imce.eTbbPopupKeydown = function (event) {
    var e = event || window.event;
    // Close on Esc
    if (e.keyCode === 27) {
      this.Tbb.closePopup();
      return false;
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Newfolder plugin for Imce.
   */

  /**
   * Init handler for New folder.
   */
  imce.bind('init', imce.newfolderInit = function () {
    if (imce.hasPermission('create_subfolders')) {
      // Add toolbar button
      imce.addTbb('newfolder', {
        title: Drupal.t('New folder'),
        permission: 'create_subfolders',
        content: imce.createNewfolderForm(),
        shortcut: 'Ctrl+N',
        icon: 'folder-add'
      });
    }
  });

  /**
   * Creates new folder form.
   */
  imce.createNewfolderForm = function () {
    var form = imce.newfolderForm;
    if (!form) {
      form = imce.newfolderForm = imce.createEl('<form class="imce-newfolder-form"><input type="text" name="newfolder" class="imce-newfolder-input" size="16" /><button type="submit" name="op" class="imce-newfolder-button">' + Drupal.t('Create') + '</button></form>');
      form.elements.newfolder.placeholder = Drupal.t('Folder name');
      form.onsubmit = imce.eNewfolderSubmit;
    }
    return form;
  };

  /**
   * Submit event for new folder form.
   */
  imce.eNewfolderSubmit = function () {
    var name = this.elements.newfolder.value;
    if (imce.validateNewfolder(name)) {
      imce.ajax('newfolder', {data: {newfolder: name}});
      imce.getTbb('newfolder').closePopup();
    }
    return false;
  };

  /**
   * Validates new folder creation.
   */
  imce.validateNewfolder = function (name, parentFolder) {
    if (!parentFolder) {
      parentFolder = imce.activeFolder;
    }
    if (!parentFolder.isReady() || !parentFolder.getPermission('create_subfolders') || !imce.validateFileName(name)) {
      return false;
    }
    if (parentFolder.getItem(name)) {
      imce.setMessage(Drupal.t('%filename already exists.', {'%filename': name}));
      return false;
    }
    return true;
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Upload plugin for Imce.
   */

  /**
   * Init handler for Upload.
   */
  imce.bind('init', imce.uploadInit = function () {
    if (imce.hasPermission('upload_files')) {
      // Add toolbar button
      imce.addTbb('upload', {
        title: Drupal.t('Upload'),
        permission: 'upload_files',
        content: imce.createUploadForm(),
        shortcut: 'Ctrl+Alt+U',
        icon: 'upload'
      });
    }
  });

  /**
   * Creates the upload form.
   */
  imce.createUploadForm = function () {
    var els;
    var el;
    var exts;
    var form = imce.uploadForm;
    var name = 'files[imce][]';
    if (form) {
      return form;
    }
    form = imce.uploadForm = imce.createEl('<form class="imce-upload-form" method="post" enctype="multipart/form-data" accept-charset="UTF-8">' +
    '<div class="imce-form-item imce-form-file">' +
      '<label>' + Drupal.t('File') + '</label>' +
      '<input type="file" name="' + name + '" class="imce-file-input" multiple />' +
    '</div>' +
    '<div class="imce-form-actions">' +
      '<button type="submit" name="op" class="imce-upload-button">' + Drupal.t('Upload') + '</button>' +
    '</div>' +
    '<input type="hidden" name="jsop" value="upload" />' +
    '<input type="hidden" name="token" />' +
  '</form>');
    // Set action
    form.action = imce.getConf('ajax_url');
    els = form.elements;
    // Set token
    els.token.value = imce.getConf('token');
    // Set accepted extensions.
    el = els[name];
    exts = imce.getConf('extensions', '');
    // Skip for * which is interpreted incorrectly by some browsers.
    if (exts !== '*') {
      el.accept = '.' + exts.replace(/\s+/g, ',.');
    }
    // Ajax upload
    if (imce.canAjaxUpload()) {
      imce.activeUq = new imce.UploadQueue({name: name, accept: el.accept});
      form.insertBefore(imce.activeUq.el, form.firstChild);
      form.className += ' uq';
      if (imce.getConf('upload_auto_start', 1)) {
        form.className += ' auto-start';
      }
      form.onsubmit = imce.eUploadQueueSubmit;
    }
    // Iframe upload
    else {
      form.setAttribute('target', 'imce_upload_iframe');
      form.appendChild(imce.createEl('<input type="hidden" name="active_path" />'));
      form.appendChild(imce.createEl('<input type="hidden" name="return_html" value="1" />'));
      form.onsubmit = imce.eUploadIframeSubmit;
    }
    return form;
  };

  /**
   * Submit event for upload form with the upload queue.
   */
  imce.eUploadQueueSubmit = function (event) {
    imce.activeUq.start();
    return false;
  };

  /**
   * Submit event for upload form with iframe.
   */
  imce.eUploadIframeSubmit = function (event) {
    if (!imce.validateUploadForm(this)) {
      return false;
    }
    imce.createUploadIframe();
    this.elements.active_path.value = imce.activeFolder.getPath();
    imce.uploadSetBusy(true);
  };

  /**
   * Validates upload form before submit.
   */
  imce.validateUploadForm = function (form) {
    var i;
    var file;
    var input = form.elements['files[imce][]'];
    var files = input.files;
    // HTML5
    if (files) {
      if (!files.length) {
        return false;
      }
      for (i = 0; file = files[i]; i++) {
        if (!imce.validateFileUpload(file)) {
          return false;
        }
      }
      return true;
    }
    // Old file input
    if (input.value) {
      file = {name: input.value.split(input.value.indexOf('/') === -1 ? '\\' : '/').pop()};
      return imce.validateFileUpload(file);
    }
    return false;
  };

  /**
   * Validates a file before uploading.
   */
  imce.validateFileUpload = function (file) {
    // Extension
    var exts = imce.getConf('extensions', '');
    if (exts !== '*' && !imce.validateExtension(imce.getExt(file.name), exts)) {
      return false;
    }
    // Size
    var maxsize = imce.getConf('maxsize');
    if (maxsize && file.size && file.size > maxsize) {
      imce.setMessage(Drupal.t('%filename is %filesize exceeding the maximum file size of %maxsize.', {
        '%filename': file.name,
        '%filesize': imce.formatSize(file.size),
        '%maxsize': imce.formatSize(maxsize)
      }));
      return false;
    }
    // Name
    if (!imce.validateFileName(file.name)) {
      return false;
    }
    // Trigger validators.
    return $.inArray(false, imce.trigger('validateFileUpload', file)) === -1;
  };

  /**
   * Creates upload iframe.
   */
  imce.createUploadIframe = function () {
    var el = imce.uploadIframe;
    if (!el) {
      el = imce.uploadIframe = imce.createEl('<iframe name="imce_upload_iframe" class="imce-upload-iframe" style="position: absolute; top: -9999px; left: -9999px;" src="javascript: "></iframe>');
      document.body.appendChild(el);
      setTimeout(function () {
        el.onload = imce.eUploadIframeLoad;
      });
    }
    return el;
  };

  /**
   * Load event of upload iframe.
   */
  imce.eUploadIframeLoad = function (event) {
    var text;
    var response;
    var doc;
    var $body;
    var el = this;
    try {
      doc = el.contentDocument || el.contentWindow && el.contentWindow.document;
      if (doc) {
        $body = $(doc.body);
        if (text = $body.find('textarea').eq(0).val()) {
          response = $.parseJSON(text);
        }
        $body.empty();
      }
    }
    catch (err) {
      imce.delayError(err);
    }
    imce.uploadIframeComplete(response, text);
  };

  /**
   * Complete handler of iframe upload;
   */
  imce.uploadIframeComplete = function (response, text) {
    // Got a proper response
    if (response) {
      imce.ajaxProcessResponse(response);
      if (response.added) {
        imce.uploadResetInput(imce.uploadForm.elements['files[imce][]']);
        imce.getTbb('upload').closePopup();
      }
    }
    // Failed
    else {
      imce.setMessage(Drupal.t('Invalid response received from the server.'));
      if (text) {
        imce.setMessage('<pre>' + Drupal.checkPlain(text) + '</pre>');
      }
    }
    imce.uploadSetBusy(false);
  };

  /**
   * Set upload busy state.
   */
  imce.uploadSetBusy = function (state) {
    $('.imce-upload-button', imce.uploadForm).toggleClass('busy', state)[0].disabled = state;
  };

  /**
   * Check support for ajax upload.
   */
  imce.canAjaxUpload = function () {
    var support = imce.ajaxUploadSupport;
    if (support == null) {
      try {
        support = !!(window.FormData && (new XMLHttpRequest().upload));
      }
      catch (err) {
        support = false;
      }
      imce.ajaxUploadSupport = support;
    }
    return support;
  };

  /**
   * Resets a file input.
   */
  imce.uploadResetInput = function (input) {
    // Try value reset first
    if ($(input).val('').val()) {
      // Use form reset
      var form = document.createElement('form');
      var parent = input.parentNode;
      form.style.display = 'none';
      parent.insertBefore(form, input);
      form.appendChild(input);
      form.reset();
      parent.insertBefore(input, form);
      parent.removeChild(form);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines imce Upload Queue and Upload Queue Item.
   */

  /**
   * Upload queue constructor.
   */
  imce.UploadQueue = function (conf) {
    this.construct(conf);
  };

  /**
   * Upload queue prototype.
   */
  var Uq = imce.UploadQueue.prototype;

  /**
   * Constructs upload queue.
   */
  Uq.construct = function (conf) {
    var Uq = this;
    Uq.items = {};
    Uq.queue = [];
    Uq.conf = $.extend({name: 'files[imce][]'}, conf);
    Uq.createEl();
  };

  /**
   * Creates upload queue element.
   */
  Uq.createEl = function () {
    var Uq = this;
    var el = Uq.el;
    var inputEl;
    var accept;
    if (!el) {
      el = Uq.el = imce.createEl('<div class="imce-uq"><span class="imce-uq-button imce-ficon imce-ficon-plus"><span class="imce-uq-label">' + Drupal.t('Add file') + '</span><input type="file" class="imce-uq-input" multiple /></span><div class="imce-uq-items"></div></div>');
      inputEl = Uq.inputEl = el.firstChild.lastChild;
      inputEl.onchange = imce.eUqInputChange;
      if (accept = Uq.conf.accept) {
        inputEl.accept = accept;
      }
      Uq.itemsEl = el.lastChild;
      el.Uq = inputEl.Uq = Uq;
    }
    return el;
  };

  /**
   * Starts the queue.
   */
  Uq.start = function () {
    var Uq = this;
    if (!Uq.running && Uq.queue.length) {
      if (Uq.next()) {
        Uq.running = true;
        imce.uploadSetBusy(true);
      }
    }
    return Uq.running;
  };

  /**
   * Ends the queue.
   */
  Uq.end = function () {
    if (this.running) {
      this.running = false;
      imce.uploadSetBusy(false);
      imce.getTbb('upload').closePopup();
    }
  };

  /**
   * Process the first available item in the queue.
   */
  Uq.next = function () {
    var i;
    var Item;
    var queue = this.queue.slice(0);
    for (i = 0; Item = queue[i]; i++) {
      // Remove completed items from the queue.
      if (Item.completed) {
        Item.remove();
      }
      else if (Item.start()) {
        return Item;
      }
    }
    // No items left. End the queue if running.
    this.end();
  };

  /**
   * Select files from a file reference list.
   */
  Uq.selectFiles = function (list) {
    var i;
    var file;
    var Item;
    var ret;
    var path = imce.activeFolder.getPath();
    for (i = 0; file = list[i]; i++) {
      if (imce.validateFileUpload(file)) {
        Item = new imce.UploadQueueItem(file, path);
        if (this.addItem(Item)) {
          if (!ret) {
            ret = {};
          }
          ret[i] = Item.id;
        }
        else {
          Item.remove();
        }
      }
    }
    return ret;
  };

  /**
   * Returns a queue item.
   */
  Uq.getItem = function (id) {
    return this.items[id];
  };

  /**
   * Adds a queue item.
   */
  Uq.addItem = function (Item) {
    var existing;
    var Uq = this;
    var id = Item.id;
    // Check existing
    if (existing = Uq.getItem(id)) {
      existing.remove(true);
    }
    Item.Uq = Uq;
    Uq.items[id] = Uq.queue[Uq.queue.length] = Item;
    Uq.itemsEl.appendChild(Item.el);
    return Item;
  };

  /**
   * Removes a queue item.
   */
  Uq.removeItem = function (Item, quick) {
    var Uq = this;
    var queue = Uq.queue;
    var i = $.inArray(Item, queue);
    if (i !== -1) {
      queue.splice(i, 1);
      delete Uq.items[Item.id];
      if (quick) {
        $(Item.el).remove();
      }
      else {
        $(Item.el).fadeOut(1000, imce.eUqItemFadeout);
      }
      return Item;
    }
  };

  /**
   * Prepare ajax options for an item.
   */
  Uq.ajaxPrepare = function (Item) {
    var i;
    var field;
    var data;
    var formData;
    var Folder;
    var Uq = this;
    var file = Item.file;
    var dest = Item.destination;
    // Check file and destination
    if (!file || !dest || !(Folder = imce.getFolder(dest))) {
      return;
    }
    // Prepare form data
    data = $(Uq.inputEl.form).serializeArray().concat([{name: 'active_path', value: dest}], Item.formData || []);
    formData = new FormData();
    for (i = 0; field = data[i]; i++) {
      if (field.name) {
        formData.append(field.name, field.value);
      }
    }
    formData.append(Uq.conf.name, Item.file);
    // Extend default ajax options
    return $.extend(imce.ajaxDefaults(), {
      data: formData,
      processData: false,
      contentType: false,
      custombeforeSend: imce.xUqItemBeforeSend,
      customComplete: imce.xUqItemComplete,
      itemId: Item.id,
      activeFolder: Folder
    });
  };


  /**
   * Upload queue item constructor.
   */
  imce.UploadQueueItem = function (file, destination) {
    this.construct(file, destination);
  };

  /**
   * Upload queue item prototype.
   */
  var UqItem = imce.UploadQueueItem.prototype;

  /**
   * Constructs upload queue item.
   */
  UqItem.construct = function (file, destination) {
    this.file = file;
    this.destination = destination;
    this.id = imce.joinPaths(destination, file.name);
    this.createEl();
  };

  /**
   * Creates upload queue element.
   */
  UqItem.createEl = function () {
    var cancelEl;
    var name;
    var Item = this;
    var el = Item.el;
    var file = Item.file;
    if (!el) {
      name = Drupal.checkPlain(file.name);
      el = Item.el = imce.createEl('<div class="imce-uqi"><div class="imce-uqi-cancel"></div><div class="imce-uqi-info"><span class="imce-uqi-name" title="' + name + '">' + name + '</span><span class="imce-uqi-size">' + imce.formatSize(file.size) + '</span></div><div class="imce-uqi-progress"><div class="imce-uqi-bar"></div></div><div class="imce-uqi-percent">' + Drupal.t('!percent%', {'!percent': 0}) + '</div></div>');
      el.Item = Item;
      // Set cancel element events
      cancelEl = el.firstChild;
      cancelEl.onclick = imce.eUqItemCancelClick;
      cancelEl.onmousedown = imce.eUqItemCancelMousedown;
    }
    return el;
  };

  /**
   * Removes the item from queue.
   */
  UqItem.remove = function (quick) {
    var ret;
    var Item = this;
    var Uq = Item.Uq;
    Item.stop();
    if (Uq) {
      Uq.removeItem(Item, quick);
    }
    Item.Uq = Item.xhr = Item.file = Item.formData = Item.el.Item = null;
    return ret;
  };

  /**
   * Start processing the item.
   */
  UqItem.start = function () {
    var opt;
    var Item = this;
    var Uq = Item.Uq;
    if (Uq && !Item.active && !Item.completed) {
      // Get ajax options
      if (opt = Uq.ajaxPrepare(Item)) {
        Item.active = true;
        $(Item.el).addClass('active');
        Item.xhr = $.ajax(opt);
        Uq.activeItem = Item;
        return Uq.activeItem;
      }
    }
  };

  /**
   * Stops processing the item.
   */
  UqItem.stop = function () {
    var Item = this;
    if (Item.active) {
      Item.active = false;
      $(Item.el).removeClass('active');
      if (Item.xhr) {
        Item.xhr.abort();
      }
      // Make sure the item is completed
      Item.complete();
    }
  };

  /**
   * Sets the item as completed.
   */
  UqItem.complete = function (status) {
    var Item = this;
    var Uq = Item.Uq;
    if (!Item.completed) {
      Item.completed = true;
      Item.status = status;
      $(Item.el).addClass(status ? 'success' : 'fail');
      if (status) {
        $('.imce-uqi-percent', Item.el).html(Drupal.t('!percent%', {'!percent': 100}));
      }
      // Check if this is the active item of the queue
      if (Uq && Uq.activeItem === Item) {
        Uq.activeItem = null;
        // Continue queue
        if (Uq.running) {
          Uq.next();
        }
      }
      // Make sure the item is stopped
      Item.stop();
    }
  };

  /**
   * Sets item progress.
   */
  UqItem.progress = function (percent) {
    $(this.el).find('.imce-uqi-percent').text(Drupal.t('!percent%', {'!percent': percent * 1})).end().find('.imce-uqi-bar').css('width', percent * 1 + '%');
  };


  /**
   * Change event of upload queue input
   */
  imce.eUqInputChange = function () {
    this.Uq.selectFiles(this.files);
    imce.uploadResetInput(this);
    if (imce.getConf('upload_auto_start', 1)) {
      $('.imce-upload-button', this.form).click();
    }
  };

  /**
   * Click event for cancel button of queue item.
   */
  imce.eUqItemCancelClick = function (event) {
    var Item = $(this).closest('.imce-uqi')[0].Item;
    if (Item) {
      Item.remove(true);
    }
    return false;
  };

  /**
   * Mousedown event for cancel button of queue item.
   */
  imce.eUqItemCancelMousedown = function (event) {
    return false;
  };

  /**
   * Fadeout callback for queue item.
   */
  imce.eUqItemFadeout = function () {
    $(this).remove();
  };

  /**
   * Ajax beforeSend handler of upload queue.
   */
  imce.xUqItemBeforeSend = function (xhr) {
    var id = this.itemId;
    xhr.upload.onprogress = function (e) {
      var Item = imce.activeUq.getItem(id);
      if (Item) {
        Item.progress(parseInt(e.loaded * 100 / e.total));
      }
    };
    xhr = null;
  };

  /**
   * Ajax complete handler of upload queue.
   */
  imce.xUqItemComplete = function (xhr, status) {
    var opt = this;
    var Item = imce.activeUq.getItem(opt.itemId);
    status = !!(opt.response && opt.response.added);
    if (Item) {
      Item.complete(status);
    }
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Delete plugin for Imce.
   */

  /**
   * Init handler for Delete.
   */
  imce.bind('init', imce.deleteInit = function () {
    // Check if delete permission exists.
    if (imce.hasPermission('delete_files') || imce.hasPermission('delete_subfolders')) {
      // Add toolbar button.
      imce.addTbb('delete', {
        title: Drupal.t('Delete'),
        permission: 'delete_files|delete_subfolders',
        handler: imce.deleteSelection,
        shortcut: 'DEL',
        icon: 'delete'
      });
    }
  });

  /**
   * Deletes the selected items in the active folder.
   */
  imce.deleteSelection = function () {
    var items = imce.getSelection();
    if (imce.validateDelete(items)) {
      if (confirm(Drupal.formatPlural(items.length, 'Delete !filename?', 'Delete the selected @count items?', {'!filename': items[0].name}))) {
        imce.ajaxItems('delete', items);
      }
    }
  };

  /**
   * Validates item deletion.
   */
  imce.validateDelete = function (items) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validatePermissions(items, 'delete_files', 'delete_subfolders') && imce.validatePredefinedPath(items);
  };

})(jQuery, Drupal, imce);
;
/*global imce:true*/
(function ($, Drupal, imce) {
  'use strict';

  /**
   * @file
   * Defines Resize plugin for Imce.
   */

  /**
   * Init handler for Resize.
   */
  imce.bind('init', imce.resizeInit = function () {
    if (imce.hasPermission('resize_images')) {
      // Add toolbar button
      imce.addTbb('resize', {
        title: Drupal.t('Resize'),
        permission: 'resize_images',
        content: imce.createResizeForm(),
        shortcut: 'Ctrl+Alt+R',
        icon: 'image'
      });
    }
  });

  /**
   * Creates resize form.
   */
  imce.createResizeForm = function () {
    var form = imce.resizeForm;
    if (!form) {
      form = imce.resizeForm = imce.createEl('<form class="imce-resize-form">' +
        '<div class="imce-form-item imce-resize-dimensions">' +
          '<input type="number" name="width" class="imce-resize-width-input" min="1" step="1" />' +
          '<span class="imce-resize-separator">x</span>' +
          '<input type="number" name="height" class="imce-resize-height-input" min="1" step="1" />' +
        '</div>' +
        '<div class="imce-form-item imce-resize-copy">' +
          '<label><input type="checkbox" name="copy" class="imce-resize-copy-input" />' + Drupal.t('Create a copy') + '</label>' +
        '</div>' +
        '<div class="imce-form-actions">' +
          '<button type="submit" name="op" class="imce-resize-button">' + Drupal.t('Resize') + '</button>' +
        '</div>' +
      '</form>');
      form.onsubmit = imce.eResizeSubmit;
      // Set max values
      var els = form.elements;
      els.width.max = imce.getConf('maxwidth') || 10000;
      els.height.max = imce.getConf('maxheight') || 10000;
      // Set placeholders
      els.width.placeholder = Drupal.t('Width');
      els.height.placeholder = Drupal.t('Height');
      // Set focus event
      els.width.onfocus = els.height.onfocus = imce.eResizeInputFocus;
    }
    return form;
  };

  /**
   * Submit event for resize form.
   */
  imce.eResizeSubmit = function () {
    var data;
    var els = this.elements;
    var width = parseInt(els.width.value * 1);
    var height = parseInt(els.height.value * 1);
    var copy = els.copy.checked ? 1 : 0;
    var items = imce.getSelection();
    if (imce.validateResize(items, width, height, copy)) {
      data = {width: width, height: height, copy: copy};
      imce.ajaxItems('resize', items, {data: data});
      imce.getTbb('resize').closePopup();
    }
    return false;
  };

  /**
   * Validates item resizing.
   */
  imce.validateResize = function (items, width, height, copy) {
    return imce.activeFolder.isReady() && imce.validateCount(items) && imce.validateImageTypes(items) && imce.validateDimensions(items, width, height) && imce.validatePermissions(items, 'resize_images');
  };

  /**
   * Focus event for resize width/height input.
   */
  imce.eResizeInputFocus = function () {
    var el = this;
    var val = el.value;
    // Apply aspect ratio of the selected image after min delay.
    setTimeout(function () {
      if (el === document.activeElement && val === el.value) {
        var ratio;
        var els = el.form.elements;
        var isWidth = els.width === el;
        var value = els[isWidth ? 'height' : 'width'].value * 1;
        var Item = imce.previewingItem;
        if (Item && Item.width && value) {
          ratio = Item.width / Item.height;
          el.value = Math.round(isWidth ? value * ratio : value / ratio);
        }
        el = null;
      }
    });
  };

})(jQuery, Drupal, imce);
;
