if [ -d "/local/drupal/site" ]; then
    echo "Skipping site download"
    cd /local/drupal/site
    echo "pulling latest code from $repository"
    git pull
else
    echo "Cloning code from $repository"
    git clone $repository site
    cd site
    composer require drush/drush
fi
cp /tmp/settings.php /local/drupal/site/web/sites/default
cp /tmp/.htaccess /local/drupal/site

exec httpd -DFOREGROUND
