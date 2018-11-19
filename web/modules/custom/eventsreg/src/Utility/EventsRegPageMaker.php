<?php

namespace Drupal\eventsreg\Utility;

use Drupal\node\Entity\Node;
/**
 * Provides helper to setup logo, menus, for EventsReg Website.
 */
class EventsRegPageMaker {

  public static function setupPage(&$variables) {
    self::setupMenus($variables); 
  }
  
  public static function setupMenus(&$variables) {

    $route_name = \Drupal::routeMatch()->getRouteName();

    if($route_name == 'entity.node.canonical') {
      $node = \Drupal::routeMatch()->getParameter('node');
      $nid = $node->id();
      //$bundle = $node->getType();
      //$variables['route_name'] = \Drupal::routeMatch()->getRouteName();
      //drupal_set_title('Wow.  I got the title');
      //drupal_set_message($route);
      //dpm("setupPage: nid: ". $nid);
      //$node = Node::load($nid);
      //$bundle = $node->getType();
      $path = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
      $variables['eventsreg']['active_link'] = $path;
      $variables['eventsreg']['home_link'] = self::formatHomeLink($path);

      //drupal_set_message("OFFICIAL PATH: ".$path);
      $acronym = self::getAcronymFromPath($path);
      //drupal_set_message("OFFICIAL ACRONYM: ".$acronym);
      if(self::isWebsite($acronym)) {
        //drupal_set_message("THIS IS AN OFFICIAL WEBSITE");
        $menus = ["menu" => $acronym."-menu", "util" => $acronym."-util", "admin" => $acronym."-admin"];
      } else {
        //drupal_set_message("THIS IS AN Not a website!");
        #$menus = ["menu" => "default-menu", "util" => "ccr-traco-menu", "admin" => "default-admin"];
        $menus = ["menu" => "default-menu", "util" => "default-util", "admin" => "default-admin"];
      }

    } else {
      // Set Default menus
      $menus = ["menu" => "default-menu", "util" => "default-util", "admin" => "default-admin"];
    }

    foreach($menus as $menu => $menu_name) {
      if(isMenu($menu_name)) {
        self::attachMenuTree($menu, $menu_name, $variables);
      }
    }

    return;
  }

  public function setupPage2($nid, $event_route) {

    drupal_set_message('setupPage');
    drupal_set_message($event_route);
    
    //drupal_set_title('Wow.  I got the title');

    drupal_set_message($route);
    dpm("setupPage: nid: ". $nid);

    $node = Node::load($nid);
    $bundle = $node->getType();
    $path = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);

    switch ($event_route) {
      case 'entity.node.canonical':
        // Get a node storage object.
        $eventsreg['active_link'] = $path;
        $eventsreg['home_link'] = self::formatHomeLink($path);

        switch ($bundle) {
          case 'page':
            $acronym = self::decodeAlias($path); 
            drupal_set_message("We got the PAGE Acronym: ".$acronym, 'status', FALSE);
            break;
          case 'webform':
            dpm("We got a webform.  We got this from a different area?");
            //Lookup name webform id in node__webform table
            dpm("nid: ". $nid);
            $acronym = self::getAcronymFromWebformNode($nid);
            $path = \Drupal::service('path.alias_manager')->getAliasByPath('/node/'.$nid);
            $variables['eventsreg']['active_link'] = $path;
            dpm($nid."  ".$alias);
            $menus = ["menu" => $acronym."-menu", "util" => $cronym."-util", "admin" => $acronym."-admin"];
            break;
        }
        //$menus = ["menu" => $acronym."-menu", "util" => $acronym."-util", "admin" => $acronym."-admin"];
      default:
        $menus = ["menu" => "default-menu", "util" => "default-util", "admin" => "default-admin"];
        break;
    }

    foreach($menus as $menu => $menu_name) {
      if(isMenu($menu_name)) {
        self::attachMenuTree($menu, $menu_name, $variables);
      }
    }

      return;
  }
/*
  private static function getAcronymFromWebformNode($nid) {
    $acronym = "";

    $query = "SELECT webform_target_id FROM node__webform where entity_id = $nid";
    $result = db_query($query);
    $row = $result->fetchObject();
    $webform_id = $row->webform_target_id;
    $pieces = explode("_", $webform_id);
    $acronym = $pieces[0].'-'.$pieces[1];

    return $acronym;
  }
*/
  private static function isWebsite($acronym) {
    $query = "SELECT count(*) as isWebsite FROM node_field_data ";
    $query .= "where type = 'event' and title='{$acronym}'; ";
    $result = db_query($query);
    $row = $result->fetchObject();
    //$webform_id = $row->webform_target_id;

    return $row->isWebsite;
  }

  private static function getAcronymFromPath($alias){
    //drupal_set_message("decodeAlias");
    $pieces = explode("/", substr($alias, 1));
    return $pieces[0].'-'.$pieces[1];
    //return str_replace("/", "-", substr($alias, 1));
  }

  private static function attachMenuTree($menu, $menu_name, &$variables) {
    //dpm($menu." : ">$menu_name);
    $variables['eventsreg']['menus'][$menu] = self::menuLoadLinks($menu_name);
    //dump($variables);
    return;
  }

  private static function menuLoadLinks($menu_name) {
    $links = [];
    $storage = \Drupal::entityManager()->getStorage('menu_link_content');
    $menu_links = $storage->loadByProperties(['menu_name' => $menu_name]);
    //dump($menu_links);
    if (empty($menu_links)) return $links;
    foreach ($menu_links as $mlid => $menu_link) {
      //dpm("link_enabled".$menu_link->enabled);
      //dump($menu_link->title->value);
      //dump($menu_link->enabled->value);
      if($menu_link->enabled->value) {
        $link = [];
        $link['type'] = 'menu_link';
        $link['mlid'] = $menu_link->id->value;
        $link['plid'] = $menu_link->parent->value ?? '0';
        $link['menu_name'] = $menu_link->menu_name->value;
        $link['link_title'] = $menu_link->title->value;
        $link['uri'] = $menu_link->link->uri;
        $link['link'] = self::formatLink($menu_link->link->uri);
        $link['alias'] = self::nodeAlias($menu_link->link->uri);
        $link['options'] = $menu_link->link->options;
        $link['weight'] = $menu_link->weight->value;
        $links[] = $link;
      }
    }
    // Sort menu links by weight element
    //usort($links, [SortArray::class, 'weight']);
    //$sorted = array_orderby($links, 'weight', SORT_DESC);
    //dump($links);
    $sortArray = array();

    foreach($links as $mylinks){
        foreach($mylinks as $key=>$value){
            if(!isset($sortArray[$key])){
                $sortArray[$key] = array();
            }
            $sortArray[$key][] = $value;
        }
    } 
    $orderby = "weight";

    array_multisort($sortArray[$orderby], SORT_ASC, $links);

    //dump($links);

    return $links;
  }

  private static function nodeAlias($uri) {

    $pieces = explode(":", $uri);
    $link = $pieces[1];
    if($pieces[0] == 'entity') {
      $source = "/".$pieces[1];
      $query = "SELECT alias FROM url_alias where source = '{$source}'";
      $result = db_query($query);
      $row = $result->fetchObject();
      $alias = $row->alias;
      $link = $alias;
    }
    if($pieces[0] == 'http' || $pieces[0] == 'https') {
      $link = $uri;      
    }

    return $link;

  }

  private static function formatLink($uri) {
    $pieces = explode(":", $uri);
    //
    //dump($pieces);
    $link = $pieces[1];
    if($pieces[0] == 'entity') {
      $link = "/".$pieces[1];
    }
    return $link;
  }

  private static function formatHomeLink($path) {
    //Home Link will always be the frist two varialbes of the $current_path

    $pieces = explode("/", $path);
    $link = "/".$pieces[1]."/".$pieces[2];

    return $link;
  }

}
