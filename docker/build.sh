#!/bin/bash
docker kill drupal
docker rm drupal
docker rmi cbiit/drupal -f
docker build -t cbiit/drupal .
docker run -e repository=$repository -e hash_salt=$hash_salt -e database=$database -e username=$username -e password=$password -e host=$host -e port=$port -e namespace=$namespace -e driver=$driver -p 8080:80 --rm --name drupal cbiit/drupal
docker exec -it drupal bash
