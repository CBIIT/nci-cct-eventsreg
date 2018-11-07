
Docker Stuff

Creating a blank drupal site with volume for themes

docker run --name somesite -p 8080:80 -v ~/themes:/var/www/html/themes drupal
