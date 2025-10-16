#!/bin/bash
APP_PATH="/Applications/r2modman.app"
echo "Removing quarantine attributes from $APP_PATH"
xattr -cr "$APP_PATH"
echo "Done! You should now be able to open r2modman without issues."
