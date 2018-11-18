<?php 

function eventsreg_preprocess_page(&$variables) {
	
	//drupal_set_message(EventsRegPageMaker::sayMyName());
	drupal_set_message("eventsreg_preprocess_page");
	//ICRP Partnership Forum
	$variables['route_name'] = \Drupal::routeMatch()->getRouteName();

	switch (\Drupal::routeMatch()->getRouteName()) {
    case 'entity.node.canonical':
		$node = \Drupal::routeMatch()->getParameter('node');
		$nid = $node->id();

    	//$attachment = EventsRegPageMaker::setupPage($nid, \Drupal::routeMatch()->getRouteName());
    	//Node
		$bundle = $variables['node']->bundle();
		//dpm($variables['route_name']);
		dpm("bundle: ".$bundle);
		if($bundle == "page") {
			dpm("We got a page.  Do we have a Website page?");
			if ($node instanceof \Drupal\node\NodeInterface) {
			  // You can get nid and anything else you need from the node object.
				$path = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
				$variables['eventsreg']['active_link'] = $path;
				dpm($nid."  ".$alias);
				$acronym = decodeAlias($path); 
				//Set active link so we can set it on the <li class="active"></li>
				//$variables['eventsreg']['active_link'] = $alias;
				dpm($acronym);
				//Create up to three menus if they exist: -menu, -util, and -admin (<acronym>-util)
			}
		}
		
		if($bundle == "webform") {
			dpm("We got a webform.  Do we have a Website page?");
			//Lookup name webform id in node__webform table
			dpm("nid: ". $nid);
			$acronym = getAcronymFromWebformNode($nid);
				$path = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
				$variables['eventsreg']['active_link'] = $path;
				dpm($nid."  ".$alias);
		}
		

		$menus = ["menu" => $acronym."-menu", "util" => $acronym."-util", "admin" => $acronym."-admin"];
        break;
    case 'entity.webform.canonical':
    	//  Remember all webform names must start with Events Acronym.
/*
		drupal_set_message("We got a webform");
		drupal_set_message("page['#title'] Title: ".$variables['page']['#title']);
		$pieces = explode(" ", $variables['page']['#title']);
		$acronym = $pieces[0];
		$menus = ["menu" => $acronym."-menu", "util" => $acronym."-util", "admin" => $acronym."-admin"];
    	//$webforms = \Drupal::entityTypeManager()->getStorage('webform')->loadMultiple();
    $config = \Drupal::config('webform.settings');
    //dump($config);
    	$webform = Webform::load('ccr_traco');
    	if(empty($webform)) {
    		drupal_set_message(t("No Webform"), 'status', FALSE);
    	}
    	//dump($webform);
  	    $webforms = Webform::loadMultiple();
	    foreach ($webforms as $webform) {
	      dump($webform);
	    }
*/

    	break;
    default:
		$menus = ["menu" => "default-menu", "util" => "default-util", "admin" => "default-admin"];
    	break;
	}

	foreach($menus as $menu => $menu_name) {
		if(isMenu($menu_name)) {
			attachMenuTree($menu, $menu_name, $variables);
		}
	}
	//dump($variables);
	//dpm($variables);
	/*
	$node = \Drupal::routeMatch()->getParameter('node');
	if ($node instanceof \Drupal\node\NodeInterface) {
	  // You can get nid and anything else you need from the node object.
		$nid = $node->id();
		dpm($nid);
	}
Webform {#2752 ▼
  #id: "cct_sssc_pdd_2018_registration_"
  #uuid: "5608867c-1db8-40e5-8442-e4fb7f6ed4bc"
  #override: false
  #status: "open"
  #open: null
  #close: null
  #weight: 0
  #template: false
  #archive: false
  #title: "cct-sssc-pdd-2018 (registration)"
  #description: "SSSC Profressional Development Day 2018 - Registration"
  #category: "cct"

	*/
}
