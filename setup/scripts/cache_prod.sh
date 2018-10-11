#!/bin/bash

echo "*** Setting up Environment for for Production"
echo ""
echo "Setting up cache"
scripts/cache_prod.sh
echo "Setting up ldap"
