#~/bin/sh
if [ -d "/local/drupal/events" ]; then
        echo "Skipping drupal"
else
  echo "Making drupal Directory"
  mkdir -p /local/drupal
  cd /local/drupal
  echo "Cloning the repository"
  git clone https://github.com/CBIIT/nci-cct-eventsreg events
  cp /tmp/settings.php /local/drupal/events/web/sites/default
  cd /local/drupal/events
  while ! mysqladmin ping -h"$MYSQL_HOST" --silent; do
    echo "Waiting for database"
    sleep 1
  done
  composer update
  echo "Trying to create database"
  drush sql-create
  echo "Trying to import database"
  drush sql-cli < database.sql
  echo "Run composer update"
  composer update
  cp /tmp/.htaccess ./  
  cd setup
  ./setup_dev.sh
  drush cr
fi
echo "Pulling latest code"
cd /loca/drupal/events
git pull
echo "Starting apache"
apache2-foreground
