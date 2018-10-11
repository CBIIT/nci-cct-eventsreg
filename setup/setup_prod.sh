#!/bin/bash

echo "*** Turning on Cache for Production"
echo ""
echo "Setting cache for 15 minutes"
drush cset system.performance cache.page.max_age 900 -y

echo "Setting css and js aggregation"
drush cset system.performance css.preprocess true -y

drush cset system.performance js.preprocess true -y