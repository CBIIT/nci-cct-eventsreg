#!/bin/bash

echo "*** Setting up Environment for for Production"
echo ""
echo "Setting up cache"
scripts/cache_prod.sh
echo ""
echo "Setting up ldap"
echo ""
echo "Clearing Cache"

drush cr