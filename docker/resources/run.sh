if [ -d "/local/drupal/site" ]; then
    echo "Skipping site download"
else
    echo "Pulling code from $repository"
    git clone $repository site
    cd site
    composer require drush/drush
fi
exec httpd -DFOREGROUND
