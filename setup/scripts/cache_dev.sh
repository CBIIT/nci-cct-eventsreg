#!/bin/bash

echo "*** Turning off Cache for Dev"
echo ""
echo "Setting cache for 15 minutes"
drush cset system.performance cache.page.max_age 0

echo "Setting css and js aggregation"
drush cset system.performance css.preprocess false

drush cset system.performance js.preprocess false
