#!/bin/bash

echo "*** Setting up Environment for for Development"
echo ""
echo "Setting up cache"
scripts/cache_dev.sh
echo ""
echo "Setting up ldap"
echo ""
echo "Clearing Cache"
drush cr

