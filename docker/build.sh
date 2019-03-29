#!/bin/bash
docker kill drupal
docker rm drupal
docker rmi cbiit/drupal -f
docker build -t cbiit/drupal .
docker run -e repository=https://github.com/CBIIT/nci-cct-eventsreg -p 8080:80 --rm --name drupal cbiit/drupal
docker exec -it drupal bash
